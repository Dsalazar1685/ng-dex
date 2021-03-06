// var pokeData =
// {
//   "count": 811,
//   "previous": null,
//   "results": [
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/1/",
//       "name": "bulbasaur"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/2/",
//       "name": "ivysaur"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/3/",
//       "name": "venusaur"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/4/",
//       "name": "charmander"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/5/",
//       "name": "charmeleon"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/6/",
//       "name": "charizard"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/7/",
//       "name": "squirtle"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/8/",
//       "name": "wartortle"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/9/",
//       "name": "blastoise"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/10/",
//       "name": "caterpie"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/11/",
//       "name": "metapod"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/12/",
//       "name": "butterfree"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/13/",
//       "name": "weedle"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/14/",
//       "name": "kakuna"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/15/",
//       "name": "beedrill"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/16/",
//       "name": "pidgey"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/17/",
//       "name": "pidgeotto"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/18/",
//       "name": "pidgeot"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/19/",
//       "name": "rattata"
//     },
//     {
//       "url": "https://pokeapi.co/api/v2/pokemon/20/",
//       "name": "raticate"
//     }
//   ],
//   "next": "https://pokeapi.co/api/v2/pokemon/?offset=20"
// }

angular.module('pokedex', ['ngMaterial', 'chart.js'])
  .config(function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
  })
.component('app', {
  controller: function(pokeApi) {
    this.apiService = pokeApi
    this.getPokemon = (pokemon) => {
      this.pokemon = pokemon.pokemon_entries.map((entry) => ({url: entry.pokemon_species.url, name: entry.pokemon_species.name}))
    }
    //this.pokemon = pokeData.results;
    this.storage = 'Kanto'
    this.setStorage = (storage) => {
      this.storage = storage
    }
    this.query;
    this.setQuery = (query) => {
      this.query = query;
    }
    pokeApi.search('https://pokeapi.co/api/v2/pokedex/2', 'Kanto')
    .then(this.getPokemon)
  },
  template: `<div class="header"><h1 class='title'>ng-dex</h1></div>
  <div class="nav"><searchbar result="$ctrl.setQuery" storage="$ctrl.storage"></searchbar>
  <generations change="$ctrl.getPokemon" service="$ctrl.apiService" storage="$ctrl.storage" setstorage="$ctrl.setStorage"></generations></div>
  <entries class="pokemon-container" pokemon="$ctrl.pokemon" query="$ctrl.query"></entries>`
})