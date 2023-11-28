import axios, { AxiosResponse } from 'axios';
import { IListPokemon } from '../types/api/pokemon';

export const listPokemons = async (page: number): Promise<IListPokemon> => {
  // offset is calculated for fetching pokemon page
  const offset = (page - 1) * 20;

  const pokemonList: AxiosResponse<IListPokemon> = await axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon',
    params: {
      offset,
    },
  });

  return pokemonList.data;
};
