/***********************
Author: Isbael Nel 
All rights reserved
***********************/

(function () {
    'use strict';

    //init db
    var loki = require('lokijs');
    var db = new loki('Spens.json',{
            autosave: true,
            autosaveInterval: 5000,
            autoload: true
        });
    db.loadDatabase({}, function (result) {
        if(!db.getCollection('Ingrediants')){
            db.addCollection('Ingrediants');
        }
    });

    angular.module('app')
        .service('IngrediantsService', ['$q', IngrediantsService]);
    
    function IngrediantsService($q) {

         var Ingrediants = db.getCollection('Ingrediants');

        return {
          addIngrediant: addIngrediant,
          findIngrediants: findIngrediants,
          removeIngrediant: removeIngrediant,

        };

        function addIngrediant(ingrediant) {
            Ingrediants.insert(ingrediant);
            db.saveDatabase();
            Ingrediants = db.getCollection('Ingrediants');
        }

        function findIngrediants() {
            Ingrediants.find({});
        }

        function removeIngrediant(ingrediant) {
            Ingrediants.remove(ingrediant);
            Ingrediants = db.getCollection('Ingrediants');
        }

        function updateIngrediant(ingrediant) {
            Ingrediants.update(ingrediant);
        }
     
    }
})();