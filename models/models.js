const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "DreamDictionary.json"
)

const getProductFromFile = cb =>{
    fs.readFile(p, (err, fileContent) =>{
        if(err){
           return cb([]);
        }
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Model{
    static fetchAll(cb){
        getProductFromFile(cb);
    }
}
