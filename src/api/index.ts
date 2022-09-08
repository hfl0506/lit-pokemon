const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function get(path: string) {
  const data = await fetch(path);
  return await data.json();
}

export async function getPokemon(target: string) {
  const url = `${BASE_URL}/${target}`;
  return get(url);
}
