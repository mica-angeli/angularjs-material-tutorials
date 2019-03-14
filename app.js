angular.module('MyApp', ['ngMaterial'])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red')
  })
  // .run(function(){
  //   console.log('MyApp is ready!')
  // })
// .controller('AppCtrl', function($scope) {
//   $scope.title1 = 'Button';
//   $scope.title4 = 'Warn';
//   $scope.isDisabled = true;
//   $scope.googleUrl = 'http://google.com';
// });
