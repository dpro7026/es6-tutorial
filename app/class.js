// Classes - extend allows inheritence
class Pokemon{
  constructor(name, level){
    this.name = name;
    this.level = level;
  }

  attack(){
    console.log(`${this.name} attacks!!`);
  }
}

// let pikachu = new Pokemon('Pikachu', 5);
// pikachu.attack();

export default Pokemon;
