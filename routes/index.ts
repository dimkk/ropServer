import {Request, Response} from "express";

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var parseString = require('xml2js').parseString;

let renderData:any =  { title: 'Express' };
/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
  res.render('index', renderData)
});

fs.readFile(path.resolve('./data/j-hq6VGUIso.xml'), 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  };

  parseString(data, (err, result:ROP.IXmlTranslation)=>{
    renderData.title = JSON.stringify(result)
    
  });
});

module.exports = router;
