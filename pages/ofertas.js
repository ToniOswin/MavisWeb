import Article from '../Components/Article'
import { supabase } from '../utils/supabaseClient'

export async function getServerSideProps(context) {
    const { data, error } = await supabase.from('ofertas')
    return {
        props: {
            ofertas: data
        },
    }
}


export default function Estetica({ ofertas }) {
    return <div className="container mt-5">
        <Article title="Ofertas web exclusivas">
            <p>
                Visítanos con frecuencia para enterarte de nuestras ofertas web exclusivas nada más salgan.

            </p>
            <p>¡Cambian con regularidad y son limitadas, no te las pierdas!</p>
            <p>
                Al pulsar el botón comprar te llevará a la web del banco para poder hacer la compra,
                una vez adquirido, mándanos un mensaje para poder darte cita lo antes posible
            </p>
        </Article>
        <div className="row my-5 text-center">
            {ofertas.map(oferta =>
                <div key={oferta.id} className="col-lg-3 mx-auto d-flex align-items-stretch">
                    <div className="card text-center ">
                        <img className="card-img-top p-3" src={oferta.foto} alt="Card image cap" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{oferta.titulo}</h5>
                            <p className="card-text ">
                                {oferta.descripcion}
                            </p>
                            <div className="mt-auto">
                                <a href={oferta.link} className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}
