import { Box, Grid, LoadingOverlay } from "@mantine/core"
import { DescriptionComponent } from "../../components/descriptionComponent"
import { ProgressComponent } from "../../components/progressComponent"
import { TitleComponent } from "../../components/titleComponent"
import { useGetPokemonByNameQuery } from "../pokemonApi"
import { IPokemon } from "../types"
import { FC } from "react"
import { ErrorComponent } from "../../components/errorComponent"

type Props = {
  query?: string
}

export const PokemonScreen: FC<Props> = ({ query }) => {
  const { data, isLoading, isFetching, isError } = useGetPokemonByNameQuery<IPokemon>(query, {
    skip: query === null || query === undefined
  });

  return (
    <Box>
      <LoadingOverlay visible={isFetching || isLoading} overlayBlur={2} />
      {isError ? <ErrorComponent /> :
        (<>
          <TitleComponent data={data?.title} />

          <Grid gutter="xl">
            <Grid.Col span={6}>
              <DescriptionComponent data={data?.description} />
            </Grid.Col>

            <Grid.Col span={6}>
              <ProgressComponent data={data?.progress} />
            </Grid.Col>
          </Grid >
        </>)}
    </Box>
  )
}
