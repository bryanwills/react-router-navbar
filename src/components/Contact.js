// import {HiOutlineComputerDesktop, HiPhoneArrowUpRight } from 'react-icons/hi2';
// import React, { Component } from 'react';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Footer from './Footer';
//         lat: 38.09491689247499,
//         lng: -85.56812758161705
// apiKey: ('AIzaSyDjsu1xi1USK7r4sTqcwYedWPIgiC--tf0')

const containerStyle = {
    width: '600px',
    height: '400px'
};

const center = {
    lat: 38.09491689247499,
    lng: -85.56812758161705
};

function MyComponent() {
    return (
        <div>
      <LoadScript
        googleMapsApiKey="AIzaSyDjsu1xi1USK7r4sTqcwYedWPIgiC--tf0"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
        <div>
            <Footer />
        </div>
      </div>
    )
  }

  export default React.memo(MyComponent)