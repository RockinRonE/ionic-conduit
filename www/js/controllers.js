angular.module('ionic-conduit.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal; 
    });

    $scope.closeLogin = function() {
        $scope.modal.hide(); 
    };

    $scope.login = function() {
        $scope.modal.show(); 
    }

    // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}) 

.controller('HomeCtrl', function($scope) {
    $scope.tags = [
        { title: 'angular', id: 1 },
        { title: 'es6', id: 2 },
        { title: 'javascript', id: 3 },
        { title: 'thinkster', id: 4 },
        { title: 'eric', id: 5 }
    ];
})



