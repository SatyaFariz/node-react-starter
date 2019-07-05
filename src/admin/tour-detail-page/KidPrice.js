import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import KidPriceEdit from './KidPriceEdit'

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
      onMouseLeave={hideEditButton}
      onMouseOver={showEditButton}
    >
      <SectionHeader
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
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