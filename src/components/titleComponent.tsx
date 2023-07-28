import { Group, Image, Divider, Title, useMantineTheme } from '@mantine/core'
import { ITitle } from '../app/types';
import { FC } from 'react';

type Props = {
  data?: ITitle,
}

export const TitleComponent: FC<Props> = ({ data }) => {
  const theme = useMantineTheme();

  return (
    <>
      <Group position='apart'>
        <Title order={1} color={theme.colors.dark[3]} tt="uppercase">{data?.title}</Title>
        <Image maw={320} src={data?.sprite} />
      </Group>
      <Group position='right' my={20}>
        <Divider size="sm" sx={{ width: "50%" }} />
      </Group>
    </>
  )
}
