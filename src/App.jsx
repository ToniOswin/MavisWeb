import { useState } from 'react'
import 'bootstrap'


export default function App(props) {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="row align-items-center my-5 gy-2 text-center flex-column-reverse flex-md-row">
          <div className="col">
            <img className="mw-100 shadow" src="/src/Images/mirrors.jpg" />
          </div>
          <div className="col">
            <h2 className="pb-4 mb-4 border-bottom border-warning">Mavi's by dunamis</h2>
            <p>Somos una peluqueria y estetica situada en Palma de Mallorca</p>
            <p>Contamos con una Maestra peluquera con años de experiencia</p>
            <p>Y una Masajista titulada especialista en masajes y tratamientos terapeuticos</p>
            <p>Mejora tu belleza y cuida tu salud en nuextro centro</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row align-items-center my-5 gy-2 flex-column flex-md-row text-center">
          <div className="col">
            <h2 className="pb-4 mb-4 border-bottom border-warning" >Majorica</h2>
            <p>La perla del mediterráneo. Majorica nació en Mallorca en 1890.</p>
            <p>Plata de Ley y perlas cultivadas de la mejor calidad</p>
            <p>Descubre nuestra colección en colaboracion y compra el regalo ideal.</p>
          </div>
          <div className="col">
            <img className="mw-100 shadow" src="/src/Images/pearl.jpg" />
          </div>
        </div>
      </div>


      <div className="d-flex justify-content-center my-5">
        <h1>Galeria de fotos</h1>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div className="imagebox">
            <img
              src="/src/Images/hair01.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
            <span className="overlay-text">Peinado</span>
          </div>
          <div className="imagebox">
            <img
              src="/src/Images/hair02.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
            <span className="overlay-text">Color y peinado</span>
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="imagebox">
            <img
              src="/src/Images/hair03.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
            <span className="overlay-text">Alisado Keratina</span>
          </div>

          <div className="imagebox">
            <img
              src="/src/Images/hair04.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
            <span className="overlay-text">Color, mechas y corte</span>
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="imagebox">
            <img
              src="/src/Images/hair05.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
            <span className="overlay-text">Corte y peinado</span>
          </div>
          <div className="imagebox">
            <img
              src="/src/Images/hair06.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
            <span className="overlay-text">Color y mechas</span>
          </div>
        </div>
      </div>
    </div>
  )
}

