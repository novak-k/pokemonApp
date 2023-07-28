import { Grid, Group, Text, Badge } from '@mantine/core';
import { BadgeFactory, IBadgeType } from './badgeFactory';
import { FC } from 'react';
import { IPokemonDescription } from '../app/types';

type Props = {
  data?: IPokemonDescription,
}

const makeWeight = (num: number | undefined) => {
  if (!num) return ""
  return `${num / 10}kg ( ${Math.round(num / 10 * 2.2 * 100) / 100}lbs )`
}

const makeHeight = (num: number | undefined) => {
  if (!num) return ""
  const val = num * 3.937
  const r = Math.floor(val)
  const f = Math.round((val - r) * 100)
  return `${num / 10}m ( ${r}"${f}' )`
}

export const DescriptionComponent: FC<Props> = ({ data }) => {
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
          <Text my={my}>{`#${data?.id}`}</Text>
          <Text my={my}>{makeHeight(data?.height)}</Text>
          <Text my={my}>{makeWeight(data?.weight)}</Text>
          <Group>
            {data?.abilities.map(ab => <Badge key={ab} color="green" size="lg" radius="md">{ab}</Badge>)}
          </Group>
          <Group>
            {data?.type.map(t => <BadgeFactory key={t} type={t as IBadgeType} my={my} />)}
          </Group>
        </Grid.Col>
      </Grid>
    </>
  )
}
