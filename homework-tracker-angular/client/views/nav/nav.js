'use strict';

angular.module('homework-tracker')
.controller('NavCtrl', function($rootScope, $scope, $state, User, $http){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $rootScope.displayName = getDisplayName(data);
      $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;
      User.findOrCreate()
        .then(function(){
          $state.go('home');
        });
    }else{
      $rootScope.activeUser = null;
      $rootScope.displayName = null;
      $http.defaults.headers.common.Authorization = null;
    }

    $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };

  function getDisplayName(data){
    switch(data.provider){
      case 'password':
        return data.password.email.substring(0, data.password.email.indexOf('@'));
      case 'github':
        return data.github.displayName;
    }

  }

  });
