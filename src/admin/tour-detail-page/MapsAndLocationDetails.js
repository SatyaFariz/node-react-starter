import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import GoogleMapComponent from './GoogleMapComponent'

const useStyles = makeStyles(theme => ({
  container: {

  },

  mapElement: {
    height: '100%'
  },

  mapContainer: {
    height: 500,
    width: '100%'
  },

  loadingElement: {
    backgroundColor: theme.palette.grey[100]
  }
}))

const Component = props => {
  const c = useStyles()

  const defaultCenter = { lat: 40.730610, lng: -73.935242 }

  const [isEditing, setEditing] = useState(false)
  const [editButtonVisible, setEditButtonVisible] = useState(false)
  const [center, setCenter] = useState(defaultCenter)
/*
  const closeEdit = () => {
    setEditing(false)
  }*/

  const openEdit = () => {
    setCenter(defaultCenter)
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
        title="Maps and Location Details"
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
      />

      <div>
        <GoogleMapComponent
          setCenter={setCenter}
          markerDraggable={isEditing}
          center={center}
          showMarker={isEditing}
          showSearchBox={isEditing}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMs9PzMrbSGJrhIIqJBZ7YZxkSDzgJuBM&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div className={c.loadingElement}/>}
          containerElement={<div className={c.mapContainer} />}
          mapElement={<div className={c.mapElement} />}
        />
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment MapsAndLocationDetails_tour on Tour {
      id,
      location_details,
      location {
        lat,
        lng
      }
    }
  `
})