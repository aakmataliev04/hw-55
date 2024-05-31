import React from 'react';
import {IngredientType} from '../../types';

interface IngredientProps {
  ingredient: IngredientType,
  ingredientAmount: number,
  onAddIngredient: React.MouseEventHandler,
  onBtnClick: React.MouseEventHandler
}

const Ingredient: React.FC<IngredientProps> = ({ingredient, ingredientAmount, onAddIngredient, onBtnClick}) => {
  return (
    <div className={'ingredient'}>
      <button className={'add-ingredient-btn'} onClick={onAddIngredient}>
        <img className={'ingredient-img'} src={ingredient.image}/>
        <div className={'ingredient-name'}>{ingredient.name}</div>
      </button>
      <div className={'ingredient-amount'}>x{ingredientAmount}</div>
      <button className={'increase-ingredient-btn'} onClick={onBtnClick}></button>
    </div>
  );
};

export default Ingredient;