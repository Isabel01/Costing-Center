(function(){
    'use strict';
    angular.module('app')
        .controller('IngrediantsController', ['IngrediantsService', '$q', '$mdDialog', 'SupplierService', '$scope', '$route', IngrediantsController])
        .controller('DialogControllerIngrediants', ['IngrediantsService', '$q', '$mdDialog', 'SupplierService', '$scope', '$mdDialog',DialogControllerIngrediants]);
   
    function IngrediantsController(IngrediantsService, $q, $mdDialog, SupplierService, $scope, $route) {
        var _IngrediantsController = this;
        console.log("Ingrediants controller");

        $scope.SuppliersLits = null;
        $scope.newIngrediantName = null;
        $scope.newIngrediantCost = 0;
        $scope.newIngrediantSupplier = null;
        $scope.newIngrediantUnit = 'unit';
        $scope.Ingrediants = [];
        $scope.units = ['unit', 'Kg', 'g', 'ml', 'Liter'];


        var init = function() {
        	$scope.SuppliersLits  = SupplierService.getSuppliers();
        	$scope.Ingrediants = IngrediantsService.findIngrediants();
        	buildSuppliers();
        	
        	console.log("--- " + $scope.Ingrediants  );
        	if($scope.Ingrediants == null){
        		$scope.Ingrediants = [];
        	}

        	console.log($scope.Ingrediants);
        	return ;
        }


        var buildSuppliers = function(){
        	$scope.Ingrediants.map(function(ingrediant){
        		$scope.SuppliersLits.map(function(supplier){
        			if (ingrediant.supplier === supplier.$loki) {
        				ingrediant.supplier = supplier;
        			}
        		});
        	});
        }

        init();

        $scope.addIngrediant = function() {
        	var ingrediant = {
        		name: $scope.newIngrediantName,
        		cost: $scope.newIngrediantCost,
        		supplier: $scope.newIngrediantSupplier.$loki, 
        		unit: $scope.newIngrediantUnit
        	}

        	IngrediantsService.addIngrediant(ingrediant);
        	$scope.Ingrediants = IngrediantsService.findIngrediants();
        	$scope.newIngrediantName = null;
        	$scope.newIngrediantCost = 0;
        	$scope.newIngrediantSupplier = null;
        	$scope.newIngrediantUnit = 'unit';
        	buildSuppliers();

        };

        $scope.removeIngrediant = function(ingrediant){
        	IngrediantsService.removeIngrediant(ingrediant);
        	$scope.Ingrediants = IngrediantsService.findIngrediants();
        	buildSuppliers();

        }

	    $scope.showAdvanced = function(ingrediant) {
	    	console.log("Advanced")
	    $mdDialog.show({
	      controller: DialogControllerIngrediants,
	      templateUrl: 'scripts/Ingrediants/ingrediantsDialog.html',
	      parent: angular.element(document.body),
	      clickOutsideToClose:true,
	      fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
	       locals: {
	           ingrediant: ingrediant
	         }
	    });
	  };
       
    }

     function DialogControllerIngrediants($scope, $mdDialog, IngrediantsService, ingrediant, SupplierService) {
     	console.log("DialogControllerIngrediants");

     	$scope.ingrediant = ingrediant;
		$scope.SuppliersList  = SupplierService.getSuppliers();   
		$scope.units = ['unit', 'Kg', 'g', 'ml', 'Liter'];

	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    $scope.cancel = function() {
	      $mdDialog.cancel();
	    };

	    $scope.save = function() {
	    	var supplier = $scope.ingrediant.supplier
	    	$scope.ingrediant.supplier = supplier.$loki;
	    	IngrediantsService.updateIngrediant($scope.ingrediant);
	    	$scope.ingrediant.supplier = supplier;
	    	$mdDialog.cancel();
	    }

    }    

})();