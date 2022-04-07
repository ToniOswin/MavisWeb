import Layout from '../Components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mavi&apos;s by Dunamis</title>
        <meta name="description" content="Somos una peluquer&iacute;a y est&eacute;tica situada en Palma de Mallorca. Contamos con una Maestra peluquera con a&ntilde;os de experiencia y una Masajista titulada especialista en masajes y tratamientos terap&eacute;uticos, mejora tu belleza y cuida tu salud en nuestro centro." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
