import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Layout'
import Peluqueria from './Components/Peluqueria'
import Estetica from './Components/Estetica'
import Contacto from './Components/Contacto'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/peluqueria' element={<Peluqueria />} />
          <Route path='/estetica' element={<Estetica />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </Header>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
