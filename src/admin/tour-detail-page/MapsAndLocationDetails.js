import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'
import GoogleMapComponent from './GoogleMapComponent'
import FormActionButtons from './FormActionButtons'
import LocationUpdate from '../../mutations/admin/TourLocationUpdate'

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
  },

  littleTextContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10
  },

  locationDetails: {
    marginTop: 20
  }
}))

const Component = props => {
  const c = useStyles()

  const mapRef = useRef(null)

  const { id, location_details, location } = props.tour

  const defaultCenter = location || { lat: 40.730610, lng: -73.935242 }

  const [isEditing, setEditing] = useState(false)
  const [editButtonVisible, setEditButtonVisible] = useState(false)
  const [center, setCenter] = useState(defaultCenter)
  const [locationDetails, setLocationDetails] = useState(location_details || '')

  const closeEdit = () => {
    mapRef.current.panTo(location || defaultCenter)
    setCenter(location || defaultCenter)
    setEditing(false)
  }

  const openEdit = () => {
    setLocationDetails(location_details || '')
    setEditButtonVisible(false)
    setEditing(true)
  }

  const showEditButton = () => !isEditing && !editButtonVisible && setEditButtonVisible(true)

  const hideEditButton = () => !isEditing && editButtonVisible && setEditButtonVisible(false)

  const handleChange = ({ target: { value }}) => setLocationDetails(value)

  const save = () => {
    const variables = {
      _id: id,
      location_details: locationDetails,
      location: center
    }

    LocationUpdate(props.relay.environment, variables, (payload, err) => {
      if(err) {
        setCenter(location || defaultCenter)
      }
    })

    closeEdit()
  }

  const _setCenter = (center) => {
    if(isEditing)
      setCenter(center)
  }

  const bottomLeftText = isEditing ? 'Drag the marker to set location' : (
    location ? `lat: ${location.lat}, lng: ${location.lng}` : ''
  )

  const location_details_empty = !location_details || location_details.trim() === ''

  const bottomRightText = (
    !location && location_details_empty
  ) ? 'Maps and Location Details not set.' : (
    location_details_empty ? 'Location Details not set.' : ''
  )

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
          innerRef={mapRef}
          setCenter={_setCenter}
          markerDraggable={isEditing}
          center={center}
          draggable={isEditing}
          showMarker={location ? true : isEditing}
          showSearchBox={isEditing}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMs9PzMrbSGJrhIIqJBZ7YZxkSDzgJuBM&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div className={c.loadingElement}/>}
          containerElement={<div className={c.mapContainer} />}
          mapElement={<div className={c.mapElement} />}
        />

        <div className={c.littleTextContainer}>
          <span>
            {bottomLeftText}
          </span>
          <span>
            {bottomRightText}
          </span>
        </div>

        {isEditing ?
        <div>
          <TextField
            label="Location Details"
            value={locationDetails}
            onChange={handleChange}
            margin="normal"
            multiline
            fullWidth
          />

          <FormActionButtons
            onSaveButtonClick={save}
            onCancelButtonClick={closeEdit}
          />
        </div>
        :
        <React.Fragment>
          {location_details &&
            <div className={c.locationDetails}>
              <Typography variant="h6" gutterBottom>Location Details</Typography>
              <Typography>{location_details}</Typography>
            </div>
          }
        </React.Fragment>
        }

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