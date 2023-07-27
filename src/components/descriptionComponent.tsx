import { Grid, Group, Text, Badge } from '@mantine/core';
import { BadgeFactory } from './badgeFactory';

export const DescriptionComponent = () => {
  const my = "2.1rem"

  return (
    <>
      <Grid gutter={50}>
        <Grid.Col span={3} sx={{ textAlign: "right" }}>
          <Text my={my}>ID</Text>
          <Text my={my}>Height</Text>
          <Text my={my}>Weight</Text>
          <Text my={my}>Abilities</Text>
          <Text my={my}>Type</Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Text my={my}>#1</Text>
          <Text my={my}>0.7 m</Text>
          <Text my={my}>6.9 kg</Text>
          <Group>
            <Badge color="green" size="lg" radius="md">Badge</Badge>
            <Badge color="green" size="lg" radius="md">Badge</Badge>
          </Group>
          <Group>
            <BadgeFactory type='grass' my={my} />
            <BadgeFactory type='poison' my={my} />
          </Group>
        </Grid.Col>
      </Grid>
    </>
  )
}
