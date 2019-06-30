import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      TOUR DETAIL
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment TourDetailPage_tour on Tour {
      id
    }
  `
})