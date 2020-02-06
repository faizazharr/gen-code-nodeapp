var express = require('express');
var app = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'tugas'
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
    //   res.redirect('index2');

    var characters = '';
    var a = 1,c = 0;
    
    if (pilihan == 'abjad') {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (pilihan == 'number') {
        var characters= '0123456789';
    } else if (pilihan == 'numabjad'){
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    }
    while(a <= jumlah) {
        var resp = '';
        for ( var i = 0; i < length; i++ ) {
            resp += characters.charAt(Math.floor(Math.random() * characters.length));
        }
            resp = first ? `${first}-${resp}`: resp;
            resp = last ? `${resp}-${last}` : resp;
            var sql = `SELECT * FROM coba WHERE isi = '${resp}'`;
            
            db.query(sql, function (err,rows) {  
                if(err) throw err;
                console.log(rows);
                // if (result.length > 0 ) {
                //     c++;
                // }else{
                //     var insert = `INSERT INTO coba(isi) VALUES('${resp}')`;
                //     db.query(insert, function(err) {  
                //         if(err) throw err;
                //         console.log("1 record inserted");
                //     });
                //     a++;
                // }
                a++;
            });
    }
    // db.query(sql,function (err,result) {  
    //    res.render('index2',{data : result.isi}) 
    // });
});

// function hitung(first,last,length,jumlah,pilihan) {  
    
//     // console.log(first,last,length,jumlah,pilihan);
// }

module.exports = app;