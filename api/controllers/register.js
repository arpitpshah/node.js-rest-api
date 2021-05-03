var connection = require('./../../config');
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "fname":req.body.fname,
        "lname":req.body.lname,
        "emailID":req.body.email,
        "password":req.body.password,
        "employeeID":req.body.employeeID
    }
    var employeesData={
      "employeeID":req.body.employeeID,
      "organization":req.body.organizationName
    }
    connection.query('INSERT INTO employees SET ?',employeesData,function (error, results, fields) {
      if(error){
        res.json({
          status:false,
          message:'Insert into employees failed'
        })
      }
      else{
        connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
          if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
          }else{
              res.json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            })
          }
        });
      }
      
    });
    
}