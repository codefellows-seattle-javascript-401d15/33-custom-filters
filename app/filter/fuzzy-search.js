'use strict';

module.exports = function() {
  return function(galleries, search) {
    if(!search) return;
    return galleries.filter(gallery => {
      return gallery.name.toLowerCase().includes(search.toLowerCase());
    });
  };
};
