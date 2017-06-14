'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  '$window',
  function($q, $log, $http, $window) {
    $log.debug('authService');

    let service = {};
    let token = null;

    function setToken(_token) {
      $log.debug('authService.setToken');

      if(!_token) return $q.reject(new Error('No token'));

      $window.localStorage.setItem('token', _token);
      token = _token;

      return $q.resolve(token);
    }

    service.getToken = function() {
      $log.debug('authService.getToken');

      if(token) return $q.resolve(token);

      token = $window.localStorage.getItem('token');
      if(token) return $q.resolve(token);

      return $q.reject(new Error('Token not found'));
    };

    service.logout = function() {
      $log.debug('authService.logout');

      $window.localStorage.removeItem('token');
      token = null;

      return $q.resolve();
    };

    service.signup = function(user) {
      $log.debug('authService.signup');
      $log.log(user);

      let url = `${__API_URL__}/api/signup`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      };

      return $http.post(url, user, config)
      .then(res => {
        $log.log('success', res.data);
        return setToken(res.data);
      })
      .catch(err => {
        $log.error('failure', err);
        return $q.reject(err);
      });
    };

    service.login = function(user) {
      $log.debug('authService.login');

      let url = `${__API_URL__}/api/login`;
      let base64 = $window.btoa(`${user.username}:${user.password}`);
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${base64}`,
        },
      };

      return $http.get(url, config)
      .then(res => {
        $log.log('success', res.data);
        return setToken(res.data);
      })
      .catch(err => {
        $log.error('failure', err.message);
        return $q.reject(err);
      });
    };

    return service;
  },
];


// {
//   "data":"BadRequestError",
//   "status":400,
//   "config":{
//     "method":"POST",
//     "transformRequest":[null],
//     "transformResponse":[null],
//     "jsonpCallbackParam":"callback",
//     "headers":{
//       "Accept":"application/json",
//       "Content-Type":"application/json"
//     },
//     "url":"http://localhost:3000/api/signup",
//     "data":{
//       "username":"benny",
//       "email":"ben@ben.ben",
//       "password":"1234"
//     }
//   },
//   "statusText":"Bad Request"
// }
