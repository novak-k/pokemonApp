import { Grid, Text, Progress, useMantineTheme } from '@mantine/core';

export const ProgressComponent = () => {
  const theme = useMantineTheme();
  const my = "2.1rem"
  const lh = 3.1

  return (
    <>
      <Grid>
        <Grid.Col span={2} sx={{ textAlign: "right" }}>
          <Text lh={lh}>HP</Text>
          <Text lh={lh}>Attack</Text>
          <Text lh={lh}>Defence</Text>
          <Text lh={lh}>Sp. Attack</Text>
          <Text lh={lh}>Sp. Defence</Text>
          <Text lh={lh}>Speed</Text>
        </Grid.Col>
        <Grid.Col span={10}>
          <Progress mb={my} mt='1rem' value={45} label="45%" size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={49} label="49%" size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={45} label="45%" size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={65} label="65%" size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={65} label="65%" size="xl" radius="xl" color={theme.colors.yellow[4]} />
          <Progress mb={my} value={45} label="45%" size="xl" radius="xl" color={theme.colors.yellow[4]} />
        </Grid.Col>
      </Grid>
    </>
  )
}
