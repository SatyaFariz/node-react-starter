import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import BasicInfoEdit from './BasicInfoEdit'

const useStyles = makeStyles(theme => ({
  container: {

  },

  a: {
    backgroundColor: theme.palette.grey[100],
    padding: 20
  }
}))

const Component = props => {
  const c = useStyles()

  const { tour } = props

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

  return (
    <div 
      className={c.container} 
      onMouseLeave={hideEditButton}
      onMouseOver={showEditButton}
    >
      <SectionHeader
        onEditButtonClick={openEdit}
        title="Basic Info" 
        showEditButton={editButtonVisible}
      />

      {isEditing ?
      <BasicInfoEdit closeEdit={closeEdit} tour={tour}/>
      :
      <div className={c.a}>
        <Typography>
          Province: {tour.province}
        </Typography>
        <Typography>
          City: {tour.city}
        </Typography>
        <Typography>
          Display Location: {tour.display_location}
        </Typography>
        <Typography>
          Name: {tour.name}
        </Typography>
        <Typography>
          Category: {tour.category}
        </Typography>
        <Typography>
          Duration: {tour.duration_in_days} Days
        </Typography>
        <Typography>
          Price/Person: {tour.price_per_person}
        </Typography>
        <Typography>
          Good For: {tour.good_for}
        </Typography>
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment BasicInfo_tour on Tour {
      id,
      province,
      city,
      display_location,
      name,
      category,
      duration_in_days,
      price_per_person,
      good_for,
      ...BasicInfoEdit_tour
    }
  `
})