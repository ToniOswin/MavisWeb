import Article from "../Components/Article";
import bella from '../Images/Bellaction.jpeg'
import crio from '../Images/Crio.jpeg'

export default function Estetica() {
    return <div className="container">
        <div className="mt-5">
            <div className="align-items-center my-5 gy-2 flex-column flex-md-row text-center">
                    <Article title="Nuestros servicios">
                        <p>Criolipolisis 250€ por sesión 1 zona</p>
                        <p>Bellaction, cuerpo completo, papada y zona facial incluida,190€ cuerpo completo (70€ por zona)</p>
                        <p>Hollywood peel 100€ sesión,</p>
                        <p>Lifting de pestañas 36€ y tinte de pestañas 15€</p>
                        <p>Reflexología Podal 30€ sesión</p>
                        <p>Facial profundo 70€</p>
                        <p>Tratamiento con despigmentación 90€ </p>
                        <p>Dermapen 100€ </p>
                        <p>Ritual corporal con tres tipos de masajes 55€ la sesión,</p>
                        <p>Masaje lomi lomi 60€</p>
                        <p>Masaje deportivo 60€</p>
                    </Article>
            </div>
            <div className="row align-items-center justify-content-center my-5 gy-2">
                <img className="col-3 mw-100 shadow my-3" src={bella.src} alt="Peluqueria Mavi's by Dunamis" />  
                <img className="col-3 mw-100 shadow my-3" src={crio.src} alt="Peluqueria Mavi's by Dunamis" />  
            </div>
        </div>   
    </div>
}