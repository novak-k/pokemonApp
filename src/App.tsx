import { Container } from '@mantine/core';
import { useState } from 'react';
import { SearchPokemon } from './components/searchComponent';
import { PokemonScreen } from './app/screen/PokemonScreen';

import './App.css';

function App() {
  const [query, setQuery] = useState<string>('bulbasaur');

  return (
    <Container size="xl">
      <SearchPokemon onSearchChange={setQuery} />
      <PokemonScreen query={query} />
    </Container >
  )
}

export default App;
