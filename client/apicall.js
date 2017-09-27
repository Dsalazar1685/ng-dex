angular.module('pokedex')
  .service('pokeApi', function($http) {
    this.search = function(url, storage, callback) {

      var pokemon = JSON.parse(localStorage.getItem(storage))
      if(pokemon) {
        //console.log(pokemon)
        return Promise.resolve(pokemon);
      }
      //$httpProvider.defaults.headers.get = { 'Access-Control-Allow-Origin' : '*' }
      return $http({
        method: 'GET',
        url: url,
        dataType: 'jsonp'
      })
        .then(({data}) => {

          localStorage.setItem(storage, JSON.stringify(data))
          return data;
        })
        .catch(function({data}) {

            console.log('An error occurred');

        });
    };
  });