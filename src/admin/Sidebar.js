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
  toolbar: theme.mixins.toolbar,
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
      <div className={c.toolbar}/>
    </Drawer>
  )
}

export default Component