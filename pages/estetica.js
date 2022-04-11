import Article from "../Components/Article";
import color from '../Images/color.jpg'
import camilla from '../Images/camilla.jpg'
import eye from '../Images/eye.jpg'
import cera from '../Images/cera.jpg'

export default function Estetica() {
    return <div className="container">
        <div className="mt-5">
            <div className="row align-items-center my-5 gy-2 flex-column flex-md-row text-center">
                <div className="col">
                    <Article title="Manicura y Pedicura">
                        <p>
                            Las manos son nuestras cartas de presentación, por ellos nuestras empleadas están certificadas para el cuidado de tus uñas.
                        </p>
                        <p>
                            Manicura francesa, colores nude o puros, encuentra tu estilo para lucir siempre radiante.
                        </p>
                    </Article>
                </div>
                <div className="col">
                    <img
                        src={color.src}
                        className="shadow rounded mb-4 mw-100"
                        alt="Manicura y Pedicura"
                    />
                </div>
            </div>
        </div>

        <div className="mt-5">
            <div className="row align-items-center my-5 gy-2 flex-column-reverse flex-md-row text-center">
                <div className="col">
                    <img
                        src={camilla.src}
                        className="shadow rounded mb-4 mw-100"
                        alt="Masajes y Radiofrecuencia"
                    />
                </div>
                <div className="col">
                    <Article title="Masajes y Radiofrecuencia">
                        <p>
                            El ritual corporal es el sello de nuestros tratamientos. 45 min de masaje combinado (relajante, descontracturante y
                            drenante) que te dejaran como nuevo, pruebalo ahora por una calidad de vida mejor.
                        </p>
                        <p>
                            La radiofrecuencia consiste en la aplicación de ondas electromagnéticas de alta frecuencia sobre la piel que provoca
                            el calentamiento controlado de las diferentes capas de la dermis, ayudando a la formación de colágeno, el drenaje linfático y más!
                        </p>
                    </Article>
                </div>
            </div>
        </div>

        <div className="mt-5">
            <div className="row align-items-center my-5 gy-2 flex-column flex-md-row text-center">
                <div className="col">
                    <Article title="Depilación">
                        <p>
                            Acaba con ese pelo indeseado en la zona que necesites con nuestras profesionales.
                        </p>
                        <p>
                            ¡Expertas en el uso de la cera, también disponemos una vez al mes del servicio de depilación láser
                            para que no tengas que preocuparte más por esos pelos molestos, infórmate ahora!
                        </p>
                    </Article>
                </div>
                <div className="col">
                    <img
                        src={cera.src}
                        className="shadow rounded mb-4 mw-100"
                        alt="depilacion"
                    />
                </div>
            </div>
        </div>

        <div className="mt-5">
            <div className="row align-items-center my-5 gy-2 flex-column-reverse flex-md-row text-center">
                <div className="col">
                    <img
                        src={eye.src}
                        className="shadow rounded mb-4 mw-100"
                        alt="Lifting de pestañas"
                    />
                </div>
                <div className="col">
                    <Article title="Lifting de pestañas">
                        <p>
                            ¡Nuestra mirada dice mucho de nosotros, por eso deja en nuestras manos una mirada más fuerte y bella!
                        </p>
                        <p>
                            Con el lifting de pestañas le darás un nuevo nivel a tus pestañas, ese volumen que te lleva mucho trabajo cada día
                            ahora lo tendrás cada día al levantarte.¡no pierdas la oportunidad!
                        </p>
                    </Article>
                </div>
            </div>
        </div>

    </div>
}