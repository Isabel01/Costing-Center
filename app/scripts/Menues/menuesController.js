(function(){
    'use strict';
    angular.module('app')
        .controller('MenuesController', ['MenuesService', '$q', '$mdDialog', MenuesController]);
   
    function MenuesController(MenuesService, $q, $mdDialog) {
        var self = this;
        console.log("Menues controller");
       
      
    }

})();