import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import produce from "immer";

const App = () => {
  const [bug, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <>
      <NavBar />
      <div>
        {bug.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "fixed" : "new"}{" "}
          </p>
        ))}
      </div>
      <button onClick={handleClick}>toggle last name</button>
    </>
  );
};

export default App;
