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
    ThumbnailController,
  ],
};

function ThumbnailController($log, picService) {
  this.$onInit = () => {
    $log.debug('Thumbnail Controller');

    this.deletePic = () => {
      $log.debug('#thumbnailCtrl.deletePic');
      picService.deletePic(this.gallery, this.pic)
      .then(
        res => $log.log(`${res.status}, pic deleted`),
        err => $log.error(err)
      );
    };
  };
}
