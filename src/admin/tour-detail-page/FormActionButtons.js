import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  withMargin: {
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

      {props.showSaveAndCreateAgainButton && 
      <Button
        className={c.withMargin}
        onClick={props.onSaveAndCreateAgainButtonClick}
        variant="outlined"
      >
        {props.saveAndCreateAgainButtonText || 'Save and Create Again'}
      </Button>
      }

      <Button
        variant="outlined"
        onClick={props.onCancelButtonClick}
        className={c.withMargin}
      >
        Cancel
      </Button>
    </div>
  )
}

export default Component