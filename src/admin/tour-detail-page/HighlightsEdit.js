import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { graphql, createFragmentContainer } from 'react-relay'
import FormActionButtons from './FormActionButtons'
import HighlightsUpdate from '../../mutations/admin/TourHighlightsUpdate'

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

  const [highlights, setHighlights] = useState([
    ...(tour.highlights || []),
    ...['', '', '']
  ])

  const handleChange = i => event => {
    const _highlights = [...highlights]
    _highlights[i] = event.target.value
    setHighlights(_highlights)
  }

  const remove = i => e => setHighlights(highlights.filter((item, index) => index !== i))

  const add = () => setHighlights([...highlights, ''])

  const save = () => {
    const variables = {
      _id: tour.tourID,
      highlights: highlights.filter(item => item.trim() !== '')
    }

    HighlightsUpdate(environment, variables)
    closeEdit()
  }

  return (
    <div className={c.container}>

      {highlights.map((item, i) => {
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
    fragment HighlightsEdit_tour on Tour {
      tourID,
      highlights
    }
  `
})