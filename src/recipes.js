import React from "react";
import style from "./recipe.module.css";



const Recipes =({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipes}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ing=>(
                    <li>{ing.text}</li>
                ))}
            </ol>
            <p>{calories} kcal</p>
            <img src={image} alt=""></img>


        </div>
    );
}

export default Recipes;