import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import News from "../../components/news/News";

const f1News = [
    {
        f1NewsTitle: "Shanghai favorece a la nueva F1: más energía y menos limitaciones para los pilotos",
        f1NewsImage: "/circuito-de-shanghai.png",
        f1NewsDescription: "En la aproximación a la primera cita de la temporada habíamos subrayado varias veces cómo Melbourne era uno de los circuitos más críticos del año en el frente energético, debido a la alternancia entre largos tramos a fondo y pocas frenadas verdaderamente fuertes. Shanghai, en cambio, representa casi una parada para este reglamento: no por casualidad la FIA, en clasificación, ha concedido el máximo de energía recuperable, equivalente a 9 MJ."
    },
    {
        f1NewsTitle: "Por qué la carrera de F1 en China debería ser más normal que Melbourne",
        f1NewsImage: "/circuito-de-shanghai2.png",
        f1NewsDescription: "El Gran Premio de Australia de este año fue emocionante o una auténtica aberración, dependiendo del punto de vista. Lo cierto es que las nuevas reglas supusieron un pequeño choque cultural si estabas viendo las cámaras on-board, especialmente en lo referente al coasting visible y al clipping en la entrada de la curva 9 de Melbourne durante la clasificación."
    }
]

function Newsf1() {
    return (
        <>
            <Header />

            <div className="news-grid">
                {f1News.map((item, index) => (
                    <News
                        key={index}
                        f1NewsTitle={item.f1NewsTitle}
                        f1NewsImage={item.f1NewsImage}
                        f1NewsDescription={item.f1NewsDescription}
                    />
                ))}
            </div>

            <Footer />
        </>
    )
}

export default Newsf1