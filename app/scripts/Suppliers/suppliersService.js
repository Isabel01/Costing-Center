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
        if(!db.getCollection('Suppliers')){
            db.addCollection('Suppliers');
        }
    });

    angular.module('app')
        .service('SupplierService', ['$q', 'Loki',  SupplierService]);
    
    function SupplierService($q, Loki) {
    
     var Suppliers = db.getCollection('Suppliers');

        return {
          addSupplier: addSupplier,
          getSuppliers: getSuppliers,
          removeSupplier: removeSupplier,
          updateSupplier: updateSupplier
        };

        function addSupplier(supplier) {
            Suppliers.insert({name: supplier});
            db.saveDatabase();
            Suppliers = db.getCollection('Suppliers');
        }

        function getSuppliers(){
            Suppliers = db.getCollection('Suppliers');
            return Suppliers.find({});
        }

        function removeSupplier(supplier) {
            Suppliers.remove(supplier);
            db.saveDatabase();
            Suppliers = db.getCollection('Suppliers');
        }

        function updateSupplier(supplier){
            Suppliers.update(supplier);
            db.saveDatabase();
        }

    }
})();