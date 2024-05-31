import {IngredientType} from '../../types';
import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

interface BurgerProps {
  burgerState: IngredientType[],
  burgerPrice: number
}

const Burger: React.FC<BurgerProps> = ({burgerState, burgerPrice}) => {
  return (
    <>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {
          burgerState.map((ingredient, index) => {
            return (
              <BurgerIngredient key={index} ingredient={ingredient.name}/>
            );
          })
        }
        <div className="BreadBottom"></div>
      </div>
      <div className="burgerPrice">{burgerPrice}</div>
    </>
  );
};

export default Burger;