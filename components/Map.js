import React from 'react';
import ReactMapGl, {
    Popup,
    NavigationControl,
    GeolocateControl,
    Source,
    Layer
} from 'react-map-gl';
import Pin from './Pin';

const Map = (props) => {

    const [viewport, setViewPort] = React.useState({
        width:"100vw",
        height:"100vh",
        latitude:38.62024012842884, 
        longitude:-90.2191521696627,
        zoom:11,

    });

    const [settings, setSettings] = React.useState({
        dragPan: true,
        dragRotate: false,
        scrollZoom: false,
        touchZoom: true,
        touchRotate: true,
        keyboard: false,
        doubleClickZoom: true
    })

    const MAP_KEY = process.env.NEXT_PUBLIC_MAPBOX_KEY

    const geoLocateStyle = {
        top: 36,
        left: 0,
        padding: '10px'
    };

    const navStyle = {
        top: 75,
        left: 0,
        padding: '10px'
      };

    return (
        <div className="h-auto border-2 border-dotted border-gray-700 flex-1">
            <ReactMapGl
                className="flex-auto"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={MAP_KEY}
                onViewportChange={(viewport) => setViewPort(viewport)}
                {...viewport}
                {...settings}
            >
                {props.colony.data.map((colony, index) => {
                    return <Pin colony={colony} key={index}/>
                    }
                )}
                <GeolocateControl style={geoLocateStyle} />
                <NavigationControl style={navStyle} />

            </ReactMapGl>
        </div>
    );
}

export default Map