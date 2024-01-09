

export interface AppTypeInitialState{
    isLoading:boolean;
    toasts:string[];
    userInfo:undefined | {email:string};
    currentPokemonTab:string;
    
};
export interface currentPokemonType {
    id: number;
    name: string;
    types: pokemonTypeInterface[];
    image: string;
    stats: pokemonStatsType[];
    encounters: string[];
    evolutionLevel: number;
    evolution: { level: number; pokemon: { name: string; url: string } }[];
    pokemonAbilities: { abilities: string[]; moves: string[] };
  }
export interface PokemonTypeInitialState{
    currentPokemon: currentPokemonType|undefined;
    allPokemon:undefined | genericPokemonType[];
    randomPokemons:undefined | generatedPokemonType[];
    compareQueue:generatedPokemonType[];
    userPokemons:userPokemonsType[];
   
};

export  interface genericPokemonType{
    name:string;
    url:string;
}
export interface generatedPokemonType{
    name:string;
    id:number;
    image:string;
    types:pokemonTypeInterface[]
}

export interface pokemonTypeInterface{
   [key:string]:{
    image:string;
    resistance:string[];
    strength:string[];
    weakness:string[];
    vulnerable:string[];
   } ;
}
export interface userPokemonsType extends generatedPokemonType{
    firebaseId?:string;
}
export type pokemonStatType=
  
    | "vulnerable"
    | "weakness"
    | "strength"
    | "resistance";
// Action Types
export interface pokemonStatsType{
    name:string;
    value:string;
}
