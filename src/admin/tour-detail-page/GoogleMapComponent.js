import React from 'react'
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
    isMarkerShown,
    onMarkerDragEnd,
    onDblClick
  } = props

  return (
    <GoogleMap
      options={{
        disableDoubleClickZoom: true
      }}
      onDblClick={onDblClick}
      defaultZoom={17}
      defaultCenter={center}
      center={center}
    >
      <SearchBox
      //  ref={props.onSearchBoxMounted}
      //  bounds={props.bounds}
        controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      //  onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search..."
          className={c.input}
        />
      </SearchBox>
      {isMarkerShown && 
        <Marker 
          draggable={markerDraggable}
          position={center} 
          onDragEnd={onMarkerDragEnd}
        />
      }
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(Component))