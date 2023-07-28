import { Grid, Text, Progress, useMantineTheme } from '@mantine/core';
import { IPokemonProgress } from '../app/types';
import { FC } from 'react';

type Props = {
  data?: IPokemonProgress,
}

export const ProgressComponent: FC<Props> = ({ data }) => {
  const theme = useMantineTheme();
  const my = "2.1rem"
  const lh = 3.1

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
          <Progress mb={my} mt='1rem' value={data?.hp} label={`${data?.hp}%`} size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={data?.attack} label={`${data?.attack}%`} size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={data?.defense} label={`${data?.defense}%`} size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={data?.spAttack} label={`${data?.spAttack}%`} size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={data?.spDefense} label={`${data?.spDefense}%`} size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={data?.speed} label={`${data?.speed}%`} size="xl" radius="xl" color={theme.colors.yellow[4]} />
        </Grid.Col>
      </Grid>
    </>
  )
}
