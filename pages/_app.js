import 'tailwindcss/tailwind.css';
import '../styles/style.css';
import Layout from '../components/Layout';

// initializes components all wrapped in layout
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
     <Component {...pageProps} />
  </Layout>

  )
}

export default MyApp