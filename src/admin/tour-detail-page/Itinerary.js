import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import Typography from '@material-ui/core/Typography'

import ItineraryItem from './ItineraryItem'

const useStyles = makeStyles(theme => ({
  container: {

  },

  list: {
    display: 'grid',
    gridGap: '25px',
    margin: 0,
    listStyle: 'none'
  }
}))

const Component = props => {
  const c = useStyles()

  const itinerary = props.tour.itinerary || []

  return (
    <div className={c.container}>
      <Typography variant="h4" gutterBottom className={c.title}>
        Itinerary
      </Typography>
      <div>
        <ul className={c.list}>
          {itinerary.map((item, i) => {
            return (
              <li key={i}>
                <ItineraryItem itinerary={item}/>
              </li>
            )
          })}
         
        </ul>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment Itinerary_tour on Tour {
      id,
      itinerary {
        id,
        ...ItineraryItem_itinerary
      }
    }
  `
})