// 'use strict'
//
// const expect = require('chai').expect
//
// describe('Home Controller', function(){
//   beforeEach(done => {
//     angular.mock.module('demoApp')
//     angular.mock.inject(($rootScope, $window, $httpBackend, $controller, authService) => {
//       this.$rootScope = $rootscope
//       this.$window = $window
//       this.$httpBackend = $httpBackend
//       this.$controller = $controller
//       this.authService = authService
//
//       this.homeCtrl = this.$controller('HomeController') //our entry.js is going to pascalcase the filename of the controller
//       this.homeCtrl.$onInit()
//       done()
//     })
//   })
//   afterEach(done => {
//     delete this.homeCtrl
//     delete this.$window.localStorage.token
//     done()
//   })
//
//   describe('default properties', () => {
//     it('should pass', done => {
//       expect(this.homeCtrl.galleries).to.be.instanceOf(Array)
//       console.log(this.homeCtrl)
//       done()
//     })
//     it('should have a fetchGalleries method', done => {
//       expect(this.homeCtrl.fetchGalleries).to.be.instanceOf(Function)
//     })
//   })
//
//   describe('Functional methods', () => {
//     describe('#HomeController.fetchGalleries', () => {
//       let expectUrl = 'http://localhost:3000/api/gallery'
//       let expectHeaders = {
//         Accept: 'application/json',
//         Authorization: `Bearer ${this.$window.localStorage.token}`
//       }//use $httpBackend anytime we make an ajax request
//       afterEach(done => {
//         this.$httpBackend.flush()
//         this.$rootScope.apply()
//       })
//       it('should have a response of 200', done => {
//         this.$httpBackend.expectGET(this.expectUrl, this.expectHeaders)
//         .respond(200)
//         done()
//       })
//     })
//   })
//   it('should return an array of galleries', done => {
//     this.$httpBackend.whenGET(this.expectUrl, this.expectHeaders)
//       .respond(200, this.expectGalleries)
//     done()
//   })
// })
