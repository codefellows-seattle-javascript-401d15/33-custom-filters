'use strict';

module.exports = function() {
  return function(galleries, searchTerm) {
    let fuzzyPajamas = generateFuzzyPajamas(searchTerm);
    return galleries.filter(gallery => fuzzyPajamas.test(gallery.name.toLowerCase()));
  };

  function generateFuzzyPajamas(input) {
    if (!input) return /.*/;
    return new RegExp(`.*${input.toLowerCase().split('').join('.*')}.*`);
  }
};
