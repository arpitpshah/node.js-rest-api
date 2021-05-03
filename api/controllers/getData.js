var connection = require('./../../config');
module.exports.getUserData=function(req,res){
    let fName=req.params.fname;
    let lName=req.params.lname;
    let employeeID=req.params.employeeID;
    console.log(fName,lName,employeeID);
    connection.query('SELECT u.*,e.organization FROM users u inner join employees e on e.employeeID=u.employeeID WHERE fName = ? and lName = ? and e.employeeID = ?',[fName,lName,employeeID],function (error, results, fields) {
        if (error) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }else{
            res.json({
                results:results
               });
        }
    });
}
module.exports.sortUserData=function(req,res){
    connection.query('SELECT u.*,e.organization from users u inner join employees e on e.employeeID=u.employeeID order by u.fName,u.lName,u.emailID,u.employeeID,e.organization',function (error, results, fields) {
        if (error) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }else{
            res.json({
                results:results
               });
        }
    });
}

module.exports.getAllData=function(req,res){
    console.log("hello",req.params);
    connection.query('SELECT u.*,e.organization from users u inner join employees e on e.employeeID=u.employeeID',function (error, results, fields) {
        if (error) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }else{
            res.json({
                results:results
               });
        }
    });
}