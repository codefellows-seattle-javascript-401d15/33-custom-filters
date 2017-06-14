'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', 'picService', function($log, galleryService , picService) {
    this.$onInit = () => {
      $log.debug('Gallery Item Controller');

      this.showEditGallery = false;

      this.deleteGallery = () => {
        this.gallery.pics.forEach(pic => picService.deletePic(this.gallery, pic._id));
        galleryService.deleteGallery(this.gallery._id);
      };
    };
  }],
  bindings : {
    gallery: '<',
  },
};
