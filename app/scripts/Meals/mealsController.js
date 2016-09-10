(function(){
    'use strict';
    angular.module('app')
        .controller('MealsController', ['MealsService', '$q', '$mdDialog', MealsController]);
   
    function MealsController(MealsService, $q, $mdDialog) {
        var self = this;
        console.log("Meals controller");
       
      
    }

})();