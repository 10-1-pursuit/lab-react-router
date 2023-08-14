import React from "react";
import PetsList from "./PetsList";



const onlyCats = ({ cats }) => {


    return <PetsList cats={cats} dogs={[]} />

};

export default onlyCats;