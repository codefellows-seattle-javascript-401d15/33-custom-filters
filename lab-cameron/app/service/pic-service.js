'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  'Upload',
  'authService',
  picService,
];

function picService($q, $log, $http, Upload, authService) {
  $log.debug('Pic Service');

  let service = {};

  service.uploadPic = function(gallery, pic) {
    $log.debug('#picService.uploadPic');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${gallery._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };
      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: pic.name,
          desc: pic.desc,
          file: pic.file,
        },
      });
    })
    .then(
      res => {
        gallery.pics.push(res.data);
        return res.data;
      },
      err => {
        $log.error(err.message);
        return $q.reject(err);
      }
    );
  };

  service.deletePic = function(gallery, pic) {
    $log.debug('#picService.deletePic');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${gallery._id}/pic/${pic._id}`;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      };
      return $http.delete(url, config);
    })
    .then(res => {
      gallery.pics.filter((ele, i) => {
        if (ele._id === pic._id) gallery.pics.splice(i, 1);
      });
      return res;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
