import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(function(){
    fetch("http://localhost:5500/plants")
    .then((response) => response.json())
    .then((data) => setPlants(data))
    .catch((error) => console.log("Unable to fetch data", error))
  }, [])

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          image={plant.image}
          name={plant.name}
          price={plant.price}
          inStock={plant.inStock}
        />
      ))}
    </ul>
  );
}

export default PlantList;
