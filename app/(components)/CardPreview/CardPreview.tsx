// "use client"

import Recipe from '@/types/Recipes';
import React, { useState } from 'react'
import Image from 'next/image';
import "./CardPreview.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
interface Props {
    recipe: Recipe;
    // setRecipes: Function;
    // id: number | string;
  }
  

function CardPreview({ recipe}: Props) {
    // const [expanded, setExpanded] = useState(false);
  
    // const showExpandedCard = () => {
    //   setExpanded(true);
    // };
  
    

    return (
      <Link href={`/recipes/${recipe._id}`} className="card small-card">
        {/* <ExpandedCard
          id={id}
          recipe={recipe}
          expanded={expanded}
          setExpanded={setExpanded}
          setRecipes={setRecipes}
        /> */}
        {/* <Image src={recipe.image} alt="Picture of the dish" width={200} height={200}/> */}
        <div className="image-wrapper">
        <div
          className="card-image-top "
          style={{ backgroundImage: `url(${recipe.image})` }}
        ></div>
        </div>
        
  
        <div className="card-body">
          <h2 className="card-title">{recipe.title}</h2>
  
          <hr />
  
          <div className="card-details">
            <div className="card-detail">
              <h5>Ingredients:</h5>
              <p className="card-text">{recipe.ingredients.length}</p>
            </div>
  
            <div className="card-detail">
              <h5>Servings:</h5>
              <p className="card-text">{recipe.servings}</p>
            </div>
  
            <div className="card-detail">
              <h5>Prep Time:</h5>
              <p className="card-text">{recipe.prepTime}</p>
            </div>
  
            <div className="card-detail">
              <h5>Cooc Time:</h5>
              <p className="card-text">{recipe.coocTime}</p>
            </div>
          </div>
        </div>
  
        {/* <button className="read-more-btn" onClick={showExpandedCard}> */}
        {/* <FontAwesomeIcon icon={faBookOpen}/> */}

          {/* <i className="fa-solid fa-book-open"></i> */}
        {/* </button> */}
      </Link>
    );
  }
  

export default CardPreview