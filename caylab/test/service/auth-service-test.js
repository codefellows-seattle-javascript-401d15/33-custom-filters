// 'use strict'
//
// const expect = require('chai').expect
//
// describe('Auth Service', function(){
//   beforeEach(done => {
//     angular.mock.module('demoApp')//this will be the name of the modulue that we defined in the entry.js
//     angular.mock.inject(($httpBackend, $window, $rootScope, authService) => {
//       //this is where we'll inject any of the dependencies that we'll need inside of the scope of this test, adn make them available with this
//       this.$httpBackend = $httpBackend
//       this.$window = $window
//       this.$rootScope = $rootScope
//       this.authService = authService
//       done()
//     })
//   })
//
//   describe('authservice.getToken', () => {
//     it('should return a token', done => {
//       this.authservice.token = null
//       this.$window.localStorage.setItem('token', 'test token')
//       this.authservice.getToken()
//       .then(token => {
//         expect(token).to.equal(this.$window.localStorage.token)//could also just expect it to equal 'test token'
//       })
//       .catch(err => {
//         expect(err).to.equal(null)
//       })
//       done()
//     })
//   })
//
// })
