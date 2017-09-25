angular.module('pokedex')
.component('entries', {
  bindings: {
    pokemon: '<'

  },

  template:
    '<entry mon="mon" ng-repeat="mon in $ctrl.pokemon"></entry>'
});