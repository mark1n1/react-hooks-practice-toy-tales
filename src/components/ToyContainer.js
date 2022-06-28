import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeleteToy, handleUpdateLikes }) {
  
  return (
    <div id="toy-collection">
      {
        toys.map((toy) => 
          <ToyCard 
            key={ toy.id } 
            toy={ toy } 
            onDeleteToy={ handleDeleteToy }
            onUpdateLikes={ handleUpdateLikes }
          />)
      }
    </div>
  );
}

export default ToyContainer;
