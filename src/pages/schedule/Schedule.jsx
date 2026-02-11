import Circuit from "../../components/circuit/circuit";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const circuits = [
	{
		circuitFlag: "/bahrain-flag-circular.png",
		circuitMap: "/bahrain-grand-prix-map.webp"
	},
	{
		circuitFlag: "/australia-flag-circular.png",
		circuitMap: "/australia-grand-prix-map.webp"
	}
]

function Schedule() {

	return (
		<>
			<Header />
			{
				circuits.map((item, index) => {
					return <Circuit key={index} circuitFlag={item.circuitFlag} circuitMap={item.circuitMap} />
				})
			}
			<Footer />
		</>
	)
}

export default Schedule