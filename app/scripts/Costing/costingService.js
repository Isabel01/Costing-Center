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
        .service('CostingService', ['$q', CostingService]);
    
    function CostingService($q) {
        return {
          
        };
        
     
    }
})();