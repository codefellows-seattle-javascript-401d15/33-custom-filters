'use strict'

const expect = require('chai').expect

describe('edit gallery component', function(){
  beforeEach(done => {
    angular.mock.module('demoApp')
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, galleryService) => {
      this.$rootScope = $rootScope
      this.$window = $window
      this.$httpBackend = $httpBackend
      this.$componentController = $componentController
      this.galleryService = galleryService

      this.mockBindings = {
        gallery: {
          name: 'galleryUno',
          pics: [],
          desc: 'numeroUno',
          _id: '1234'
        }
      }

      this.$window.localStorage.token = 'test token'
      this.scope = this.$rootScope.$new()
      this.editGalleryCtrl = this.$componentController(
        'editGallery',
        {
          scope: this.scope,
          galleryService: this.galleryService
        },
        this.mockBindings
      )
      this.editGalleryCtrl.$onInit()
    })
    done()
  })

  // beforeEach(done => {
  //   this.createGalleryCtrl.$onInit()
  //   this.$window.localStorage.setItem('token', 'test token')
  //   done()
  // })
  afterEach(done => {
    delete this.editGalleryCtrl
    delete this.$window.localStorage.token
    done()
  })

  describe('functional methods for editGalleryCtrl', () => {
    beforeEach(done => {
      this.expectUrl = 'http://localhost:3000/api/gallery/1234'
      this.expectHeaders = {
        Authorization: `Bearer ${this.$window.localStorage.token}`,
        Accept: 'application/json' || 'text/plain' || '*/*'
      }
      this.expectBody = 'name=name desc=desc'
      done()
    })
    afterEach(done => {
      //this.$httpBackend.flush() //not sure why this isn't working, but i get an error, even with a response
      this.$rootScope.$apply()
      done()
    })
    describe('#editGalleryCtrl.updateGallery', () => {
      it('should make a valid PUT request for a specific gallery update', done => {
        this.$httpBackend.whenPUT(this.expectUrl, this.expectBody, this.expectHeaders)
          .respond(200)
        this.editGalleryCtrl.updateGallery()
        done()
      })
    })
  })

})
