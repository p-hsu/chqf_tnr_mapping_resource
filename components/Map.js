import React from 'react';
import ReactMapGl from 'react-map-gl';

const Map = () => {

    const [viewport, setViewPort] = React.useState({
        width:"100vw",
        height:"100vh",
        latitude:38.62024012842884, 
        longitude:-90.2191521696627,
        zoom:11
    });

    const MAP_KEY = process.env.NEXT_PUBLIC_MAPBOX_KEY

    return (
        <div className="h-auto border-2 border-dotted border-gray-700 flex-1">
            <ReactMapGl
                className="flex-auto"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={MAP_KEY}
                onViewportChange={(viewport) => setViewPort(viewport)}
                {...viewport}
            />
        </div>
    );
}

export default Map