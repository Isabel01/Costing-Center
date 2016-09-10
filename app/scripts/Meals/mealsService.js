(function () {
    'use strict';
    var mysql = require('mysql');
    
    // Creates MySql database connection
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "customer_manager"
    });
    
    angular.module('app')
        .service('MealsService', ['$q', MealsService]);
    
    function MealsService($q) {
        return {
          
        };
        
     
    }
})();