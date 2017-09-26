angular.module('pokedex')
  .component('entry', {
    controller: function($scope, $mdDialog) {
      //this.id = this.mon.url.split('/')[6]
      $scope.status = '  ';
      $scope.customFullscreen = false;

      $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: './template1.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
      this.handleClick = (e) => {
        console.log('You clicked me!')
      }

      this.image = () => {
       return this.mon ? `./images/sprites/sprites/pokemon/model/${this.mon.url.split('/')[6]}.png` : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
    }
  },
    bindings: {
      mon: '<'
    },

    template: `
    <div class="pokemon-entry" ng-click="showAdvanced($event)">
      <h1>{{$ctrl.mon.name}}</h1>
      <img class="image" src="{{$ctrl.image()}}"
      <md-button class="md-primary md-raised" ng-click="showAdvanced($event)">
      Expand
    </md-button>
    </div>`
  })

