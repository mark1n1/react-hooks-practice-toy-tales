import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  console.log(toys);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((response) => response.json())
      .then((toys) => setToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(deletedToy) {
    // console.log(deletedToy);
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id);

    setToys(updatedToys);
  }

  function handleUpdateLikes(updatedToy) {
    const updatedToys = toys.map((toy) => {
      if(toy.id === updatedToy.id) return updatedToy;

      return toy;
    });

    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={ handleAddNewToy }/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={ toys } handleDeleteToy={ handleDeleteToy } handleUpdateLikes={ handleUpdateLikes }/>
    </>
  );
}

export default App;
