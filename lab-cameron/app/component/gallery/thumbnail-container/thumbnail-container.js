'use strict';

// require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<',
  },
  // controller: [ThumbnailContainerController],
};

// function ThumbnailContainerController($log, galleryService) {
//   this.$onInit = () => {
//     $log.debug('Thumbnail Container Controller');
//
//   }
// }
