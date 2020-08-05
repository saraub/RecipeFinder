import React, { useEffect, useState } from 'react';
import Recipe from "./recipes";
import './App.css';


const App = () =>{

  const App_Id="785b0434";
  const App_key="205275a125befd46f242ed8c9169a7da";
  
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("chicken");

  useEffect(() =>{
    getRecipes();

  },[query]);

  const getRecipes = async ()=>{
    const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_key}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data= await response.json();
    setRecipes(data.hits);


  };

  const updateSearch=e=>{
    setSearch(e.target.value);


  }
  const getSearch=e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");

  }

  return(

    <div className="App">
      <form onSubmit={getSearch} className="search_form">
        <input onChange={updateSearch} value={search}  className="search_input" type="text">

        </input>
        <button className="search_button" type="submit">Search</button>
      </form>
      {recipes.map(recipe=>(

        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories.toFixed(2)}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}

    </div>

  );



}

export default App;
