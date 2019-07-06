import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Component = props => {
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