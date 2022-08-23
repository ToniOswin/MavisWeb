import Article from '../Components/Article'
import { supabase } from '../utils/supabaseClient'

export async function getServerSideProps(context) {
    const { data, error } = await supabase.from('productos')
    return {
        props: {
            products: data
        },
    }
}


export default function Productos({ products }) {
    console.log(products)
    return <div className="container mt-5">
        <Article title="Nuestros productos">
            <p>
                En mavi&apos;s by dunammis trabajamos siempre con las mejores marcas y por ello tenemos a la venta
                productos de las principales casas sinonimo a calidad.
            </p>
            <p>
                Todos nuestros productos son siempre enfocados al maximo cuidado de tu cabello y de la forma mas natural posible.
            </p>
        </Article>
        <div className="row my-5 text-center">
            {products.map(producto =>
                <div key={producto.id} className="col-lg-3 mx-auto d-flex align-items-stretch">
                    <div className="card text-center shadow ">
                        <img className="card-img-top p-3" src={producto.foto} alt="Card image cap" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text ">
                                {producto.descripcion}
                            </p>
                            <div className="mt-auto">
                                <span className="badge bg-primary">{producto.precio}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}