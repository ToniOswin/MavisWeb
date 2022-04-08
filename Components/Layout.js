import logo from "../Images/logo_cut.png";
import { useEffect, useState } from "react";
import Link from "next/link";

let Bootstrap;
if (typeof window !== "undefined") {
    Bootstrap = import('bootstrap');
}

export default function Layout(props) {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const myCollapse = document.getElementById('navbarNavAltMarkup')
        Bootstrap.then(bootstrap => {
            const bsCollapse = new bootstrap.Collapse(myCollapse, { toggle: false })
            toggle ? bsCollapse.show() : bsCollapse.hide()
        })
    }, [toggle])

    return <div>
        <div className="container-fluid d-flex justify-content-center fixed-top bg-white shadow ">
            <nav className="navbar navbar-expand-md navbar-light bg-white justify-content-between ">
                <Link href="/">
                    <a className="navbar-brand">
                        <img className="mw-100" height={50} src={logo.src} alt="Logo" />
                    </a>
                </Link>
                <button onClick={() => setToggle(toggle => !toggle)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-4">
                        <Link href="/">
                            <a className="nav-item nav-link mx-2 mx-lg-5">
                                Inicio
                            </a>
                        </Link>
                        <Link href="/peluqueria">
                            <a className="nav-item nav-link mx-2 mx-lg-5">
                                Peluqueria
                            </a>
                        </Link>
                        <Link href="/estetica">
                            <a className="nav-item nav-link mx-2 mx-lg-5">
                                Estetica
                            </a>
                        </Link>
                        <Link href="/contacto">
                            <a className="nav-item nav-link mx-2 mx-lg-5">
                                Contacto
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        <div className="container-fluid d-flex justify-content-center mt-5 min-vh-100">
            {props.children}
        </div>
        <div className="container-fluid d-flex justify-content-center bg-white shadow mt-5">

        </div>
    </div>
}
