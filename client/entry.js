angular.module('pokedex')
  .component('entry', {
    controller: function() {
      //this.id = this.mon.url.split('/')[6]
      this.image = () => {
       return this.mon ? `../images/sprites/sprites/pokemon/model/${this.mon.url.split('/')[6]}.png` : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
    }
  },
    bindings: {
      mon: '<'
    },

    template: `
    <div>
      <h1>{{$ctrl.mon.name}}</h1>
      <img src="{{$ctrl.image()}}"
    </div>`
  })

