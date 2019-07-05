import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import FormActionButtons from './FormActionButtons'
import GuestRequirementsUpdate from '../../mutations/admin/TourGuestRequirementsUpdate'

const useStyles = makeStyles(theme => ({
  container: {

  },
  fab: {
    margin: theme.spacing(1),
  },

  fabContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const Component = props => {
  const c = useStyles()

  const { closeEdit, tour, relay: { environment }} = props

  const [guest_requirements, setHighlights] = useState([
    ...(tour.guest_requirements || []),
    ...['', '', '']
  ])

  const handleChange = i => event => {
    const _guest_requirements = [...guest_requirements]
    _guest_requirements[i] = event.target.value
    setHighlights(_guest_requirements)
  }

  const remove = i => e => setHighlights(guest_requirements.filter((item, index) => index !== i))

  const add = () => setHighlights([...guest_requirements, ''])

  const save = () => {
    const variables = {
      _id: tour.tourID,
      guest_requirements: guest_requirements.filter(item => item.trim() !== '')
    }

    GuestRequirementsUpdate(environment, variables)
    closeEdit()
  }

  return (
    <div className={c.container}>
      {guest_requirements.map((item, i) => {
        return (
          <TextField
            key={i}
            value={item}
            onChange={handleChange(i)}
            margin="normal"
            fullWidth
            multiline
            variant="outlined"
            InputProps={i > 2 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="Toggle password visibility" onClick={remove(i)}>
                    <CloseIcon/>
                  </IconButton>
                </InputAdornment>
              ),
            } : null}
          />
        )
      })}

      <div className={c.fabContainer}>
        <Fab color="primary" aria-label="Add" className={c.fab} onClick={add}>
          <AddIcon />
        </Fab>
      </div>

      <FormActionButtons
        onSaveButtonClick={save}
        onCancelButtonClick={closeEdit}
      />
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment GuestRequirementsEdit_tour on Tour {
      tourID,
      guest_requirements
    }
  `
})