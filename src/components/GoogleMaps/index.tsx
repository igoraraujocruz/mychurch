import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback, memo } from 'react';

const containerStyle = {
  width: '400px',
  height: '350px'
};


const centers = [{
    lat: -20.269874688338337,
    lng: -40.31885753435289
  },
  {
    lat: -20.269874688338337,
    lng: -40.31885753435289
  },
  {
    lat: -20.269874688338337,
    lng: -40.31885753435289
  }];
  
function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: '103749841760093231094',
    googleMapsApiKey: "AIzaSyCcgdbj6GvJLF-runISprNzNEAeURyHATc"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centers[0]}
        zoom={15}
        onLoad={map}
        onUnmount={onUnmount}
      >
      <Marker
      icon={{
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: 'red',
        fillOpacity: 1,
        strokeColor: 'red',
        strokeWeight: 1,
        scale: 1.5
      }}
      position={centers[0]}
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default memo(GoogleMaps)