import Circuit from "../../components/circuit/Circuit";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const circuits = [
  {
    circuitFlag: "/australia-flag-circular.png",
    circuitMap: "/australian-grand-prix-map.png",
    circuitCountry: "Australia",
    circuitDate: "13-15 Mar"
  },
  {
    circuitFlag: "/belgium-circular-flag.png",
    circuitMap: "/belgian-grand-prix-map.png",
    circuitCountry: "Belgium",
    circuitDate: "13-15 Apri"
  },
  {
    circuitFlag: "/brazilian-circular-flag.png",
    circuitMap: "/brazil-grand-prix-map.png",
    circuitCountry: "Brazil",
    circuitDate: "13-15 May"
  },
  {
    circuitFlag: "/canada-circular-flag.png",
    circuitMap: "/canadian-grand-prix-map.png",
    circuitCountry: "Canada",
    circuitDate: "13-15 Jun"
  },
  {
    circuitFlag: "/hungary-circular-flag.png",
    circuitMap: "/hungary-grand-prix-map.png",
    circuitCountry: "Hungary",
    circuitDate: "13-15 Jul"
  },
  {
    circuitFlag: "/japan-circular-flag.png",
    circuitMap: "/japan-grand-prix-map.png",
    circuitCountry: "Japan",
    circuitDate: "13-15 Aug"
  },
  {
    circuitFlag: "/monaco-circular-flag.png",
    circuitMap: "/monaco-grand-prix-map.png",
    circuitCountry: "Monaco",
    circuitDate: "13-15 Sep"
  },
  {
    circuitFlag: "/portugal-circular-flag.png",
    circuitMap: "/portugal-grand-prix-map.png",
    circuitCountry: "Portugal",
    circuitDate: "13-15 Oct"
  },
  {
    circuitFlag: "/turkey-circular-flag.png",
    circuitMap: "/turkish-grand-prix-map.png",
    circuitCountry: "Turkey",
    circuitDate: "13-15 Nov"
  },
  {
    circuitFlag: "/unite-state-circular-flag.png",
    circuitMap: "/united-state-grand-prix-map.png",
    circuitCountry: "United States",
    circuitDate: "13-15 Dic"
  },
  {
    circuitFlag: "/spain-circular-flag.png",
    circuitMap: "/catalunya-grand-prix-map-2.avif",
    circuitCountry: "Spain",
    circuitDate: "13-15 Jan"
  },
  {
    circuitFlag: "/singapore-circular-flag.png",
    circuitMap: "/singapur-grand-prix-map-2.avif",
    circuitCountry: "Singapore",
    circuitDate: "13-15 Feb"
  }
]

function Schedule() {
  return (
    <>
      <Header />

      <div className="circuits-grid">
        {circuits.map((item, index) => (
          <div className="circuit-card-container" key={index}>
            <Circuit circuitFlag={item.circuitFlag} circuitMap={item.circuitMap} circuitCountry={item.circuitCountry} circuitDate={item.circuitDate} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}


export default Schedule