import { Container, Input, Grid } from '@mantine/core';
import './App.css'
import { IconSearch } from '@tabler/icons-react';
import { TitleComponent } from './components/titleComponent';
import { DescriptionComponent } from './components/descriptionComponent';
import { ProgressComponent } from './components/progressComponent';

function App() {
  const my = "2.1rem"

  return (
    <Container size="xl">
      <Input
        my={my}
        icon={<IconSearch size="1.2rem" stroke={1.4} />}
        placeholder="Search your Pokemon here"
      />

      <TitleComponent />

      <Grid gutter="xl">
        <Grid.Col span={6}>
          <DescriptionComponent />
        </Grid.Col>

        <Grid.Col span={6}>
          <ProgressComponent />
        </Grid.Col>
      </Grid >
    </Container >
  )
}

export default App;
