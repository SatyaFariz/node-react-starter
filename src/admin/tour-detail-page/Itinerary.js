import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import ItineraryCreateForm from './ItineraryCreateForm'
import SectionHeader from './SectionHeader'
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

  const [isEditing, setEditing] = useState(false)
  const [editButtonVisible, setEditButtonVisible] = useState(false)

  const closeEdit = () => {
    setEditing(false)
  }

  const openEdit = () => {
    setEditButtonVisible(false)
    setEditing(true)
  }

  const showEditButton = () => !isEditing && !editButtonVisible && setEditButtonVisible(true)

  const hideEditButton = () => !isEditing && editButtonVisible && setEditButtonVisible(false)

  const itinerary = props.tour.itinerary || []

  return (
    <div 
      className={c.container}
      onMouseOver={showEditButton}
      onMouseLeave={hideEditButton}
    >
      <SectionHeader 
        title="Itinerary"
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
      />
      <div>
        <ul className={c.list}>
          {itinerary.map((item, i) => {
            return (
              <li key={i}>
                <ItineraryItem itinerary={item}/>
              </li>
            )
          })}
         
          {isEditing &&
            <ItineraryCreateForm closeEdit={closeEdit}/>
          }
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