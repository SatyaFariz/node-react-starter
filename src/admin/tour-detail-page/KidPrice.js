import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import KidPriceEdit from './KidPriceEdit'

import KidPriceDelete from '../../mutations/admin/TourKidPriceDelete'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const { tour } = props

  const [isEditing, setEditing] = useState(false)
  const [editButtonVisible, setEditButtonVisible] = useState(false)
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false)

  const closeEdit = () => {
    setEditing(false)
  }

  const openEdit = () => {
    setEditButtonVisible(false)
    setDeleteButtonVisible(false)
    setEditing(true)
  }

  const showEditButton = () => !isEditing && !editButtonVisible && setEditButtonVisible(true)

  const hideEditButton = () => !isEditing && editButtonVisible && setEditButtonVisible(false)

  const showDeleteButton = () => !isEditing && !deleteButtonVisible && setDeleteButtonVisible(true)

  const hideDeleteButton = () => !isEditing && deleteButtonVisible && setDeleteButtonVisible(false)

  const handleMouseOver = () => {
    showEditButton()
    if(tour.kid_price)
      showDeleteButton()
  }

  const handleMouseLeave = () => {
    hideEditButton()
    if(tour.kid_price)
      hideDeleteButton()
  }

  const deleteKidPrice = () => {
    KidPriceDelete(props.relay.environment, { _id: tour.id }, (payload, err) => {
      if(err)
      showDeleteButton()
    })
    
    hideDeleteButton()
  }

  return (
    <div 
      className={c.container}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      <SectionHeader
        showEditButton={editButtonVisible}
        showDeleteButton={deleteButtonVisible}
        onEditButtonClick={openEdit}
        onDeleteButtonClick={deleteKidPrice}
        title="Kid Price"
      />

      {isEditing ? 
      <KidPriceEdit closeEdit={closeEdit} tour={tour}/>
      :
      <div>
        <Typography>
          Price/Person: {tour.kid_price && tour.kid_price.price_per_person}
        </Typography>
        <Typography>
          Age Description: { tour.kid_price && tour.kid_price.age_description}
        </Typography>
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment KidPrice_tour on Tour {
      id,
      kid_price {
        price_per_person,
        age_description
      },
      ...KidPriceEdit_tour
    }
  `
})