import "./Circuit.css";

function Circuit(props) {
  return (
    <div className="circuit-card-container">
      <div className="circuit-card">
        <div className="circuit-text">
          <p className="circuit-country">{props.circuitCountry}</p>

          <p className="circuit-gp">
            FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2026
          </p>
          <p className="circuit-date">{props.circuitDate}</p>
        </div>

        <div className="circuit-right">
          <div className="circuits-flags-container">
            <img className="circuits-imgs" src={props.circuitFlag} alt="" />
          </div>
          <div className="circuits-grand-prix-map-container">
            <img className="circuits-grand-prix-map" src={props.circuitMap} alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circuit;
