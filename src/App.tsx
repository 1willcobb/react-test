import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [person, setPerson] = useState({
    firstName: "Will",
    lastName: "Cobb",
  });

  const handleClick = () => {
    person.lastName === "Cobb"
      ? setPerson({ ...person, lastName: "Smith" })
      : setPerson({ ...person, lastName: "Cobb" });
  };

  return (
    <>
      <NavBar />
      <div>
        {person.firstName} {person.lastName}
      </div>
      <button onClick={handleClick}>toggle last name</button>
    </>
  );
};

export default App;
