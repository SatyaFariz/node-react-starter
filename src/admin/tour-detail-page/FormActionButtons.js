import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cancelButton: {
    marginLeft: theme.spacing(1)
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <Button
        onClick={props.onSaveButtonClick}
        variant="outlined"
      >
        Save
      </Button>

      <Button
        variant="outlined"
        onClick={props.onCancelButtonClick}
        className={c.cancelButton}
      >
        Cancel
      </Button>
    </div>
  )
}

export default Component