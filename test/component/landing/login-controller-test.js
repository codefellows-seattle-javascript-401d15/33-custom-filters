'use strict';

const expect = require('chai').expect;

describe('Login Component Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.authService = authService;

      this.scope = this.$rootScope.$new();
      this.loginCtrl = this.$componentController(
        'login',
        {
          scope: this.scope,
          authService: this.authService,
        }
      );

      this.loginCtrl.$onInit();
      done();
    });
  });

  afterEach(done => {
    delete this.loginCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Method Functionality', () => {
    beforeEach(done => {
      this.expectUrl = 'http://localhost:3000/api/login';
      this.expectConfig = {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${this.$window.btoa('benny:12345678')}`,
        },
      };
      done();
    });

    afterEach(done => {
      this.$rootScope.$apply();
      done();
    });

    describe('#login', () => {
      it('should accept a valid GET request', done => {
        this.$httpBackend.expectGET(this.expectUrl, this.expectConfig)
        .respond(200);
        done();
      });
    });
  });
});
