'use strict'

module.exports = function(){
  return function(input, limit = Infinity){
    return galleries.sort((a, b) => a.name > b.name).slice(0, limit)
  }
}
