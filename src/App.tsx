import './App.css';
import Burger from './components/Burger/Burger';
import {IngredientType} from './types';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import {useState} from 'react';
import Ingredient from './components/Ingredient/Ingredient';

const Ingredients: IngredientType[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

const App = () => {
  const [ingredientsAmount, setIngredientsAmount] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);
  const [burger, setBurger] = useState<IngredientType[]>([]);
  const [burgerPrice, setBurgerPrice] = useState(30);

  const onAddIngredient = (index: number) => {
    setBurger((prevState) => {
      const newIngredient = Ingredients[index];
      return [...prevState, newIngredient];
    });

    setIngredientsAmount((prevState) => {
      prevState[index].count += 1;
      return [...prevState];
    });

    setBurgerPrice((prevState) => prevState + Ingredients[index].price);
  };

  const onDeleteBtnClick = (index: number) => {
    setBurger((prevState) => {
      const ingredientIndex = prevState.findIndex((ingredient) => ingredient.name === Ingredients[index].name);
      if (ingredientIndex !== -1) {
        const updatedBurger = [...prevState];
        updatedBurger.splice(ingredientIndex, 1);
        return updatedBurger;
      }
      return prevState;
    });

    setIngredientsAmount((prevState) => {
      const updatedAmount = [...prevState];
      if (updatedAmount[index].count > 0) {
        updatedAmount[index].count -= 1;
      }
      return updatedAmount;
    });

    if (burger.length) {
      setBurgerPrice((prevState) => {
        if (prevState - Ingredients[index].price >= 30) {
          return prevState - Ingredients[index].price;
        } else {
          return 30;
        }
      });
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <div className="ingredients-block">
        <h2>Ingredients:</h2>
        {Ingredients.map((ingredient, index) => (
          <Ingredient
            ingredient={ingredient}
            ingredientAmount={ingredientsAmount[index].count}
            onAddIngredient={() => onAddIngredient(index)}
            onBtnClick={() => onDeleteBtnClick(index)}
            key={index}
          />
        ))}
      </div>
      <div className="burger-block">
        <h2>Burger:</h2>
        <Burger burgerState={burger} burgerPrice={burgerPrice}/>
      </div>
    </div>
  );
};

export default App;