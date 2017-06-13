'use strict'

// require('./_create-gallery.scss')

module.exports = {
  template: require('./create-gallery.html'),
  controllerAs: 'createGalleryCtrl',
  controller: [
    '$log',
    'galleryService',
    function($log, galleryService){
      this.$onInit = () => {
        $log.debug('#createGalleryCtrl')
        this.gallery = {}

        return this.createGallery = () => {
          return galleryService.createGallery(this.gallery)//the frontend ui is going to assign a new gallery when we fillout the form on submit
          .then(() => {
            let res = this.gallery
            this.gallery.name = null
            this.gallery.desc = null
            return res
          })
          .catch(err => $log.error(err))
        }
      }
    }
  ]
}
