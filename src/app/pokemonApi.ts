import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPokemon } from './types'

type PokemonResponse = {
  name: string,
  sprites: Sprites,
  id: number,
  height: number,
  weight: number,
  abilities: Ability[],
  types: Type[],
  stats: StatsArr[]
}

type Sprites = {
  other: SpritesOther,
}

type SpritesOther = {
  'official-artwork': FDefault,
}

type FDefault = {
  'front_default': string,
}

type Ability = {
  ability: NameUrlTuple,
}

type Type = {
  type: NameUrlTuple,
}

type NameUrlTuple = {
  name: string, 
  url: string,
}

type StatsArr = {
  base_stat: number,
  stat: StatObj,
}

type StatObj = {
  name: string,
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: PokemonResponse) => {
        console.log(response);
        
        const model: IPokemon = {
          title: {
            title: response.name,
            sprite: response.sprites.other['official-artwork'].front_default
          },
          description: {
            id: response.id,
            height: response.height,
            weight: response.weight,
            abilities: response.abilities.map(a => a.ability.name),
            type: response.types.map(t => t.type.name),
          },
          progress: {
            hp: response.stats.find((el) => (el.stat.name === 'hp'))?.base_stat || 0,
            attack: response.stats.find((el) => (el.stat.name === 'attack'))?.base_stat || 0,
            defense: response.stats.find((el) => (el.stat.name === 'defense'))?.base_stat || 0,
            spAttack: response.stats.find((el) => (el.stat.name === 'special-attack'))?.base_stat || 0,
            spDefense: response.stats.find((el) => (el.stat.name === 'special-defense'))?.base_stat || 0,
            speed: response.stats.find((el) => (el.stat.name === 'speed'))?.base_stat || 0,
          }
        }
        return model;
      }
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
