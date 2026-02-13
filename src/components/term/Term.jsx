import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Term.css"

function Term() {
  return (
    <>
      <Header />
      <h1>TÉRMINOS Y CONDICIONES DE USO</h1>
      <p> Esta página web es propiedad y está operado por Isaac Nauset. Estos Términos establecen los términos y condiciones bajo los cuales puedes usar nuestra página web y nuestros servicios.
        Al acceder o usar la página web, aceptas haber leído, entendido y aceptado estar sujeto a estos Términos:
        Las cookies y otras tecnologías similares, como píxeles o almacenamiento local, te brindan una experiencia mejor, más rápida y más segura. Las cookies también se utilizan para operar nuestros servicios, que incluyen nuestros sitios web, aplicaciones, APIs, píxeles, integradores de contenido y notificaciones de correo electrónico. Concretamente, las cookies utiliza estas tecnologías para:
      </p>
      <div className="terms-list-container">
        <ol>
          <li>Ofrecer las características y funcionalidades de los servicios.</li>
          <li>Guardar y respetar tus preferencias.</li>
          <li>Protegerte contra el spam y abusos.</li>
          <li>Proporcionar funciones de suscripción y distribuir determinados contenidos.</li>
          <li>Comprender cómo interactúas con nuestros servicios y dónde podemos mejorar.</li>
          <li>Medir la eficacia de nuestra publicidad y marketing.</li>
          <li>Valorar el rendimiento de nuestros servicios e identificar errores y otros problemas de calidad.</li>
        </ol>
      </div>
      <Footer />
    </>
  )
}

export default Term