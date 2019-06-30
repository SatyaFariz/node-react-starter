import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      TEST
    </div>
  )
}

export default Component