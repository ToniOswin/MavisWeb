import hair01 from '../Images/hair01.jpg'
import hair10 from '../Images/hair10.jpg'
import hair09 from '../Images/hair09.jpg'
import hair03 from '../Images/hair03.jpg'
import Article from '../Components/Article'

export default function Peluqueria() {
    return <div className="container">
        <div className="mt-5">
            <div className="row align-items-center my-5 gy-2 text-center flex-column-reverse flex-md-row">
                <div className="col">
                    <img
                        src={hair01.src}
                        className="shadow rounded mb-4 mw-100"
                        alt="Cortes y peinados"
                    />
                </div>
                <div className="col">
                    <Article title="Cortes y peinados">
                        <p>En mavis by dunamis somos expertos en todo tipo de pelo, sean rizados, lisos, cortos o largos,
                            puedes contar con encontrar tu estilo con nosotros.
                        </p>
                        <p>Ya sea una ocasión especial o el peinado de todas las semanas, nuestra especialista
                            te aconsejara y te acompañara para obtener los mejores resultados y salgas siempre con el corte y peinado que
                            te mereces.
                        </p>
                    </Article>
                </div>
            </div>
        </div>

        <div className="mt-5">
            <div className="row align-items-center my-5 gy-2  flex-column flex-md-row text-center">
                <div className="col">
                    <Article title="Tintes">
                        <p>
                            Dale un nuevo color a tu vida con nuestras marcas profesionales de Tintes,
                            El color que quieras siempre a tu disposición, contamos con tintes de alta calidad, tintes veganos y fantasía
                        </p>
                        <p>
                            Color completo, raíces o mechas, con nuestro asesoramiento nos aseguraremos de cuidar tu pelo
                            y obtener los mejores resultados.
                        </p>
                    </Article>
                </div>
                <div className="col">
                    <img
                        src={hair10.src}
                        className="shadow rounded mb-4 mw-100"
                        alt="Tintes"
                    />
                </div>
            </div>
        </div>

        <div className="mt-5">
            <div className="row align-items-center my-5 gy-2  flex-column-reverse flex-md-row text-center">
                <div className="col">
                    <img
                        src={hair09.src}
                        className="shadow rounded mb-4 mw-100"
                        alt="Alisado Keratina"
                    />
                </div>
                <div className="col">
                    <Article title="Alisado Keratina">
                        <p>
                            Tratamiento profesional que le dará a tu pelo ese liso que siempre has querido
                        </p>
                        <p>
                            Productos de alta calidad que conseguirán el resultado sin dañar tu pelo,
                            nunca más arriesgues la salud de tu cabello con formol y productos químicos dañinos.
                        </p>
                        <p>¡Pregunta sin compromiso!</p>
                    </Article>
                </div>
            </div>
        </div>

        <div className="mt-5">
            <div className="row align-items-center my-5 gy-2  flex-column-reverse flex-md-row text-center">
                <div className="col">
                    <Article title="Plex Forte">
                        <p>
                            Tratamiento hidratante para reparar la estructura del cabello aportando la máxima fuerza y protegiéndolo
                            así como fortaleciendo el cabello a largo plazo.
                        </p>
                    </Article>
                </div>
                <div className="col">
                    <img
                        src={hair03.src}
                        className="shadow rounded mb-4 mw-100"
                        alt="hidratacion plex forte"
                    />
                </div>
            </div>
        </div>

    </div>
}