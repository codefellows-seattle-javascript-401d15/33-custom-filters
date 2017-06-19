'use strict'

module.exports = {
  template: require('./edit-gallery.html'),
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<'
  },
  controller: [
    '$log',
    'galleryService',
    function($log, galleryService){
      this.$onInit = () => {
        $log.debug('edit gallery controller')

        this.updateGallery = () => {
          galleryService.updateGallery(this.gallery._id, this.gallery)
          .then(
            () => $log.log('successful gallery update'),
            err => $log.error(err)
          )
        }

        this.deleteGallery = () => {
          galleryService.deleteGallery(this.gallery._id, this.gallery)
          .then(
            () => $log.log('successful gallery deletion'),
            err => $log.error(err)
          )
        }

      }
    }
  ]
}
