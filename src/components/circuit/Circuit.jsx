function Circuit(props) {

    return (
        <div className="circuit-info">
            <div className="circuits-flags"><img src={props.circuitFlag} alt="" /></div>
            <div className="circuits-grand-prix-map"><img src={props.circuitMap} alt=""/></div>
        </div>
    )
}

export default Circuit