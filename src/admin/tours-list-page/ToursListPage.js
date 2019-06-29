import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      TOURS LIST
    </div>
  )
}

export default Component

