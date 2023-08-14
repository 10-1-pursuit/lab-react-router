import React from "react";
import "./PetsListNav.css";



import { Link } from "react-router-dom"

export const PetsListNav = ({ cats, dogs, staff, pets }) => {

  // useNavigate()

  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to={"/"}> NorthWest Animal Hospital</Link>

        </li>

        <li>
          <Link to={"/staff"}>All Staff </Link>
        </li>
        <li>

          <Link to={"/pets/cats"}> See All Cats ({`Cats: ${cats.length}`})</Link>
        </li>

        <li>
          <Link to={"/pets/dogs"}> See All Dogs ({`Dogs: ${dogs.length}`})</Link>
        </li>

      </ul >
    </nav >
  );
};

export default PetsListNav;
