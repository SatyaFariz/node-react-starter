import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'

import Link from '../common/Link'

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
      <List>
        <ListItem component={Link} button href="/admin">
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem component={Link} button href="/admin/tours">
          <ListItemText primary={'Tours'} />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Component