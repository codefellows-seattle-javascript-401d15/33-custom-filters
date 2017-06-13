'use strict';

module.exports = {
  template: require('./edit-gallery.html'),
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<',
  },
  controller: [
    '$log',
    'galleryService',
    EditGalleryController,
  ],
};

function EditGalleryController($log, galleryService) {
  this.$onInit = () => {
    $log.debug('#EditGalleryController');
    this.updateGallery = () => {
      galleryService.updateGallery(this.gallery._id, this.gallery)
      .then(
        () => $log.log('updated successfully'),
        err => $log.error(err)
      );
    };
  };
}
