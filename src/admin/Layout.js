import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { makeStyles } from '@material-ui/core/styles'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import LoginForm from './LoginForm'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    backgroundColor: 'gray'
  }
}))

const Layout = props => {
  const c = useStyles()

  if(!props.loggedAdmin)
    return <LoginForm/>

  return (
    <div className={c.container}>
      <TopBar/>
      <Sidebar/>
      {props.children}
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