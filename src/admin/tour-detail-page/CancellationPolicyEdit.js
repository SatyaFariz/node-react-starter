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
import CancellationPolicyUpdate from '../../mutations/admin/TourCancellationPolicyUpdate'

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

  const [cancellation_policy, setCancellationPolicy] = useState([
    ...(tour.cancellation_policy || []),
    ...['', '', '']
  ])

  const handleChange = i => event => {
    const _cancellation_policy = [...cancellation_policy]
    _cancellation_policy[i] = event.target.value
    setCancellationPolicy(_cancellation_policy)
  }

  const remove = i => e => setCancellationPolicy(cancellation_policy.filter((item, index) => index !== i))

  const add = () => setCancellationPolicy([...cancellation_policy, ''])

  const save = () => {
    const variables = {
      _id: tour.tourID,
      cancellation_policy: cancellation_policy.filter(item => item.trim() !== '')
    }

    CancellationPolicyUpdate(environment, variables)
    closeEdit()
  }

  return (
    <div className={c.container}>
      {cancellation_policy.map((item, i) => {
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
    fragment CancellationPolicyEdit_tour on Tour {
      tourID,
      cancellation_policy
    }
  `
})