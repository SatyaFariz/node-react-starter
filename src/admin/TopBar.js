import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import withSignOut from '../hocs/withSignOut'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const signOut = () => {
    props.signOut((payload, err) => {
      console.log(payload, err)
    })
  }

  return (
    <AppBar>
      <Toolbar>
        <div className={c.container}>
          <button onClick={() => props.signOut(signOut)}>LOG OUT</button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withSignOut(Component, { user_type: 'admin' })