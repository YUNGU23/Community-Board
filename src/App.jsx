import "./App.css";
import Card from "./components/Card.jsx";
import data from "./data/data.js";

function App() {
  return (
    <>
      <img src="../src/img/awning.png" alt="header" className="header" />
      <h1>Food Truck Favorites</h1>
      <div className="cardContainer">
        {data.map((truck, index) => (
          <Card
            key={index}
            img={truck.img}
            name={truck.name}
            region={truck.region}
          />
        ))}
      </div>
    </>
  );
}

export default App;
