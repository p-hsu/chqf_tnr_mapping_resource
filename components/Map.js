import React, { useRef, useEffect } from 'react';
import mapboxgl from "mapbox-gl";
import Nav from './Nav';

const Map = () => {

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY

    const mapContainer = useRef()

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            // stree view only
            style: "mapbox://styles/mapbox/streets-v11",
            // street/satellite combo view
            // style: "mapbox://styles/mapbox/satellite-streets-v11",
            center: [-90.2191521696627, 38.62024012842884],
            zoom: 11,
        })

        return () => map.remove()
    }, [])

    // const geoLocateStyle = {
    //     top: 36,
    //     left: 0,
    //     padding: '10px'
    // };

    // const navStyle = {
    //     top: 75,
    //     left: 0,
    //     padding: '10px'
    //   };

    return (
        <div className="h-auto border-2 bo{rder-dotted border-gray-700 flex-1">
            <div
                ref={mapContainer}
                style={{width: "100%", height: "100vh"}}
            />
        </div>
    );
}

export default Map