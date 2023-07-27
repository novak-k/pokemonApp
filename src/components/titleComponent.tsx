import { Group, Image, Divider, Title, useMantineTheme } from '@mantine/core'

export const TitleComponent = () => {
  const theme = useMantineTheme();

  return (
    <>
      <Group position='apart'>
        <Title order={1} color={theme.colors.dark[3]}>Bulbasaur</Title>
        <Image maw={320} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      </Group>
      <Group position='right' my={20}>
        <Divider size="sm" sx={{ width: "50%" }} />
      </Group>
    </>
  )
}
