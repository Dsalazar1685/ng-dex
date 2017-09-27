angular.module('pokedex')
.component('searchbar', {
  controller: function() {
    this.filterPokemon = () => {
      // console.log('clicked')
      // console.log(this.storage)
      console.log(this.query)
      this.result(this.query)
      // var data = JSON.parse(localStorage.getItem(this.storage))
      // var filtered = data.results.filter((entry) => {
      //   return entry.name.toLowerCase().includes(this.query)
      // })
      // console.log(filtered)
      // this.result(filtered)
    }

  },
  bindings: {
    pokemon: '<',
    result: '<',
    storage: '<'



  },

  template:
    `<div class="search">
    <span>
    <input type="text" ng-model="$ctrl.query" ng-change="$ctrl.filterPokemon(query)">
    <img src="./images/sprites/sprites/items/poke-ball.png">
    </span>

    </div>`

});