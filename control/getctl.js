var express = require('express');
var fs = require('fs');
var path = require('path');

module.exports = {
    getkey: async function(req , res){
        let datums;
        var resv;
        await new Promise( (resolve , reject) => {
            fs.readFile(path.join(__dirname , 'dat.json') , (err , data) => {
                if(err){
                    console.log(err);
                }
                else{
                    resolve(data);
                }
            });
        }).then(datas => {
            datums = datas;
        } , error => {
            console.log(error);
        });
        obj = JSON.parse(datums);
        if(obj.hasOwnProperty(req.params.key)){
            res.write(obj[req.params.key].toString());
        }
        else{
            res.write('key not found!');
        }
        res.status(200);
        res.end();
    }
}
