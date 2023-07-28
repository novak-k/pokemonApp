export interface IPokemon { 
  title: ITitle,
  description: IPokemonDescription,
  progress: IPokemonProgress,
}

export interface ITitle { 
  title: string,
  sprite: string,
}

export interface IPokemonDescription { 
  id: number,
  height: number,
  weight: number,
  abilities: string[],
  type: string[],
}

export interface IPokemonProgress { 
  hp: number,
  attack: number,
  defense: number,
  spAttack: number,
  spDefense: number,
  speed: number,
}
