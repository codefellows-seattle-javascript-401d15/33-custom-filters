'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', '$rootScope', 'galleryService', function($log, galleryService) {
    this.onInit = () => {
      $log.debug('Gallery Item Controller');

      this.showEditGallery = false;

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id)
        .then(() => {
          $log.log('delete success');
        });
      };
    };
  }],
  bindings: {
    gallery: '<',
  },
};
