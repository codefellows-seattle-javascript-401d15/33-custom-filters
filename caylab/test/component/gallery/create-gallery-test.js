'use strict'

const expect = require('chai').expect

describe('create gallery component', function(){
  beforeEach(done => {
    angular.mock.module('demoApp')
    angular.mock.inject(($rootScope, $window, $componentController, $httpBackend) => {
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.createGalleryCtrl = $componentController('createGallery')
      done()
    })
  })

  beforeEach(done => {
    this.createGalleryCtrl.$onInit()
    this.$window.localStorage.setItem('token', 'test token')//this tests the component and the functionality of the service
    done()
  })

  afterEach(done => {
    this.$window.localStorage.removeItem('token')
    this.$httpBackend.flush()
    this.$rootScope.$apply()
    done()
  })

  describe('#createGalleryCtrl.createGallery()', () => {
    it('should make a valid POST request for all galleries', done => {
      let expectUrl = 'http://localhost:3000/api/gallery'
      let expectHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`
      }
      let expectGallery = {
        name: 'gallery one',
        desc: 'description one'
      }

      this.$httpBackend.expectPOST(expectUrl, expectGallery, expectHeaders)
        .respond(200, expectGallery)//when we make a post request, it'll generate a gallery, and return a 200, and the gallery object back
      this.createGalleryCtrl.gallery = expectGallery
      expect(this.createGalleryCtrl.createGallery).to.not.throw()
      done()
    })
  })

})
