import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const { itinerary } = props

  return (
    <div className={c.container}>
      <Typography variant="h5" gutterBottom>{itinerary.time_description}</Typography>
      <Typography variant="h6">{itinerary.activity_title}</Typography>
      <Typography>
        {itinerary.activity_description}
      </Typography>
    </div>
  )
}

export default createFragmentContainer(Component, {
  itinerary: graphql`
    fragment ItineraryItem_itinerary on Itinerary {
      id,
      time_description,
      activity_title,
      activity_description
    }
  `
})