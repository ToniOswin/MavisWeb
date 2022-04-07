import Layout from '../Components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mavi's by Dunamis</title>
        <meta name="description" content="Somos una peluquería y estética situada en Palma de Mallorca. Contamos con una Maestra peluquera con años de experiencia y una Masajista titulada especialista en masajes y tratamientos terapéuticos, mejora tu belleza y cuida tu salud en nuestro centro." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
