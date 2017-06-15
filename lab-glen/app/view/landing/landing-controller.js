'use strict';

module.exports = [
  '$log',
  '$location',


  function($log, $location) {
    $log.debug('LandingContoller');

    let url = $location.url();

    this.showSignup = url === '/join#signup' || url === '/join';
  },
];
