import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import PackagePriceEdit from './PackagePriceEdit'
import PackagePriceDelete from '../../mutations/admin/TourPackagePriceDelete'

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
    if(tour.package_price)
      showDeleteButton()
  }

  const handleMouseLeave = () => {
    hideEditButton()
    if(tour.package_price)
      hideDeleteButton()
  }

  const deletePackagePrice = () => {
    PackagePriceDelete(props.relay.environment, { _id: tour.id }, (payload, err) => {
      if(err)
      showDeleteButton()
    })
    
    hideDeleteButton()
  }

  return (
    <div 
      className={c.container}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <SectionHeader 
        title="Package Price" 
        onDeleteButtonClick={deletePackagePrice}
        onEditButtonClick={openEdit}
        showEditButton={editButtonVisible}
        showDeleteButton={deleteButtonVisible}
      />

      {isEditing ?
      <PackagePriceEdit closeEdit={closeEdit} tour={tour}/>
      :
      <div>
        <Typography>
          Price: {tour.package_price && tour.package_price.price}
        </Typography>
        <Typography>
          Number of People: {tour.package_price && tour.package_price.number_of_people}
        </Typography>
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment PackagePrice_tour on Tour {
      id,
      package_price {
        price,
        number_of_people
      },
      ...PackagePriceEdit_tour
    }
  `
})