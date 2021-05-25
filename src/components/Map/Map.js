import React, { useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import '../../index.css'
import { useSelector } from 'react-redux';

const containerStyle = {
    width: '100%',
    height: '500px'
  };
  
  const center = {
    lat: -32.959240,
    lng: -60.683479
  };

const Map = () => {

    const [map, setMap] = React.useState(null)
    const users = useSelector(store => store.users)

    const { isLoaded } = useJsApiLoader({
        id: process.env.REACT_APP_PROJECT_ID || "",
        googleMapsApiKey: process.env.REACT_APP_API_KEY || ""
    })
    
    const options = {
      disableDefaultUI: true,
      zoomControl: true,
    }

    // const onLoad = React.useCallback(function callback(map) {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])
  
    // const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    // }, [])

    useEffect(() => {
      console.table(users)
    }, [])

    return (
        <>
          <div className="col-12 py-2 bg-primary">
            <div className="row align-items-center">
                <h3 className="ms-4 mb-0 text-light">Users Location</h3>
            </div>
          </div>
            {
                isLoaded ?
                <>
                  <div className="map-logo-container d-flex justify-content-end">
                    <img width="120" src="Logo-horizontal.png" alt="Logo Wispro" className="map-logo m-3"/>
                  </div>
                  <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={13}
                      options={options}
                      // onLoad={onLoad}
                      // onUnmount={onUnmount}
                  >
                    {users && users.map((user, i) => {
                      if(user.location){
                        return (
                          <Marker
                            key={i}
                            position={{lat: user.location.lat, lng: user.location.lng}}
                          />)
                      }
                      
                    })}
                      
                  </GoogleMap>
                </>
                : null
            }

        </>
    );
};

export default Map;