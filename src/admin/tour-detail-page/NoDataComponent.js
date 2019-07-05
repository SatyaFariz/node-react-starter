import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[100]
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <Button
        variant="contained"
        color="primary"
        onClick={props.onAddButtonClick}
      >
        Add
      </Button>
    </div>
  )
}

export default Component