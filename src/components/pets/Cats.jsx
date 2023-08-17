import { petData } from "../../data/pets";

// function allCats(){


//    const CatGroup=petData.filter((el)=>{el.kind ==="Cat"







//    })





//    return (<><div>{CatGroup}</div></>);



// }

// export default allCats

import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsListNav2 = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 :1;
      acc[position].push(pet==="Cat");
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />


      
      <section className="pets-list">
        {}
        {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}

        {/* {}
        {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} /> */}
        {/* ))} */}
      </section>
    </section>
  );
};

export default PetsListNav2;