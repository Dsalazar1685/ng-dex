angular.module('pokedex')
.component('entries', {
  bindings: {
    pokemon: '<',
    query: '<'

  },

  template:
  //'<div>{{$ctrl.query}}</div'
    '<entry class="pokemon" mon="mon" ng-repeat="mon in $ctrl.pokemon | filter:$ctrl.query"></entry>'
});