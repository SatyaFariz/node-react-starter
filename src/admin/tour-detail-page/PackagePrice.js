import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import PackagePriceEdit from './PackagePriceEdit'

const useStyles = makeStyles(theme => ({
  container: {

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
      onMouseOver={showEditButton}
      onMouseLeave={hideEditButton}
    >
      <SectionHeader 
        title="Package Price" 
        onEditButtonClick={openEdit}
        showEditButton={editButtonVisible}
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