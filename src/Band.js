import React, { useEffect, useState } from "react"

function Band({band}){

        function handleDeleteClick() {
            fetch(`http://localhost:9292/bands/${band.id}`, {
              method: "DELETE",
            })}

    return (
        <div>
            <h1>{band.name}</h1>
            <h3>{band.genre}</h3>
            <p>
            {band.description}
            </p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
};

export default Band