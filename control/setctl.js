var express = require('express');
var fs = require('fs');
var path = require('path');

module.exports = {
    setkey: async function(req , res){
        // file operation
        let datums;
        await new Promise( (resolve , reject) => {
            fs.readFile(path.join(__dirname, 'dat.json'), (err , data) => {
                if(err){
                    console.log(err);
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        }).then(datas =>{
            datums = datas;
        }, error => {
            console.log(error);
        });
        obj = JSON.parse(datums);
        obj[req.params.key] = req.body.value;
        var json = JSON.stringify(obj);
        await new Promise( (resolve , reject) => {
            fs.writeFile(path.join(__dirname, 'dat.json'), json, (err, data) => {
                if(err){
                    console.log(err);
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        }).then(datas => {
            res.write('OK');
        }, error => {
            console.log(error);
        });
        res.status(200);
        res.end();
    }
};
