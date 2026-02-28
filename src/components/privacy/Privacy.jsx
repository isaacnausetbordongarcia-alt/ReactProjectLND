import Footer from "../footer/Footer"
import Header from "../header/Header"
import './Privacy.css';

function Privacy() {
  return (
    <>
      <Header />
      <div className="privacy-container">

        <div className="privacy-hero">
          <h1>Política de <span>Privacidad</span></h1>
          <p className="privacy-subtitle">Última actualización: febrero 2026</p>
        </div>

        <div className="privacy-content">

          <section className="privacy-section">
            <h2><span className="section-number">01</span> Recogida de datos</h2>
            <p>A través de este sitio web no se recaban datos de carácter personal de las personas usuarias sin su conocimiento, ni se ceden a terceros. Con la finalidad de ofrecerle el mejor servicio y con el objeto de facilitar el uso, se analizan el número de páginas visitadas, el número de visitas, así como la actividad de las personas visitantes y su frecuencia de utilización.</p>
          </section>

          <section className="privacy-section">
            <h2><span className="section-number">02</span> Uso de la información</h2>
            <p>A estos efectos, la Agencia Española de Protección de Datos (AEPD) utiliza la información estadística elaborada por el Proveedor de Servicios de Internet. La AEPD no utiliza cookies para recoger información de las personas usuarias, ni registra las direcciones IP de acceso.</p>
          </section>

          <section className="privacy-section">
            <h2><span className="section-number">03</span> Cookies</h2>
            <p>Únicamente se utilizan cookies propias, de sesión, con finalidades técnicas. El portal del que es titular la AEPD contiene enlaces a sitios web de terceros, cuyas políticas de privacidad son ajenas a la de la AEPD.</p>
          </section>

          <section className="privacy-section">
            <h2><span className="section-number">04</span> Terceros y configuración</h2>
            <p>Al acceder a tales sitios web usted puede decidir si acepta sus políticas de privacidad y de cookies. Con carácter general, si navega por internet usted puede aceptar o rechazar las cookies de terceros desde las opciones de configuración de su navegador.</p>
          </section>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Privacy