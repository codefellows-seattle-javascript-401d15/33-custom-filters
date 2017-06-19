'use strict';

module.exports = ['$log', function($log) {
  $log.debug('HomeController');
  this.$onInit = () => {
    this.title = 'Welcome to the Home Page';
  };
}];
