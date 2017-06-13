'use strict';

const expect = require('chai').expect;

describe('Landing Controller', function() {
  beforeEach(done => {
    angular.mock.module('slugram');
    angular.mock.inject(($rootScope, $location, $httpBackend, $controller) => {
      this.$rootScope = $rootScope;
      this.$location = $location;
      this.$controller = $controller;
      this.$httpBackend = $httpBackend;

      this.landingCtrl = this.$controller(
        'LandingController',
        this.$location.url('/join')
      );
      this.landingCtrl.$onInit();
      done();
    });
  });
  afterEach(done => {
    delete this.landingCtrl;
    done();
  });

  describe('Default properties', () => {
    it('should have a showSignup property equal to true', done => {
      expect(this.landingCtrl.showSignup).to.equal(true);
      done();
    });
    it('should have a showSignup property equal to false', done => {
      this.landingCtrl.$onInit(this.$location.url('/home'));
      expect(this.landingCtrl.showSignup).to.equal(false);
      done();
    });
  });
});
