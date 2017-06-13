'use strict'

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: [
    '$log',
    '$rootScope',
    'galleryService',
    function($log, $rootScope, galleryService){
      $log.debug('Gallery item in Controller')

      this.showEditGallery = false
    }],
  bindings: {
    gallery: '<',
  }
}
