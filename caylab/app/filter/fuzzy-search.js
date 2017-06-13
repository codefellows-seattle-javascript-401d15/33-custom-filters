'use strict'

module.exports = function(){
  return function(galleries, searchValue){
    let regex = fuzzySearch(searchValue)

    return galleries.filter(gallery => {
      return regex.test(gallery.name.toUpperCase())
    })
  }
}

function fuzzySearch(input){
  if(!input) return /.*/

  let searchValue = '.*' + input.toUpperCase().split('').join('.*') + '.*'
  return new RegExp(searchValue)
}
