angular.module('pokedex')
.component('entries', {
  bindings: {
    pokemon: '<'

  },

  template:
    '<entry class="pokemon" mon="mon" ng-repeat="mon in $ctrl.pokemon"></entry>'
});