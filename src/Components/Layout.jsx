import { NavLink } from "react-router-dom";
import logo from "../Images/logo_cut.png";

export default function Layout(props) {
    return <div>
        <div className="container-fluid d-flex justify-content-center fixed-top bg-white shadow">
            <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                <a className="navbar-brand" href="#">
                    <img className="mw-100" height={50} src={logo} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-4">
                        <NavLink className="nav-item nav-link mx-5" to="/">Inicio</NavLink>
                        <NavLink className="nav-item nav-link mx-5" to="/peluqueria">Peluqueria</NavLink>
                        <NavLink className="nav-item nav-link mx-5" to="/estetica">Estetica</NavLink>
                        <NavLink className="nav-item nav-link mx-5" to="/contacto">Contacto</NavLink>
                    </div>
                </div>
            </nav>
        </div>
        <div className="container-fluid d-flex justify-content-center mt-5 min-vh-100">
            {props.children}
        </div>
        <div className="container-fluid d-flex justify-content-center bg-white shadow mt-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita fugit itaque optio fuga dignissimos magnam libero voluptatibus laboriosam provident veritatis, incidunt vitae repellendus, molestias eligendi. Nulla repellendus numquam temporibus.
            </p>
        </div>
    </div>
}