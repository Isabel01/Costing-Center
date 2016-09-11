(function(){
    'use strict';
    angular.module('app')
        .controller('IngrediantsController', ['IngrediantsService', '$q', '$mdDialog', 'SupplierService', '$scope', IngrediantsController])
        .controller('DialogControllerIngrediants', ['IngrediantsService', '$q', '$mdDialog', 'SupplierService', '$scope', '$mdDialog',DialogControllerIngrediants]);
   
    function IngrediantsController(IngrediantsService, $q, $mdDialog, SupplierService, $scope) {
        var _IngrediantsController = this;
        console.log("Ingrediants controller");

        $scope.SuppliersLits = null;
        $scope.newIngrediantName = null;
        $scope.newIngrediantCost = 0;
        $scope.newIngrediantSupplier = null;
        $scope.Ingrediants = [];

        var init = function() {
        	$scope.SuppliersLits  = SupplierService.getSuppliers();
        	$scope.Ingrediants = IngrediantsService.findIngrediants();
        	console.log("--- " + $scope.Ingrediants  )
        	if($scope.Ingrediants == null){
        		$scope.Ingrediants = [];
        	}
        }

        init();

        $scope.addIngrediant = function() {
        	var ingrediant = {
        		name: $scope.newIngrediantName,
        		cost: $scope.newIngrediantCost,
        		supplier: $scope.newIngrediantSupplier
        	}

        	IngrediantsService.addIngrediant(ingrediant);
        	$scope.Ingrediants = IngrediantsService.findIngrediants();
        	$scope.newIngrediantName = null;
        	$scope.newIngrediantCost = 0;
        	$scope.newIngrediantSupplier = null;

        };

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
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };


       
    }

     function DialogControllerIngrediants($scope, $mdDialog, IngrediantsService, ingrediant, SupplierService) {
     	console.log("DialogControllerIngrediants");

     	$scope.ingrediant = ingrediant;
		$scope.SuppliersLits  = SupplierService.getSuppliers();   

	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    $scope.cancel = function() {
	      $mdDialog.cancel();
	    };

	    $scope.save = function() {
	    	IngrediantsService.updateIngrediant($scope.ingrediant);
	    	$mdDialog.cancel();
	    	$scope.SuppliersLits  = SupplierService.getSuppliers();   
	       
	    }
    }

    

})();