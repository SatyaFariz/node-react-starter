import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import SearchBox from "react-google-maps/lib/components/places/SearchBox"

const useStyles = makeStyles(theme => ({
  input: {
    boxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `500px`,
    height: `40px`,
    marginTop: `10px`,
    padding: `0 12px`,
    borderRadius: `2px`,
    boxShadow: `rgba(0, 0, 0, 0.3) 0px 1px 4px -1px`,
    fontSize: `14px`,
    outline: `none`,
    fontFamily: theme.typography.fontFamily
  }
}))

const Component = props => {
  const c = useStyles()

  const {
    center,
    markerDraggable,
    showMarker,
    showSearchBox,
    draggable
  } = props

  const searchBoxRef = useRef(null)

  const handlePlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces()
    if(places.length > 0) {
      const { location } = places[0].geometry
      props.setCenter({ lat: location.lat(), lng: location.lng() })
    }
  }

  const setCenter = (obj) => {
    const { lat, lng } = obj.latLng

    const location = {
      lat: lat(),
      lng: lng()
    }

    props.setCenter(location)
  }

  return (
    <GoogleMap
      options={{
        disableDoubleClickZoom: true,
        draggable: draggable,
        draggableCursor: draggable ? undefined : 'default' 
      }}
      onDblClick={setCenter}
      defaultZoom={17}
      defaultCenter={center}
      center={center}
    >
      {showSearchBox &&
      <SearchBox
        ref={searchBoxRef}
        controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={handlePlacesChanged}
      >
        <input
          type="text"
          placeholder="Search..."
          className={c.input}
        />
      </SearchBox>
      }
      
      {showMarker && 
        <Marker 
          draggable={markerDraggable}
          position={center} 
          onDragEnd={setCenter}
        />
      }
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(Component))