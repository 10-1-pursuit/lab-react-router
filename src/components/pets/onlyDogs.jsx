import React from "react";
import PetsList from "./PetsList";



const onlyDogs = ({ dogs }) => {


    return <PetsList cats={[]} dogs={dogs} />

};

export default onlyDogs;