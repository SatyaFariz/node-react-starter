import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ItineraryItemEdit from './ItineraryItemEdit'
import ItineraryDelete from '../../mutations/admin/TourItineraryDelete'

const useStyles = makeStyles(theme => ({
  container: {

  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative'
  },

  deleteButton: {
    marginLeft: theme.spacing(1)
  },

  buttonsContainer: {
    position: 'absolute',
    right: 0
  }
}))

const Component = props => {
  const c = useStyles()

  const [isEditing, setEditing] = useState(false)
  const [editButtonVisible, setEditButtonVisible] = useState(false)
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false)

  const handleMouseOver = () => {
    setDeleteButtonVisible(true)
    setEditButtonVisible(true)
  }

  const handleMouseLeave = () => {
    setDeleteButtonVisible(false)
    setEditButtonVisible(false)
  }

  const closeEdit = () => setEditing(false)

  const openEdit = () => {
    setEditing(true)
    setDeleteButtonVisible(false)
    setEditButtonVisible(false)
  }

  const { itinerary, relay: { environment }} = props

  const _delete = () => {
    const variables = {
      _id: itinerary.id
    }

    const { tour_id } = itinerary

    ItineraryDelete(environment, variables, { tour_id })
  }

  if(isEditing) {
    return (
      <ItineraryItemEdit closeEdit={closeEdit} itinerary={itinerary}/>
    )
  }

  return (
    <div 
      className={c.container}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >

      <div className={c.header}>
        <Typography variant="h5" gutterBottom>{itinerary.time_description}</Typography>

        <div className={c.buttonsContainer}>          
          {editButtonVisible &&
          <IconButton
            onClick={openEdit}
          >
            <EditIcon fontSize="small"/>
          </IconButton>
          }

          {deleteButtonVisible &&
          <IconButton
            onClick={_delete}
            className={c.deleteButton}
          >
            <DeleteIcon fontSize="small"/>
          </IconButton>
          }          
        </div>
      </div>

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
      tour_id,
      time_description,
      activity_title,
      activity_description,
      ...ItineraryItemEdit_itinerary
    }
  `
})