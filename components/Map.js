import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import grnMarker from '../assets/markers/grn.png';

const Map = ({ colony }) => {

    // mapbox token
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY

    const mapContainer = useRef(null)
    const [map, setMap] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // set new instance of map inside container
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-90.2191521696627, 38.62024012842884],
            zoom: 11,
        });

        // checking if data is coming through
        console.log("coordinates >>>  " + colony.coordinates)

        // add images and sources to symbol layer
        map.on('load', () => {

            // load and add marker image from assets
            // map.loadImage(
            //     'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png'
            //     , (err, img) => {
            //     if (err) throw err;
            //     map.addImage('marker', img);
            // });

            // add colony coordinates as geoJSON data
            map.addSource('colony-coordinates', {
                type: 'geojson',
                data: {
                    'type':'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [colony.coordinates[0], colony.coordinates[1]]
                    },
                    'properties': {
                        'title':[colony.name],
                        'status':[colony.status]
                    }
                }
            });

            // ** SHOULD BE SETTING DATA THEN RE-RENDERING MAP...? **
            //     const geojsonSource = map.getSource('colony-coordinates');
            //     // update data after geoJSON source created
            //     geojsonSource.setData({
            //         'type':'Feature',
            //         'geometry': {
            //             'type': 'Point',
            //             'coordinates': [colony.coordinates[0], colony.coordinates[1]]
            //         },
            //         'properties': {
            //             'title':[colony.name]
            //         }
            //     })

                    // add layer to display coordinates as markers
            // map.addLayer({
            //     id: 'colony-markers',
            //     type: 'symbol',
            //     source: 'colony-coordinates',
            //     layout: {
            //         'icon-image': 'marker'
            //     }
            // });

            // add layer to display coordinates as circles instead of markers....?
            map.addLayer({
                'id': 'locations',
                'type': 'circle',
                'source': 'colony-coordinates',
                'paint': {
                    // make circles larger as user zooms from z12 to z22
                    'circle-radius': {
                        'base': 2,
                        'stops':[
                            [12, 2],
                            [22, 180]
                        ]
                    },
                    // color circles by status property using 'match' and 'get' expressions
                    'circle-color': 'rgb(146, 54, 238)',
                    // [
                    //     'match',['get', 'status'],
                    //     'Complete','rgb(146, 54, 238)',
                    //     'Ongoing','rgb(87, 230, 44)',
                    //     'Pending','rgb(238, 176, 54)',
                    //     'rgb(0, 0, 0)'
                    // ]
                    'circle-stroke-width': 0.5,
                    'circle-stroke-color': 'rgb(0, 0, 0)'
                }
            });

            setMap(map);
            setLoading(false);
            console.log("Data loaded!")

        });

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
            <div
                ref={mapContainer}
                style={{width: '100%', height: '100vh'}}
            />
        </div>
    );
}

export default Map