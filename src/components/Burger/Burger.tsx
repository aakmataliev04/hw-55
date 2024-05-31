import {IngredientType} from '../../types';
import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BreadTop from './BreadTop/BreadTop';
import BreadBottom from './BreadBottom';
import BurgerPriceCounter from './BurgerPriceCounter/BurgerPriceCounter';

interface BurgerProps {
  burgerState: IngredientType[],
  burgerPrice: number
}

const Burger: React.FC<BurgerProps> = ({burgerState, burgerPrice}) => {
  return (
    <>
      <div className="Burger">
        <BreadTop/>
        {
          burgerState.map((ingredient, index) => {
            return (
              <BurgerIngredient key={index} ingredient={ingredient.name}/>
            );
          })
        }
        <BreadBottom/>
      </div>
      <BurgerPriceCounter burgerPrice={burgerPrice}/>
    </>
  );
};

export default Burger;