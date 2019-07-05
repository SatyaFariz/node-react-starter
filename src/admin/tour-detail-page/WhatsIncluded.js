import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import WhatsIncludedEdit from './WhatsIncludedEdit'

const useStyles = makeStyles(theme => ({
  container: {

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

  const { tour } = props

  return (
    <div 
      className={c.container}
      onMouseLeave={hideEditButton}
      onMouseOver={showEditButton}
    >
      <SectionHeader 
        title="What's Included"
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
      />

      {isEditing ?
      <WhatsIncludedEdit closeEdit={closeEdit} tour={tour}/>
      :
      <div>
        <Typography>
          Foods: {tour.foods_included}
        </Typography>
        <Typography>
          Drinks: {tour.drinks_included}
        </Typography>
        <Typography>
          Accomodations: {tour.accomodations_included}
        </Typography>
        <Typography>
          Tickets: {tour.tickets_included}
        </Typography>
        <Typography>
          Transportation: {tour.transportation_included}
        </Typography>
        <Typography>
          Equipment: {tour.equipment_included}
        </Typography>
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment WhatsIncluded_tour on Tour {
      id,
      foods_included,
      drinks_included,
      accomodations_included,
      tickets_included,
      transportation_included,
      equipment_included,
      ...WhatsIncludedEdit_tour
    }
  `
})