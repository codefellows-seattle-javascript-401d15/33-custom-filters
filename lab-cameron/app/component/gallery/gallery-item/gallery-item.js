'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: [
    '$log',
    '$rootScope',
    'galleryService',
    GalleryItemController,
  ],
  bindings: {
    gallery: '<',
  },
};

function GalleryItemController($log, $rootScope, galleryService) {
  this.$onInit = () => {
    $log.debug('#GalleryItemController');

    this.showEditGallery = false;
    this.gallery.daysAgo = new Date() - new Date(this.gallery.created);

    this.deleteGallery = () => {
      galleryService.deleteGallery(this.gallery._id)
      .then(
        res => $log.log(`${res.status}, gallery deleted`),
        err => $log.error(err)
      );
    };
  };
}
