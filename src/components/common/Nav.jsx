import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom"




function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to={"/"}>
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to={"/staff"}> All Staff</Link>
          </li>
          <li>
            <Link to={"/pets"}>All Pets</Link>
          </li>
          <li>
            <Link to={"/pets/cats"}>All Cats</Link>

          </li>

          <li>

            <Link to={"./pets/dogs"}> All Dogs</Link>
          </li>
        </ul>
      </aside>
    </header >
  );
}

export default Nav;
