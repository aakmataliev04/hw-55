import React from 'react';

interface BurgerPriceCounterProps {
  burgerPrice: number
}

const BurgerPriceCounter: React.FC<BurgerPriceCounterProps> = ({burgerPrice}) => {
  return (
    <>
      <div className="burgerPrice">{burgerPrice}</div>
    </>
  );
};

export default BurgerPriceCounter;