import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { listPokemons } from '../../api/pokemon';
import { setPokemonList } from './pokemonSlice';

export const fetchPokemonList =
  (page: number): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    const response = await listPokemons(page);
    dispatch(setPokemonList({ page, list: response.results }));
  };
