'use strict';

module.exports = function() {
  return function(galleries, string='') {
    let matched = [];
    galleries.forEach(gallery => {
      let beginsWith = gallery.name.toLowerCase().substring(0, string.length);
      if (beginsWith === string.toLowerCase()) matched.push(gallery);
    });
    console.log(matched);
    return matched;
  };
};
