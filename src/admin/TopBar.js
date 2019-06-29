import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <AppBar>
      <Toolbar>
        <div className={c.container}/>
      </Toolbar>
    </AppBar>
  )
}

export default Component