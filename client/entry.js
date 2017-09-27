angular.module('pokedex')
  .component('entry', {
    controller: function($scope, $mdDialog, pokeApi) {
      //this.id = this.mon.url.split('/')[6]
      $scope.status = '  ';
      $scope.customFullscreen = false;

      this.apiService = pokeApi
      this.setPokeDetails = (details) => {
        this.details = details;
      }

      // this.makeDetails = (mon) => {
        // console.log(mon)
        // pokeApi.search(mon.url, mon.name, this.setPokeDetails)
      // }

      //this.makeDetails(this.mon)


      $scope.showAdvanced = function(ev, mon) {
         // console.log(mon)
         //this.makeDetails(mon)
        //https://pokeapi.co/api/v2/pokemon/16/
        var url = "https://pokeapi.co/api/v2/pokemon/" + mon.url.split('/')[6] + '/'
        //console.log(url, mon.name)
        pokeApi.search(url, mon.name)
        .then(details => {
          //console.log(details)
          details.statData = details.stats.map(stat => stat.base_stat)
          $mdDialog.show({
         //console.log(details)
            controller: DialogController,
            locals: {mon: mon, details: details},
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
        });

  };

    function DialogController($scope, $mdDialog, mon, details) {
      $scope.mon = mon;
      $scope.details = details
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
      this.handleClick = ($event, pokeApi, mon) => {
        console.log('You clicked me!')
        pokeApi.search(mon.url, mon.name, this.setPokeDetails)
      }

      this.image = () => {
       return this.mon ? `./images/sprites/sprites/pokemon/model/${this.mon.url.split('/')[6]}.png` : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
    }
  },
    bindings: {
      mon: '<'
    },

    template: `
    <div class="pokemon-entry" ng-click="showAdvanced($event, $ctrl.mon)">
      <h1>{{$ctrl.mon.name[0].toUpperCase() + $ctrl.mon.name.substr(1)}}</h1>
      <img class="image" src="{{$ctrl.image()}}"
      <md-button class="md-primary md-raised" ng-click="showAdvanced($event, $ctrl.mon)">
      # {{$ctrl.mon.url.split('/')[6]}}

    </md-button>
    </div>`
  })

  //handleClick($event, pokeApi, $ctrl.mon);
  //, $ctrl.details
  //, details

