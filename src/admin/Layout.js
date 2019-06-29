import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

const Layout = props => {
  return (
    <div>
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