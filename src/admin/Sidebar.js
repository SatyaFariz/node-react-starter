import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  container: {

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}))

const Component = props => {
  const c = useStyles()

  return (
    <Drawer
      className={c.drawer}
      variant="permanent"
      classes={{
        paper: c.drawerPaper,
      }}
      anchor="left"
    >
      <div/>
    </Drawer>
  )
}

export default Component