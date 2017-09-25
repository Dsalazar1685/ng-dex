angular.module('pokedex')
  .controller( function() {
    this.image = () => {
      return this.mon ? `../images/sprites/sprites/pokemon/model/${this.mon.id}.png` : '';
    }
  })
  .component('entry', {
    bindings: {
      mon: '<'
    },

    template: `
    <div>
      <h1>{{$ctrl.mon.name}}</h1>
      <ng-src="{{$ctrl.image()}}"
    </div>`
  })