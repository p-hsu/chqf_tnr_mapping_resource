import Head from 'next/head';
import dynamic from 'next/dynamic';
import clientPromise from '../lib/mongodb';
import Map from '../components/Map';
import Info from '../components/Info';

export default function Home({ clients }) {

  console.log({clients})

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
      <div className="box-border w-screen object-contain relative flex flex-grow grid grid-rows-2 gap-2">
        <Map />
        <Info />

      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const client = await clientPromise
  const db = client.db()

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  // const isConnected = await client.isConnected()

  // const { db } = await clientPromise

  // setting variable data as collection
  const data = await db.collection("client").find().toArray();

  // mapping over bson to json
  const clients = data.map(client => {
    return{
      firstName: client.firstName,
      lastName: client.lastName,
      email: client.email,
      address: client.address,
      status: client.clientType
    }
  })


  return {
    props: { clients },
  }
}
