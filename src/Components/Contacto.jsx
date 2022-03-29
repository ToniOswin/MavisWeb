
export default function Contacto(props) {
    return (
        <div className="mt-5 bg-light row">
            <div className="col">
                <h5 className="text-center py-3">Encuentranos!</h5>
                <div className="text-center">
                    <iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=mavis%20by%20dunamis,%20palma&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe>
                </div>
            </div>

            <div className="col mt-5">
                <h5 className="title text-center">Mavi's by dunamis</h5>
                <p>Estamos para ayudarte, contacta con nosotros y te responderemos con la mayor brevedad</p>
                <h5>Tienda</h5>
                <p>
                    Marques de la senia 11B
                    <br />
                    Palma de Mallorca
                </p>
                <h5>Telefono</h5>
                <a href="tel:+34643861594">643 86 15 94</a>
                <h5>Email</h5>
                <p>gabinetedunamis@gmail.com</p>
            </div>
        </div>
    );
}
