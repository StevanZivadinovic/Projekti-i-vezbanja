import React, { useEffect, useState } from "react";
import style from './recipe.module.css';

let Recipe = (props) => {
  return (
    <div>
      <h1 className={style.recipe}>{props.title}</h1>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{props.calories}</p>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Recipe;
