// this below calls the function "useState"
import React, { useState } from 'react';

// after typing "npm i axios" to install axios to our project, it is a library for making API calls. We import axios here with this code below
import axios from 'axios';


const Pokemon = props => {
    
    const [pokelist, setPokelist] = useState([])

    // this below is the function "getaPokemon" which handles the event that calls the "get request" to the API url below where all the information comes from 
    const GetaPokemon = e => {
        // we use this "fetch" below if we didnt install any library for API calls like axios 
        // fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964")
        // OR if we import axios above we can code below
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964") 
            // We implement a "response" which is used to return the information received 
            // .then(response => response.json())
            // .then( response => {
            //     console.log(response.count);
            //     setPokelist(response.results);
            // })

            // OR 

            // We implement a "promise" that has 3 types e.g ( pending, res for resolved, err for reject) which is used to return the information received
            .then( res => {
                console.log(res.data.count);
                setPokelist(res.data.results);
            })
            // this code below .catch() below is used if there is an error with the information received 
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <>
    
          <div className="container">
            <div className="jumbotron">
              <h1> API Template </h1>          
            </div>
            <button onClick={GetaPokemon} className="btn btn-secondary">Fetch Pokemon Names</button>
            <br/>
            <br/>
            {pokelist.map((item, i) =>
            <p key={i}>{item.name}</p>
            )}
                      
          </div>
        </>
    )

}

export default Pokemon;