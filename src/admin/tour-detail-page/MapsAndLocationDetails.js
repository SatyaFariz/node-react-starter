import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
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

  const [isEditing, setEditing] = useState(false)
  const [editButtonVisible, setEditButtonVisible] = useState(false)
/*
  const closeEdit = () => {
    setEditing(false)
  }*/

  const openEdit = () => {
    setEditButtonVisible(false)
    setEditing(true)
  }

  const showEditButton = () => !isEditing && !editButtonVisible && setEditButtonVisible(true)

  const hideEditButton = () => !isEditing && editButtonVisible && setEditButtonVisible(false)

  const center = {
    lng: -73.935242,
    lat: 40.730610
  }

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
          onDblClick={() => console.log('')}
       //   markerDraggable={!isLoading}
          center={center}
          onMarkerDragEnd={() => console.log('')}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMs9PzMrbSGJrhIIqJBZ7YZxkSDzgJuBM&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div className={c.loadingElement}/>}
          containerElement={<div className={c.mapContainer} />}
          mapElement={<div className={c.mapElement} />}
        />
      </div>
    </div>
  )
}

export default Component