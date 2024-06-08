import React, { useEffect, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import { AppSettings } from '../../config/app-settings.jsx';

function Map() {
  const context = useContext(AppSettings);

  useEffect(() => {
    context.handleSetAppContentFullHeight(true);
    context.handleSetAppContentClass('p-0 position-relative');

    return () => {
      context.handleSetAppContentFullHeight(false);
      context.handleSetAppContentClass('');
    };
    
		// eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="position-absolute w-100 h-100 top-0 start-0 bottom-0 end-0">
        <GoogleMapReact defaultCenter={{ lat: 25.304304, lng: -90.06591800000001 }} className="h-100 w-100" defaultZoom={5}></GoogleMapReact>
      </div>

      <div className="app-content-padding position-relative">
        <ol className="breadcrumb float-xl-end">
          <li className="breadcrumb-item"><Link to="/map" className="text-white">Home</Link></li>
          <li className="breadcrumb-item active text-white">Map</li>
        </ol>
        <h1 className="page-header text-white">Google Map <small className="text-white-transparent-5">header small text goes here...</small></h1>
      </div>
    </div>
  );
}

export default Map;