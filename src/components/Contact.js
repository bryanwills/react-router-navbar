import {HiOutlineComputerDesktop, HiPhoneArrowUpRight } from 'react-icons/hi2';
import React, { Component } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


// export default function Contact(){
//     const map = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDjsu1xi1USK7r4sTqcwYedWPIgiC--tf0&callback=initMap&libraries=&v=weekly"
//     return (
//         <div className="mx-auto">
//       <div class="address">
//         Sparta Mortgage LLC <br />
//         11037 Radleigh Lane <br />
//         Louisville, KY 40291 <br />
//         NMLS 1857586 and 51796 <br />
//         nathan@spartamortgage.com <br />
//         502.819.1739
//       </div>
//         </div>
//     );
// }

class App extends Component {
    render() {
        const style = {
            width: '600px',
            height: '450px'
        }

        return(
            <div className="App auto-mx align-center ">

            <Map
            google={this.props.google}
            initialCenter={{
            lat: 38.09491689247499,
            lng: -85.56812758161705
            }}
            style={style}
            />
            <Marker/>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDjsu1xi1USK7r4sTqcwYedWPIgiC--tf0')
})(App);
