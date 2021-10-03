import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({ colony }) => {

    // const [dataLoaded, setDataLoaded] = useState(false);

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY

    const mapContainer = useRef(null)

    useEffect(() => {
        // set new instance of map inside container
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-90.2191521696627, 38.62024012842884],
            zoom: 11,
        })

        // checking if data is coming through
        console.log("coordinates >>>  " + colony.coordinates)

        // add sources and layers after map full loads
        map.on('load', () => {

            // add colony coordinates as geoJSON data
            map.addSource('colony-coordinates', {
                type: 'geojson',
                data: {
                    'type':'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [colony.coordinates[0], colony.coordinates[1]]
                    },
                }
            })
        });

        // add layer to display coordinates as markers
        map.addLayer({
            id: 'colony-markers',
            type: 'circle',
            source: 'colony-coordinates',
            paint: {
                'circle-color': '#250a5e',
                'circle-radius': 6,
                'circle-stroke-color':'#e8e4f0',
                'circle-stroke-width': 1
            }
        });

        //set data loaded to true after sources and layers
        // setDataLoaded(true)

        // clean map on unmount
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
        <div className='h-auto border-2 bo{rder-dotted border-gray-700 flex-1'>
            {/* <div style={dataLoaded ? undefined : {display: 'none'}} /> */}
            <div
                ref={mapContainer}
                style={{width: '100%', height: '100vh'}}
            />
        </div>
    );
}

export default Map