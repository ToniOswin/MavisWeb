import { useState } from 'react'
import 'bootstrap'


export default function App(props) {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="row align-items-center my-5 gy-2 text-center flex-column-reverse flex-md-row">
          <div className="col">
            <img className="mw-100" src="https://via.placeholder.com/500x400" />
          </div>
          <div className="col">
            <h2>Mavi's by dunamis</h2>
            <p>Descripcion de la peluqueria</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        <h1>Galeria de fotos</h1>
      </div>

      <div className="row justify-content-center align-items-center g-5">
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>
        <div className="col-auto imagebox">
          <img src="https://via.placeholder.com/300" />
          <span className="overlay-text">Descripcion foto</span>
        </div>

      </div>
    </div>
  )
}

