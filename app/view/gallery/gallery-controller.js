'use strict';

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  '$location',
  'authService',
  'galleryService',
  function($log, $rootScope, $window, $location, authService, galleryService) {
    $log.debug('GalleryController');
    if(!$window.localStorage.token) {
      authService.getToken()
      .then(
        () => $location.url('home'),
        () => $location.url('signup')
      );
    }
    this.$onInit = () => {
      this.title = 'Galleries';

      this.galleries = [];
      this.filter=null;

      this.fetchGalleries = () => {
        return galleryService.fetchGalleries()
        .then(galleries => {
          this.galleries = galleries;
          this.currentGallery = this.galleries[0];
        })
        .catch(err => $log.error(err));
      };

      $rootScope.$on('locationChangeSuccess', this.fetchGalleries);
      $rootScope.$on('refreshGalleries', this.fetchGalleries);
      this.fetchGalleries();
    };
  }];
