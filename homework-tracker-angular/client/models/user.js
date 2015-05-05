'use strict';

angular.module('homework-tracker')
.factory('User', function($rootScope, $http, nodeUrl){

  function User(){
  }

  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  User.oauth = function(provider){
    return $rootScope.afAuth.$authWithOAuthPopup(provider);
  };

  User.findOrCreate = function(){
    return $http.post(nodeUrl + '/users');
  };

  return User;
});
