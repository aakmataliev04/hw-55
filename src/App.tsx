import './App.css';
import Burger from './components/Burger/Burger';
// import meatImage from './assets/meat.png';
// import cheeseImage from './assets/cheese.png';
// import saladImage from './assets/salad.png';
// import baconIMage from './assets/bacon.png';
// import {Ingredient} from './types';
// import {useState} from 'react';

// const Ingredients: Ingredient[] = [
//   {name: 'Meat', price: 80, image: meatImage},
//   {name: 'Cheese', price: 50, image: cheeseImage},
//   {name: 'Salad', price: 10, image: saladImage},
//   {name: 'Bacon', price: 60, image: baconIMage},
// ];

const App = () => {
//   const [ingredients, setIngredients] = useState([
//     {name: 'Meat', count: 0},
//     {name: 'Cheese', count: 0},
//     {name: 'Salad', count: 0},
//     {name: 'Bacon', count: 0},
//   ]);

  return (
    <div className={'App'}>
    <div className={"ingredients-block"}>
      <h2>Ingredients:</h2>

    </div>
      <div className={"burger-block"}>
        <h2>Burger:</h2>
        <Burger />
      </div>
    </div>
    );
};


export default App;
