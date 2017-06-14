'use strict';

const expect = require('chai').expect;

describe('Home Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $controller) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$controller = $controller;

      this.scope = this.$rootScope.$new();

      this.$window.localStorage.token = 'token';
      this.homeCtrl = this.$controller(
        'HomeController',
        {
          scope: this.scope,
        }
      );
      this.homeCtrl.$onInit();
      done();
    });
  });

  afterEach(done => {
    delete this.homeCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {
    it('should have a title', done => {
      expect(this.homeCtrl.title).to.equal('Welcome to the Home Page');
      done();
    });
  });
});
