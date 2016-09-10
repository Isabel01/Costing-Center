
(function () {
    'use strict';
    
    var _templateBase = './scripts';
    
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate',
        'lokijs'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/customer/customer.html' ,
                controller: 'customerController',
                controllerAs: '_ctrl'
            }).when('/suppliers', {
                templateUrl: _templateBase + '/Suppliers/suppliers.html' ,
                controller: 'SuppliersController',
                controllerAs: 'SuppliersController'
            }).when('/costing', {
                templateUrl: _templateBase + '/Costing/costing.html' ,
                controller: 'CostingController',
                controllerAs: 'CostingController'
            }).when('/ingrediants', {
                templateUrl: _templateBase + '/Ingrediants/ingrediants.html' ,
                controller: 'IngrediantsController',
                controllerAs: 'IngrediantsController'
            }).when('/meals', {
                templateUrl: _templateBase + '/Meals/meals.html' ,
                controller: 'MealsController',
                controllerAs: 'MealsController'
            }).when('/menues', {
                templateUrl: _templateBase + '/Menues/menues.html' ,
                controller: 'MenuesController',
                controllerAs: 'MenuesController'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ])
    .constant(
    'json1', 
    {  
        "db":"Spens",
        "collection": "Suppliers" ,
           "documents" :
            [  
                {}
            ],
        "collection": "Ingrediants" ,
           "documents" :
            [  
                {}
            ],
        "collection": "Meals" ,
           "documents" :
            [  
                {}
            ],
        "collection": "Menue" ,
           "documents" :
            [  
                {}
            ],
    }
    );;
 

})();
