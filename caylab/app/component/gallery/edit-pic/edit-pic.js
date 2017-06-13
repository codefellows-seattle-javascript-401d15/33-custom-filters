'use strict'

module.exports = {
  template: require('./edit-pic.html'),
  controllerAs: 'editPicCtrl',
  bindings: {
    gallery: '<',
    pics: '<'
  },
  controller: [
    '$log'
  ]
}
