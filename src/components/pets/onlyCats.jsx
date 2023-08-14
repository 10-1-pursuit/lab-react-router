import React from "react";
import PetsList from "./PetsList";



const onlyCats = ({ cats }) => {


    return (
        <div>

            {cats.map(cat => (

                <Pet key={cat.id} kind="cat" pet={cat} />


            ))}
        </div>
    )
};


export default onlyCats;