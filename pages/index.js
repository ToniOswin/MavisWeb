import mirrors from '../Images/mirrors.jpg'
import pearl from '../Images/pearl.jpg'
import hair08 from '../Images/hair08.jpg'
import hair02 from '../Images/hair02.jpg'
import hair03 from '../Images/hair03.jpg'
import hair04 from '../Images/hair04.jpg'
import hair05 from '../Images/hair05.jpg'
import hair06 from '../Images/hair06.jpg'
import Article from '../Components/Article'


export default function App() {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="row align-items-center my-5 gy-2 text-center flex-column-reverse flex-md-row">
          <div className="col">
            <img className="mw-100 shadow" src={mirrors.src} alt="Peluqueria Mavi's by Dunamis" />
          </div>
          <div className="col">
            <Article title="Mavi's by Dunamis">
              <p>Somos una peluquería y estética situada en Palma de Mallorca</p>
              <p>Contamos con una Maestra peluquera con años de experiencia y
                una Masajista titulada especialista en masajes y tratamientos terapéuticos</p>
              <p>Mejora tu belleza y cuida tu salud en nuestro centro</p>
            </Article>
          </div>
        </div>
      </div>

      <Article title="Conoce nuestro trabajo">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="imagebox">
              <img
                src={hair08.src}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="corte y peinado"
              />
              <span className="overlay-text"> corte y peinado</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="imagebox">
              <img
                src={hair02.src}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Color y peinado"
              />
              <span className="overlay-text">Color y peinado</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="imagebox">
              <img
                src={hair03.src}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Alisado Keratina"
              />
              <span className="overlay-text">Alisado Keratina</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">

            <div className="imagebox">
              <img
                src={hair04.src}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Color, mechas y corte"
              />
              <span className="overlay-text">Color, mechas y corte</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="imagebox">
              <img
                src={hair05.src}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Corte y peinado"
              />
              <span className="overlay-text">Corte y peinado</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="imagebox">
              <img
                src={hair06.src}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Color y mechas"
              />
              <span className="overlay-text">Color y mechas</span>
            </div>
          </div>
        </div>
      </Article>
    </div>
  )
}

