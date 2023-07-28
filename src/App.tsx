import { Container, Input, Grid, LoadingOverlay } from '@mantine/core';
import './App.css'
import { IconSearch } from '@tabler/icons-react';
import { TitleComponent } from './components/titleComponent';
import { DescriptionComponent } from './components/descriptionComponent';
import { ProgressComponent } from './components/progressComponent';
import { useGetPokemonByNameQuery } from './app/pokemonApi';
import { useDebouncedState } from '@mantine/hooks';
import { IPokemon } from './app/types';

function App() {
  const [query, setQuery] = useDebouncedState<string>('bulbasaur', 1000);
  const { data, isLoading, isFetching } = useGetPokemonByNameQuery<IPokemon>(query, { skip: query === null || query === undefined });
  const my = "2.1rem";

  return (
    <Container size="xl">
      <LoadingOverlay visible={isFetching || isLoading} overlayBlur={2} />
      <Input
        my={my}
        onChange={(e) => setQuery(e.target.value)}
        icon={<IconSearch size="1.2rem" stroke={1.4} />}
        placeholder="Search your Pokemon here"
      />

      <TitleComponent data={data?.title} />

      <Grid gutter="xl">
        <Grid.Col span={6}>
          <DescriptionComponent data={data?.description} />
        </Grid.Col>

        <Grid.Col span={6}>
          <ProgressComponent data={data?.progress} />
        </Grid.Col>
      </Grid >
    </Container >
  )
}

export default App;
