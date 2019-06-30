import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { createFragmentContainer, graphql } from 'react-relay'

import CreateTourForm from './CreateTourForm'
import ToursList from './ToursList'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 20,
    display: 'flex'
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <ToursList loggedAdmin={props.loggedAdmin}/>
      <CreateTourForm/>
    </div>
  )
}

export default createFragmentContainer(Component, {
  loggedAdmin: graphql`
    fragment ToursListPage_loggedAdmin on LoggedAdmin {
      id,
      ...ToursList_loggedAdmin
    }
  `
})

