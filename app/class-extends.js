import Pokemon from './class'

class EvolvedPokemon extends Pokemon {
  constructor(name, lvl, evolutionStage){
    super(name, lvl);
    this.evolutionStage = evolutionStage;
  }

  canEvolveAgain(){
    if(this.level == 3){
      return false;
    }
    return true;
  }
}

export default EvolvedPokemon;
