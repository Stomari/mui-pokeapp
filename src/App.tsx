import { InputBase, Typography, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPokemonList } from './redux/pokemon/actions';

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  width: '90%',
  borderRadius: theme.shape.borderRadius,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const App = () => {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const { pokemonList } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonList(page));
  }, []);

  return (
    <>
      <div>
        <Typography variant="h1">MUI PokeApp</Typography>
        <SearchContainer>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Type a Pokemon Name" />
          </Search>
        </SearchContainer>
      </div>
    </>
  );
};

export default App;
