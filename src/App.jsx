import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NotFound from "./components/NotFound";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  const cats = pets.filter(pet => pet.kind === "Cat");
  const dogs = pets.filter(pet => pet.kind === "Dog");

  return (
    <Router>
    <div className="wrapper">
      <Nav />
      <Switch>
        <Route path = "/" exact><Home employees={employees} owners={owners} pets={pets} />
        </Route>
      
      <Route path = 
      "/staff"><StaffList employees={employees} />
      </Route> 

      <Route path = 
      "/pets/cats"><PetsList pets={pets.filter(pet => pet.type === "cat")} />
      </Route> 

      <Route path = 
      "/pets/dogs"><PetsList pets={pets.filter(pet => pet.type === "dog")} />
      </Route> 

      <Redirect from="/pets" to="/pets/cats"/>

      {/* Route for 404 page */}
      <Route path = "*" component = {NotFound} />

      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
