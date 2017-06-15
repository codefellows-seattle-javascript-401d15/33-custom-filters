'use strict';

// require('./scss')

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<',
  },
};
