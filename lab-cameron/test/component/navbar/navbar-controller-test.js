'use strict';

const expect = require('chai').expect;

describe('Navbar Controller', function() {
  beforeEach(done => {
    angular.mock.module('slugram');
    angular.mock.inject(($rootScope, $window, $location, $componentController, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$location = $location;
      this.$componentController = $componentController;
      this.authService = authService;

      this.$window.localStorage.token = 'test token';
      this.scope = this.$rootScope.$new();
      this.navbarCtrl = this.$componentController(
        'navbar',
        {
          scope: this.scope,
          authService: this.authService,
        }
      );
      this.navbarCtrl.$onInit();
      done();
    });
  });
  afterEach(done => {
    delete this.navbarCtrl;
    done();
  });

  describe('Default properties', () => {
    it('should have a hideButtons property', done => {
      expect(this.navbarCtrl.hideButtons).to.equal(false);
      done();
    });
  });

  describe('Functional methods', () => {
    describe('#navbarCtrl.checkPath', () => {
      it('should be a valid function', done => {
        expect(this.navbarCtrl.checkPath).to.be.instanceOf(Function);
        done();
      });
    });

    describe('#navbarCtrl.logout', () => {
      it('should be a valid function', done => {
        expect(this.navbarCtrl.logout).to.be.instanceOf(Function);
        done();
      });
    });
  });
});
