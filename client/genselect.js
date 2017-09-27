angular.module('pokedex')
.component('generations', {
  controller: function(){
    this.urls = {
      Kanto: 'https://pokeapi.co/api/v2/pokedex/2',
      Johto: 'https://pokeapi.co/api/v2/pokedex/3',
      Hoenn: 'https://pokeapi.co/api/v2/pokedex/4',
      Sinnoh: 'https://pokeapi.co/api/v2/pokedex/6',
      Unova: 'https://pokeapi.co/api/v2/pokedex/8',
      Kalos1: 'https://pokeapi.co/api/v2/pokedex/12',
      Kalos2: 'https://pokeapi.co/api/v2/pokedex/13',
      Kalos3: 'https://pokeapi.co/api/v2/pokedex/14'
    }
    this.handleChange = function($event) {
      console.log(this.region)
      this.setstorage(this.region)
      this.service.search(this.urls[this.region], this.region)
      .then(this.change)

    }
  },

  bindings: {
    pokemon: '<',
    change: '<',
    storage: '<',
     setstorage: '<',
     service: '<'


  },

  template:
  //'<div>{{$ctrl.query}}</div'
    `<select ng-model="$ctrl.region" ng-change="$ctrl.handleChange($event)">
       <option id="Kanto">Kanto</option>
       <option id="Johto">Johto</option>
       <option id="Hoenn">Hoenn</option>
       <option id="Sinnoh">Sinnoh</option>
       <option id="Unova">Unova</option>
       <option id="Kalos1">Kalos1</option>
       <option id="Kalos2">Kalos2</option>
       <option id="Kalos3">Kalos3</option>
    </select>`
});