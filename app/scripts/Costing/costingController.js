(function(){
    'use strict';
    angular.module('app')
        .controller('CostingController', ['CostingService', '$q', '$mdDialog', CostingController]);
   
    function CostingController(CostingService, $q, $mdDialog) {
        var self = this;
        console.log("Costing controller");
       
      
    }

})();