const connection = require('./connection');

connection.connect(function(err) {
    if (err) {
      console.log(err.message);
      return;
    }; 
});

function ManageDb() {
    
    this.selectAll = function() {
        connection.query("SELECT * FROM burgers", function(err, results) {
            if (err) {
                throw err;
            } else {
            console.table(results);
            };
        });
    };

    this.insertOne = function() {
        connection.query(
            "INSERT INTO burgers SET ?",
            {
                burger_name: ,
                devoured: false
            },
            function (err) {
                if (err) {
                    console.log(err);
                };
            }
        );
    };

    this.updateOne = function() {
        connection.query(
            "UPDATE products SET ? WHERE ?",
            [
                {
                    :  
                },
                {
                    : 
                }
            ],
            
            function (err) {
                
                if (err) {
                    console.log("oops " + err);
                    
                } 
            }  
            
        );
    };
};

module.exports = ManageDb;