// A module - exports can be functions, objects or primitives to other files
export const pokemon = ["Pikachu", "Charizard", "Squirtle"];
export const types = ["Electric", "Fire", "Water"];

const add = (x, y) => {
  return x + y;
}

const multiply = (x, y) => {
  return x * y;
}

export { add, multiply };
export default multiply;
