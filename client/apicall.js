angular.module('pokedex')
  .service('pokeApi', function($http) {
    this.search = function(callback) {

      var pokemon = JSON.parse(localStorage.getItem('pokeData'))
      if(pokemon) {
        console.log(pokemon)
        return callback(pokemon);
      }
      //$httpProvider.defaults.headers.get = { 'Access-Control-Allow-Origin' : '*' }
      $http({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
        dataType: 'jsonp'
      })
        .then(({data}) => {
          localStorage.setItem('pokeData', JSON.stringify(data.results))
          callback(data.results);
        })
        .catch(function({data}) {

            console.error(data.error);

        });
    };
  });