// Importing modules
import { pokemon, types } from './pokemon'
import EvolvedPokemon from './class-extends'
console.log(pokemon);
console.log(types);

import { add } from './pokemon'
import multiply from './pokemon'
console.log('Total = ', add(3, 5));

// Template literal strings
{
  let a = 'hello';
  let b = 'world';
  let c = `${a} ${b}`
  console.log(c);
}

// Spread operator
{
  let a = [7, 8, 9];
  let b = [6, ...a, 10];
  console.log(b);
  console.log(...b);

  function lots_of_args(...args){
    console.log(args);
  }
  lots_of_args(1, 2, 3, 'David');
}

{
  function butter(...b) {
  let a = [1, 2, 3];
  return a.concat(b);
  }

  console.log(butter(4, 5, 6));
}

// Destructing assignment
{
  let c = [100, 200];
  let [a, b] = c;
  console.log(a, b);

  let pokemon = ['bulbasaur', 'charmander', 'squirtle'];
  let [grass, fire, water] = pokemon;
  console.log(fire, water, grass);
}

{
  let c = [100, 200, 300, 400, 500];
  let [a, ...b] = c;
  console.log(a, b);
}

{
  let pokemon = {name: 'pikachu', type: 'electric'};
  let { name, type } = pokemon;
  console.log(name, 'is', type);
}

// Arrow functions (Anonymous fucntion)
{
  setTimeout( () => {
    console.log('3...2...1... Blastoff!');
  }, 1000);
}

//Map method
{
  let points = [10, 20, 30];

  let increment = (element) => {
    return element + 1;
  }

  points = points.map(increment);

  console.log(points);

  // or can eneter anonymous function as an argument
  points = points.map(element => {
    return element + 1;
  });

  console.log(points);

  //or even shorter syntax
  points = points.map(element => element + 1);

  console.log(points);

  let lengths = [3, 7, 5];
  let multiple = 8;

  const scale = (multiple) => {
    lengths = lengths.map(element => element * multiple);
    return lengths
  };

  console.log(scale(multiple));
}

// Filter method
{
  let isPassing = (grade) => {
    return grade >= 50;
  }

  let scores = [45, 50, 70];

  let passing = scores.filter(isPassing);

  console.log(passing);

  //or shorter syntax
  let shorterPassing = scores.filter(grade => grade >=50);
  console.log(shorterPassing);
}

//Find method - returns the first element meeting the condition.
// I.e. does the array contain this value
{
  let targets = [1, 2, 3, 4];
  console.log(targets.find(values => values == 2));
}

// Classes
{
  let charizard = new EvolvedPokemon('Charizard', 100, 3);
  charizard.attack();
  console.log(charizard.canEvolveAgain());
}
