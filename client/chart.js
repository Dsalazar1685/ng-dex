angular.module("pokedex")

.component('statsChart', {
  controller: "RadarCtrl",
  template: `
  <canvas id="radar" class="chart chart-radar" chart-data="$ctrl.data.data" chart-labels="$ctrl.data.labels">
  </canvas>`
  // template: `<div>HELLO CHART</div>`

})
.controller("RadarCtrl", function ($scope) {
  console.log('hello radar')
          this.data = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            data: [
            [65, 59, 90, 81, 56, 55]
            ]
        };
//   $scope.labels =["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];

//   $scope.data = [
//     [65, 59, 90, 81, 56, 55]
//   ];
})
                // {
                //     fillColor: "rgba(220,220,220,0.2)",
                //     strokeColor: "rgba(220,220,220,1)",
                //     pointColor: "rgba(220,220,220,1)",
                //     data: [65, 59, 90, 81, 56, 55, 40]
                // },
                // {
                //     fillColor: "rgba(151,187,205,0.2)",
                //     strokeColor: "rgba(151,187,205,1)",
                //     pointColor: "rgba(151,187,205,1)",
                //     data: [28, 48, 40, 19, 96, 27, 100]
                // }

    // <span>HP: {{details.stats[5].base_stat}}</span>
    // <span>Attack: {{details.stats[4].base_stat}}</span>
    // <span>Defense: {{details.stats[3].base_stat}}</span>
    // <span>Special Attack: {{details.stats[2].base_stat}}</span>
    // <span>Special Defense: {{details.stats[1].base_stat}}</span>
    // <span>Speed: {{details.stats[0].base_stat}}</span>