import Head from 'next/head';
import dynamic from 'next/dynamic';

import geocodeAddress from '../lib/geocode';
import Map from '../components/Map';
import Info from '../components/Info';

export default function Home({ colony }) {

  console.log({colony})

  const Map = dynamic(() => import("../components/Map"), {
    loading: () => "Loading...",
    ssr: false
  });

  return (
    <>
        <Head>
          <title>CHQF TNR MAP</title>
          <link rel="icon" href="/favicon.ico" />
          <link href='https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css' rel='stylesheet' />
        </Head>
      <div className="box-border w-screen object-contain relative">
        <Map colony={colony} />
        {/* <Info colony={colony} /> */}

      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  // call GET method to retrieve data
  let res = await fetch("http://localhost:3000/api/endpoints", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });;

  let colony = await res.json();

  return {
    props: { colony },
  }
}
