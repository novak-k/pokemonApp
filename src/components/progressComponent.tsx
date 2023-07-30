import { Grid, Text, Progress, useMantineTheme } from '@mantine/core';
import { IPokemonProgress } from '../app/types';
import { FC } from 'react';

type Props = {
  data?: IPokemonProgress,
}

export const ProgressComponent: FC<Props> = ({ data }) => {
  const theme = useMantineTheme();
  const my = "2.1rem";
  const lh = 3.1;

  return (
    <>
      <Grid>
        <Grid.Col span={2} sx={{ textAlign: "right" }}>
          <Text lh={lh}>HP</Text>
          <Text lh={lh}>Attack</Text>
          <Text lh={lh}>Defense</Text>
          <Text lh={lh}>Sp. Attack</Text>
          <Text lh={lh}>Sp. Defense</Text>
          <Text lh={lh}>Speed</Text>
        </Grid.Col>
        <Grid.Col span={10}>
          <Progress mb={my} mt='1rem' value={data ? data.hp : 0} label={`${data ? data.hp : ""}%`}
            size="xl" radius="xl" color={theme.colors.yellow[4]} animate={true} data-testid="progressHp"
          />
          <Progress mb={my} value={data ? data.attack : 0} label={`${data ? data.attack : ""}%`}
            size="xl" radius="xl" color={theme.colors.yellow[4]} animate={true} data-testid="progressAttack"
          />
          <Progress mb={my} value={data ? data.defense : 0} label={`${data ? data.defense : ""}%`}
            size="xl" radius="xl" color={theme.colors.yellow[4]} animate={true} data-testid="progressDefense"
          />
          <Progress mb={my} value={data ? data.spAttack : 0} label={`${data ? data.spAttack : ""}%`}
            size="xl" radius="xl" color={theme.colors.yellow[4]} animate={true} data-testid="progressSpAttack"
          />
          <Progress mb={my} value={data ? data.spDefense : 0} label={`${data ? data.spDefense : ""}%`}
            size="xl" radius="xl" color={theme.colors.yellow[4]} animate={true} data-testid="progressSpDefense"
          />
          <Progress mb={my} value={data ? data.speed : 0} label={`${data ? data.speed : ""}%`}
            size="xl" radius="xl" color={theme.colors.yellow[4]} animate={true} data-testid="progressSpeed" />
        </Grid.Col>
      </Grid>
    </>
  )
}
