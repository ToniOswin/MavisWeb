import banner from '../Images/BannerDunamis.jpeg'
import sala from '../Images/Sala.jpeg'
import Article from '../Components/Article'


export default function App() {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="row align-items-center my-5 gy-2 text-center">
          <div className="col-12 col-md-6">
            <Article title="Gabinete Dunamis">
              <p>Dunamis es un gabinete terapéutico y estético situado en el centro de Palma.</p>
              <p>Nuestra masajista titulada es especialista en tratamientos terapéuticos y cuidará de tu salud de forma personalizada.</p>
              <p>Además de un amplio abanico de tratamientos innovadores para cuidar tu imagen</p>
              <p className="fw-bold">Mejora tu belleza y cuida tu salud en nuestro centro</p>
              <p>No pierdas la oportunidad de probar el Quiromasaje, terapias de suelo pélvico, reflexología podal, limpiezas faciales,
Combustión, depilación láser diodo, maderoterapia, criolipolisis y más!</p>
            </Article>
            <img className="mw-100 shadow my-3" src={sala.src} alt="Peluqueria Mavi's by Dunamis" />
            <div className="mt-3 bg-light row">
              <div className="col">
                <h5 className="text-center py-3">Encuentranos!</h5>
                <div className="text-center">
                    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=mavis%20by%20dunamis,%20palma&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe>
                </div>
              </div>
              <div className="col mt-5">
                <h5 className="title text-center">Gabinete Dunamis</h5>
                <p>Estamos para ayudarte, contacta con nosotros y te responderemos con la mayor brevedad</p>
                <h5>Local</h5>
                <p>
                  Calle Ausiàs March 38
                    <br />
                    Palma de Mallorca
                </p>
                <h5>Telefono</h5>
                <a href="tel:+34643861594">643 86 15 94</a>
                <h5>Email</h5>
                <p>gabinetedunamis@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-first">
            <img className="mw-100 shadow" src={banner.src} alt="Peluqueria Mavi's by Dunamis" />
          </div>
        </div>
      </div>   
    </div>
  )
}

