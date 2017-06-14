'use strict';

const expect = require('chai').expect;

describe('Gallery Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $controller, galleryService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$controller = $controller;
      this.galleryService = galleryService;

      this.scope = this.$rootScope.$new();
      this.$window.localStorage.token = 'token';
      this.galleryCtrl = this.$controller(
        'GalleryController',
        {
          scope: this.scope,
          galleryService: this.galleryService,
        }
      );
      this.galleryCtrl.$onInit();
      done();
    });
  });

  afterEach(done => {
    delete this.galleryCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {
    it('should have a galleries array', done => {
      expect(this.galleryCtrl.galleries).to.be.instanceOf(Array);
      done();
    });

    it('should have a title', done => {
      expect(this.galleryCtrl.title).to.equal('This is where the pictures go');
      done();
    });

    it('should have a function called fetchGalleries', done => {
      expect(this.galleryCtrl.fetchGalleries).to.be.instanceOf(Function);
      done();
    });
  });

  describe('Method Functionality', () => {
    describe('#fetchGalleries', () => {
      beforeEach(done => {
        this.expectUrl = 'http://localhost:3000/api/gallery';
        this.expectHeaders = {
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.$window.localStorage.token}`,
        };
        this.expectGalleries = [
          {name: 'one', desc: 'one', _id: '1111'},
          {name: 'two', desc: 'two', _id: '2222'},
        ];
        done();
      });
      afterEach(done => {
        this.$httpBackend.flush();
        this.$rootScope.$apply();
        done();
      });

      it('should make a valid GET request', done => {
        this.$httpBackend.expectGET(this.expectUrl, this.expectHeaders)
          .respond(200, this.expectGalleries);
        done();
      });
    });
  });
});
