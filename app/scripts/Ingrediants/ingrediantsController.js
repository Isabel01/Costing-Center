(function(){
    'use strict';
    angular.module('app')
        .controller('IngrediantsController', ['IngrediantsService', '$q', '$mdDialog', IngrediantsController]);
   
    function IngrediantsController(IngrediantsService, $q, $mdDialog) {
        var self = this;
        console.log("Ingrediants controller");
       
      
    }

})();