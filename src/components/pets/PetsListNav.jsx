import React from "react";
import { Link } from 'react-router-dom';
import "./PetsListNav.css";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/cats">See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to="/dogs">See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
