'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<',
  },
  controller: [
    '$log',
    'picService',
    function($log, picService) {
      this.$onInit = () => {

        $log.debug('thumbnail Controller');

        this.deletePic = function() {
          picService.deletePic(this.gallery, this.pic._id);
        };
      };
    },
  ],
};
