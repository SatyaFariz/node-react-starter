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
import MoreTipsUpdate from '../../mutations/admin/TourMoreTipsUpdate'

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

  const [more_tips, setHighlights] = useState([
    ...(tour.more_tips || []),
    ...['', '', '']
  ])

  const handleChange = i => event => {
    const _more_tips = [...more_tips]
    _more_tips[i] = event.target.value
    setHighlights(_more_tips)
  }

  const remove = i => e => setHighlights(more_tips.filter((item, index) => index !== i))

  const add = () => setHighlights([...more_tips, ''])

  const save = () => {
    const variables = {
      _id: tour.tourID,
      more_tips: more_tips.filter(item => item.trim() !== '')
    }

    MoreTipsUpdate(environment, variables)
    closeEdit()
  }

  return (
    <div className={c.container}>
      
      {more_tips.map((item, i) => {
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
    fragment MoreTipsEdit_tour on Tour {
      tourID,
      more_tips
    }
  `
})