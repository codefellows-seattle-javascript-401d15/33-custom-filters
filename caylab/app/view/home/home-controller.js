'use strict'

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  'authService',
  'galleryService',
  function($log, $rootScope, $window, authService, galleryService){
    this.$onInit = () => {
      $log.debug('#HomeController()')

      if(!$window.localStorage.token){
        authService.getToken()
        .then(
          () => $location.url('/home'),
          () => $location.url('/signup')
        )
      }

      this.title = 'Welcome to hell'
      this.galleries = []

      this.fetchGalleries = () => {
        return galleryService.fetchGalleries()
        .then(galleries => {
          this.galleries = galleries
          this.currentGallery = this.galleries[0]
        })
        .catch(err => $log.error(err))
      }

      this.logout = function() {
        $log.log('navbarCtrl.logout()')
        this.hideButtons = true
        authService.logout()
        .then(() => {
          $location.url('/')
        })
      }

      $rootScope.$on('locationChangeSuccess', this.fetchGalleries)
      $rootScope.$on('newGalleryCreated', this.fetchGalleries)
      return this.fetchGalleries()
    }
  }
]
