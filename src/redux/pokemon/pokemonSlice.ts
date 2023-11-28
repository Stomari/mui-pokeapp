import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPokemonState {
  pokemonList: {
    [key: number]: any[];
  };
}

const initialState: IPokemonState = {
  pokemonList: {},
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (
      state,
      action: PayloadAction<{ page: number; list: any[] }>
    ) => {
      state.pokemonList[action.payload.page] = action.payload.list;
    },
  },
});

export const { setPokemonList } = pokemonSlice.actions;

export default pokemonSlice.reducer;
