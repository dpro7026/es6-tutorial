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
  // () => {};  
}
