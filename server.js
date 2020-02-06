const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'tugas'
});

// const db = mysql.createConnection(config.user,config.host,config.password,config.database);

db.connect((err)=>{
    if(err) throw err;
    console.log('Mysql connected......');
});

const app = express();
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// var pages = require('./routes/pages');
// app.use('/', pages);
// app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, function (){ 
    console.log('report from server 3000');
});

app.get('/', function (req,res) {
    // if(err) throw err;
    res.render('index2');
    // res.sendFile(__dirname + '/index.html');
});

app.post('/isi', function (req,res) {   
    var first = req.body.depan;
    var last = req.body.belakang;
    var length = req.body.isi;
    var jumlah = req.body.jumlah;
    var pilihan = req.body.pilihan;

    var characters = '';
    var a = 1,c = 0;
    
    if (pilihan == 'abjad') {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (pilihan == 'number') {
        var characters= '0123456789';
    } else if (pilihan == 'numabjad'){
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    }
   
    var permutation = getPermutations(characters);
    
});

app.post('/try', function (req, res) {
    var permutation = getPermutations('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
    console.log("Total permutation: " + permutation.length);
    console.log(permutation);
});


function getPermutations(string) {
    var results = [];
    if (string.length === 1) 
    {
      results.push(string);
        return results;
    }

    for (var i = 0; i < string.length; i++) 
    {
      var firstChar = string[i];
      var otherChar = string.substring(0, i) + string.substring(i + 1);
      var otherPermutations = getPermutations(otherChar);
        results.push(firstChar + otherChar);

      for (var j = 0; j < otherPermutations.length; j++) {
        results.push(firstChar + otherPermutations[j]);
      }
    }
    return results;
  }

// function coba(sql,resp) {
//     let c = db.query(sql, function (err,result) {  
//         if(err) throw err;
//         if (result.length > 0 ) {
//             a = 0;
//         }else{
//             a = 1;
//             var insert = `INSERT INTO coba(isi) VALUES('${resp}')`;
//             db.query(insert, function(err) {  
//                 if(err) throw err;
//                 console.log("1 record inserted");
//             });
//         }
//         return a;
//     });
//     return c;
// }