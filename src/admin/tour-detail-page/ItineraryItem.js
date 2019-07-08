import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ItineraryItemEdit from './ItineraryItemEdit'

const useStyles = makeStyles(theme => ({
  container: {

  },

  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  deleteButton: {
    marginLeft: theme.spacing(1)
  }
}))

const Component = props => {
  const c = useStyles()

  const [isEditing, setEditing] = useState(false)

  const closeEdit = () => setEditing(false)

  const { itinerary } = props

  if(isEditing) {
    return (
      <ItineraryItemEdit closeEdit={closeEdit} itinerary={itinerary}/>
    )
  }

  return (
    <div className={c.container}>

      <div className={c.header}>
        <Typography variant="h5" gutterBottom>{itinerary.time_description}</Typography>
        <div>
          <IconButton
            onClick={() => setEditing(true)}
          >
            <EditIcon fontSize="small"/>
          </IconButton>
          <IconButton
            onClick={() => console.log('')}
            className={c.deleteButton}
          >
            <DeleteIcon fontSize="small"/>
          </IconButton>
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
      time_description,
      activity_title,
      activity_description,
      ...ItineraryItemEdit_itinerary
    }
  `
})