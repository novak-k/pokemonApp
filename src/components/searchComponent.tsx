import { Select } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { useSearchPokemonsQuery } from "../app/pokemonApi";
import { FC } from "react";

type Props = {
  onSearchChange: (value: string) => unknown
}

export const SearchPokemon: FC<Props> = ({ onSearchChange }) => {
  const { data: searchResult } = useSearchPokemonsQuery();

  return (
    <Select
      mt={30}
      searchable
      data={searchResult || []}
      placeholder="Search your Pokemon here"
      nothingFound="No options"
      maxDropdownHeight={300}
      icon={<IconSearch size="1.2rem" stroke={1.4} />}
      onChange={(val) => onSearchChange(val as string)}
    />
  )
}
