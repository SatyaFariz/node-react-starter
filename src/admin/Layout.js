import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { makeStyles } from '@material-ui/core/styles'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import LoginForm from './LoginForm'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
}))

const Layout = props => {
  const c = useStyles()

  if(!props.loggedAdmin)
    return <LoginForm/>

  return (
    <div className={c.container}>
      <TopBar/>
      <Sidebar/>
      <div>
        <div className={c.toolbar}/>
        {props.children}
      </div>
    </div>
  )
}

export default createFragmentContainer(Layout, {
  loggedAdmin: graphql`
    fragment Layout_loggedAdmin on LoggedAdmin {
      id
    }
  `
})