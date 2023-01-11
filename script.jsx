const cities = [
  {
    name: "Amsterdam",
    country: "The Netherlands",
    residents: 851573,
    knownFor: "Anne Frank",
    image: "amsterdam.jpg",
    id: 1
  },
  {
    name: "London",
    country: "United Kingdom",
    residents: 8674000,
    knownFor: "Tower of London",
    image: "london.jpg",
    id: 2
  },
  {
    name: "Sydney",
    country: "Australia",
    residents: 4921000,
    knownFor: "Sydney Opera House",
    image: "sydney.webp",
    id: 3
  },
  {
    name: "New York City",
    country: "United States",
    residents: 8804000,
    knownFor: "Empire State Building",
    image: "new-york-city.webp",
    id: 4
  },
  {
    name: "Ciudad Juarez",
    country: "Mexico",
    residents: 1321000,
    knownFor: "Kevin",
    image: "ciudad-juarez.jpg",
    id: 5
  }
];

const City = (props) => {
  return (
    <div className="city">
      <span className="city-name">{props.name}</span>
      <img src={"img/" + props.image} className="city-img" />
      <div className="city-facts">
        <div className="city-fact">
          <b> Country:</b> {props.country}
        </div>
        <div className="city-fact">
          <b> Residents:</b> {props.residents}
        </div>
        <div className="city-fact">
          <b> Known for:</b> {props.knownFor}
        </div>
      </div>
    </div>
  );
};

const Header = (props) => {
  return (
    <header id="test">
      <h1>{props.title}</h1>
    </header>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Top 5 cities" />

      {/* City list */}

      {cities.map((city) => (
        <City
          name={city.name}
          country={city.country}
          residents={city.residents}
          knownFor={city.knownFor}
          image={city.image}
          key={city.id.toString()}
        />
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
