import React from 'react';

interface BurgerIngredientProps {
  ingredient: string
}

const BurgerIngredient: React.FC<BurgerIngredientProps> = ({ingredient}) => {
  return (
    <div className={ingredient}>
    </div>
  );
};

export default BurgerIngredient;