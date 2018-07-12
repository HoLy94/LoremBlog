import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google}
                 style={{width: '100%', height: '100%', position: 'relative'}}
                 className='map'
                 zoom={15}
                 initialCenter={{
                     lat: 50.44965249,
                     lng: 30.4657839
                 }}>
                <Marker
                    title={'We are here!'}
                    position={{lat: 50.44965249, lng: 30.4657839}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAuqSn2VlP0MSYFbr2hCIN-Ogmx7qGYz50')
})(MapContainer)