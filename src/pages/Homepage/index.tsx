import React, { useState, FormEvent } from 'react';

import { Title, SearchBar, Card, Types, DivLeft, DivRight } from './style';
import { Colors } from './colors';

import api from '../../services/api';

interface IPokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: IAbilities[];
  types: ITypes[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    };
  };
};

interface ITypes {
  type: {
    name: string;
  }
};

interface IAbilities {
  ability: {
    name: string;
  }
};

const Homepage: React.FC = () => {
  const [newPokemon, setNewPokemon] = useState('');
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  async function handleAddPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<IPokemon>(`${newPokemon.toLowerCase()}`);
    const pokemon = response.data;

    setPokemons([pokemon]);
    setNewPokemon('');
  }

  function setTypeColor(type: ITypes) {
    for (var i = 0; i < Colors.length; i ++) {
      if (type.type.name.toUpperCase() === Colors[i].name) {
        return <div style={{background: Colors[i].color}}>{type.type.name}</div>;
      }
    };
  }

  return (
    <>
      <Title>Explore pokemons no PokeAPI</Title>

      <SearchBar onSubmit={handleAddPokemon}>
        <input
          value={newPokemon}
          onChange={e => setNewPokemon(e.target.value)}
          placeholder="Digite o nome ou numero da pokedex"
        />
        <button type="submit">Buscar</button>
      </SearchBar>

      <Card>
        {pokemons.map(pokemon => (
        <>
          <DivLeft>
            <Types>
              {pokemon.types.map(type => (
                setTypeColor(type)
              ))}
            </Types>

            <img src={pokemon.sprites.other['official-artwork'].front_default}/>
          </DivLeft>

          <DivRight>
            <div>
              <h4>Nome:</h4>
              <p>{pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</p>

              <h4>Peso:</h4>
              <p>{pokemon.weight / 10} kg</p>

              <h4>Altura:</h4>
              <p>{pokemon.height / 10} m</p>
            </div>

            <div>
              <h4>Número Pokedéx:</h4>
              <p># {pokemon.id}</p>

              <h4>Habilidades:</h4>
              <ul>
                {pokemon.abilities.map(ability => (
                  <li>{ability.ability.name[0].toUpperCase() + ability.ability.name.substr(1)}</li>
                ))}
              </ul>
            </div>
          </DivRight>
        </>
        ))}
      </Card>
    </>
  );
}

export default Homepage;
