import React, { useState, FormEvent } from 'react';

import { Align, Title, Form, Card, Types, DivImg, DivInfo, DivStats, Error } from './style';
import { TypesColor } from './types';
import { StatsColor } from './stats';

import api from '../../services/api';

interface IPokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: IAbilities[];
  types: ITypes[];
  stats: IStats[];
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

interface IStats {
  base_stat: number;
  stat: {
    name: string;
  }
};

const Homepage: React.FC = () => {
  const [newPokemon, setNewPokemon] = useState('');
  const [inputError, setInputError] = useState('');
  const [pokemon, setPokemon] = useState<IPokemon>();

  async function handleAddPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newPokemon) {
      setInputError("Digite um nome/id para pesquisar!");
      return;
    }

    try {
      const response = await api.get<IPokemon>(`${newPokemon.toLowerCase()}`);
      const pokemon = response.data;

      setPokemon(pokemon);
      setNewPokemon('');
      setInputError('');
    } catch(err) {
      setInputError("Pokémon inexistente!")
    }
  }

  function setTypeColor(type: ITypes) {
    for (var i = 0; i < TypesColor.length; i ++) {
      if (type.type.name.toUpperCase() === TypesColor[i].name) {
        return <div style={{background: TypesColor[i].color}}>{type.type.name}</div>;
      }
    };
  }

  function setStats(stats: IStats) {
    for (var i = 0; i < StatsColor.length; i ++) {
      if (stats.stat.name === StatsColor[i].name) {
        const color = StatsColor[i].color;
        return <div style={{width: stats.base_stat * 1.05, background: color}}></div>
      }
    }
  }

  return (
    <>
      <Align>
        <Title>Explore pokemons no PokeAPI</Title>

        <Form hasError={!!inputError} onSubmit={handleAddPokemon}>
          <input
            value={newPokemon}
            onChange={e => setNewPokemon(e.target.value)}
            placeholder="Digite o nome ou numero da pokedex"
          />
          <button type="submit">Buscar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}
      </Align>

      {pokemon?
        <Card>
          <>
            <DivImg>
              <Types>
                {pokemon.types.map(type => (
                  setTypeColor(type)
                ))}
              </Types>

              <img src={pokemon.sprites.other['official-artwork'].front_default}/>
            </DivImg>

            <DivInfo>
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
            </DivInfo>

            <DivStats>
              <ul>
                <li>
                  <p>HP: </p>
                  <p>{pokemon.stats[0].base_stat}</p>
                  {setStats(pokemon.stats[0])}
                </li>
                <li>
                  <p>Attack: </p>
                  <p>{pokemon.stats[1].base_stat}</p>
                  {setStats(pokemon.stats[1])}
                </li>
                <li>
                  <p>Defense: </p>
                  <p>{pokemon.stats[2].base_stat}</p>
                  {setStats(pokemon.stats[2])}
                </li>
                <li>
                  <p>Sp. Atk: </p>
                  <p>{pokemon.stats[3].base_stat}</p>
                  {setStats(pokemon.stats[3])}
                </li>
                <li>
                  <p>Sp. Def: </p>
                  <p>{pokemon.stats[4].base_stat}</p>
                  {setStats(pokemon.stats[4])}
                </li>
                <li>
                  <p>Speed: </p>
                  <p>{pokemon.stats[5].base_stat}</p>
                  {setStats(pokemon.stats[5])}
                </li>
              </ul>
            </DivStats>
          </>
        </Card>
      : ''}
    </>
  );
}

export default Homepage;
