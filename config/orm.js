const connection = require('./connection');

connection.connect(function(err) {
    if (err) {
      console.log(err.message);
      return;
    } 
});

function ManageDb() {

    this.selectAll = function() {
        connection.query("SELECT * FROM burgers", function(err, results) {
            if (err) {
                return res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
    };

    this.insertOne = function() {
        connection.query(
            "INSERT INTO burgers SET ?",
            {
                burger_name: "",
                devoured: false
            },
            function (err) {
                if (err) {
                    return res.status(500).end();
                } else {
                    res.status(200).end();
                }
            }
        );
    };

    this.updateOne = function() {
        connection.query(
            "UPDATE products SET ? WHERE ?",
            [
                {
                    devoured: true  
                },
                {
                    burger_name: "" 
                }
            ],
            
            function (err) {
                
                if (err) {
                    return res.status(500).end();
                    
                } else {
                    res.status(200).end();
                }
            }  
            
        );
    };
};

module.exports = ManageDb;