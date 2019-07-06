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
import TermsAndConditionsUpdate from '../../mutations/admin/TourTermsAndConditionsUpdate'

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

  const [terms_and_conditions, setHighlights] = useState([
    ...(tour.terms_and_conditions || []),
    ...['', '', '']
  ])

  const handleChange = i => event => {
    const _terms_and_conditions = [...terms_and_conditions]
    _terms_and_conditions[i] = event.target.value
    setHighlights(_terms_and_conditions)
  }

  const remove = i => e => setHighlights(terms_and_conditions.filter((item, index) => index !== i))

  const add = () => setHighlights([...terms_and_conditions, ''])

  const save = () => {
    const variables = {
      _id: tour.tourID,
      terms_and_conditions: terms_and_conditions.filter(item => item.trim() !== '')
    }

    TermsAndConditionsUpdate(environment, variables)
    closeEdit()
  }

  return (
    <div className={c.container}>
      {terms_and_conditions.map((item, i) => {
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
    fragment TermsAndConditionsEdit_tour on Tour {
      tourID,
      terms_and_conditions
    }
  `
})