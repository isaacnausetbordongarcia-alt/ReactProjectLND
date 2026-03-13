import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Term.css"

function Term() {
  return (
    <>
      <Header />
      <div className="term-container">

        <div className="term-hero">
          <h1>Términos y <span>Condiciones</span></h1>
          <p className="term-subtitle">Última actualización: febrero 2026</p>
        </div>

        <div className="term-content">

          <section className="term-section">
            <h2><span className="section-number">01</span> Aceptación de los términos</h2>
            <p>Esta página web es propiedad y está operada por Isaac Nauset. Estos Términos establecen los términos y condiciones bajo los cuales puedes usar nuestra página web y nuestros servicios. Al acceder o usar la página web, aceptas haber leído, entendido y aceptado estar sujeto a estos Términos.</p>
          </section>

          <section className="term-section">
            <h2><span className="section-number">02</span> Uso de cookies y tecnologías</h2>
            <p>Las cookies y otras tecnologías similares, como píxeles o almacenamiento local, te brindan una experiencia mejor, más rápida y más segura. Las cookies también se utilizan para operar nuestros servicios, que incluyen nuestros sitios web, aplicaciones, APIs, píxeles, integradores de contenido y notificaciones de correo electrónico.</p>
          </section>

          <section className="term-section">
            <h2><span className="section-number">03</span> Finalidades del uso</h2>
            <p>Concretamente, utilizamos estas tecnologías para los siguientes propósitos:</p>
            <ol className="term-list">
              <li>Ofrecer las características y funcionalidades de los servicios.</li>
              <li>Guardar y respetar tus preferencias.</li>
              <li>Protegerte contra el spam y abusos.</li>
              <li>Proporcionar funciones de suscripción y distribuir determinados contenidos.</li>
              <li>Comprender cómo interactúas con nuestros servicios y dónde podemos mejorar.</li>
              <li>Medir la eficacia de nuestra publicidad y marketing.</li>
              <li>Valorar el rendimiento de nuestros servicios e identificar errores y otros problemas de calidad.</li>
            </ol>
          </section>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Term