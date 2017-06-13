'use strict'

module.exports = [
  '$log',
  '$location',
  function($log, $location){
    this.$onInit = () => {
      this.title = 'Please sign in'
      let url = $location.url()
      this.showSignup = url === '/join#signup' || url === '/join'
    }
  }
]
