/***********************
Author: Isbael Nel 
All rights reserved
***********************/

(function(){
    'use strict';
    angular.module('app')
        .controller('SuppliersController', ['SupplierService', '$q', '$mdDialog','$scope', SuppliersController]);
   
    function SuppliersController(SupplierService, $q, $mdDialog, $scope) {
        var SuppliersController = this;

        console.log("Suppliers controller");
       
      	$scope.supplier = {};
      	$scope.supplier.newName = '';
      	$scope.suppliers = [];

      	$scope.init = function(){
      		$scope.getSuppliers();
      	};

      	$scope.addSupplier = function(){
      		SupplierService.addSupplier($scope.supplier.newName);
      		$scope.getSuppliers();
      		$scope.supplier.newName = '';
      	};

      	$scope.getSuppliers = function(){
      		$scope.suppliers = SupplierService.getSuppliers();
      	};

      	$scope.removeSupplier = function(supplier){
      		SupplierService.removeSupplier(supplier);
      		$scope.getSuppliers();
      	}

      	$scope.init();
    }

})();