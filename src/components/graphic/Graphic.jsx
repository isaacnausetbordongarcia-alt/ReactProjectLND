import * as d3 from "d3";
import "./Graphic.css";

const data = [
  { driver: "Norris", points: 423 },
  { driver: "Verstappen", points: 421 },
  { driver: "Piastri", points: 410 },
  { driver: "Russell", points: 319 },
  { driver: "Hamilton", points: 242 },
  { driver: "Antonelli", points: 156 },
  { driver: "Albon", points: 150 },
  { driver: "Sainz", points: 64 },
  { driver: "Alonso", points: 56 },
  { driver: "Hulkenberg", points: 51 },
  { driver: "Hadjar", points: 51 },
  { driver: "Bearman", points: 41 },
  { driver: "Lawson", points: 38 },
  { driver: "Ocon", points: 38 },
  { driver: "Stroll", points: 33 },
  { driver: "Tsunoda", points: 33 },
  { driver: "Gasly", points: 22 },
  { driver: "Bortoleto", points: 15 },
  { driver: "Colapinto", points: 15 },
  { driver: "Doohan", points: 15 }
];

export default function BarChart() {
  const width = 1000;
  const height = 300;

  const escala = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.points)])
    .range([0, height - 50]); // espacio para nombres

  const barWidth = width / data.length;

  return (
    <div className="chart-container">
      <svg width={width} height={height}>
        {data.map((d, index) => (
          <rect
            key={index}
            x={index * barWidth + 10}
            y={height - escala(d.points) - 30}
            width={barWidth - 20}
            height={escala(d.points)}
            className="bar"
          />
        ))}

        {data.map((d, index) => (
          <text
            key={index}
            x={index * barWidth + barWidth / 2}
            y={height - 5}
            textAnchor="middle"
            className="label"
          >
            {d.driver}
          </text>
        ))}

        {data.map((d, index) => (
          <text
            key={index}
            x={index * barWidth + barWidth / 2}
            y={height - escala(d.points) - 35}
            textAnchor="middle"
            className="value-label"
          >
            {d.points}
          </text>
        ))}
      </svg>
    </div>
  );
}