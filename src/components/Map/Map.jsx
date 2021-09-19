import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/actions'

// React Google Maps API
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';

// CSS
import '../../index.css'
import InfoWindowComponent from './InfoWindow/InfoWindowComponent';

const Map = () => {
  const dispatch = useDispatch();
  const setSelectedId = (payload) => dispatch( actions.setSelectedId(payload) );
  const users = useSelector(store => store.users)
  const selectedUser = useSelector(store => store.selectedUser)

  const containerStyle = {
    width: '100%',
    height: '500px'
  };
    
  const center = {
    lat: -32.959240,
    lng: -60.683479
  };

  const { isLoaded } = useJsApiLoader({
      id: process.env.REACT_APP_PROJECT_ID || "",
      googleMapsApiKey: process.env.REACT_APP_API_KEY || ""
  })
  
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }
  const showInfoWindow = (user, otro) => {
    setSelectedId(user)
  }
  const closeInfoWindow = () => {
    setSelectedId({})
  }
 

  return (
      <>
        <div className="col-12 py-2 cards-header">
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
                center={selectedUser?.location ? selectedUser.location : center}
                zoom={13}
                options={options}
                onClick={() => closeInfoWindow()}
                onDrag={() => closeInfoWindow()}
                clickableIcons={false}
            > 
            { selectedUser.id &&
              <InfoWindow
                  position={{lat: selectedUser?.location?.lat, lng: selectedUser?.location?.lng}}
                  onCloseClick={() => closeInfoWindow()}
              >
                <InfoWindowComponent user={selectedUser} />
              </InfoWindow>
            }
              {users && users?.map((user, i) => {
                if(user?.location){
                  return (
                    <Marker
                      title={`${user.firstName} ${user.LastName}`}
                      label={{
                        text: user.email,
                        className: 'markerLabel'
                      }}
                      animation="BOUNCE"
                      key={i}
                      clickable={true}
                      onClick={() => showInfoWindow(user)}
                      position={{lat: user?.location?.lat, lng: user?.location?.lng}}
                    />)
                } else {
                  <></>
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