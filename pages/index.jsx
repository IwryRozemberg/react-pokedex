import React from 'react';
// import Link from 'next/link';

// import { Container } from './styles';

export async function getStaticProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/1/')
    .then((responseServer) => {
      if (responseServer.ok) {
        return responseServer.json();
      }

      throw new Error('Erro ao buscar dados do pokemon.');
    })
    .then((responseObject) => responseObject.pokemon_entries);

  return {
    props: { pokemons }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { pokemons } = props;
  return (
    <div>
      Pokedex
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>{pokemon.pokemon_species.name}</li>
        ))}
      </ul>
    </div>
  );
}
