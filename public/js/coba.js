
// var length = document.getElementById("isi").value;
// var jumlah = document.getElementById("jumlah").value;
// var first = document.getElementById("first").value;
// var last = document.getElementById("last").value;

function number(length,jumlah,first,last) {
    var data = [];
    var characters= '0123456789';
    var a = 1,c = 0;
    while(a <= jumlah) {
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
            result = first ? `${first}-${result}`: result;
            result = last ? `${result}-${last}` : result;
        if(!data.includes(result)){
            a++
            data.push(result);
        }
        c++;
    }
    document.getElementById('sum').innerHTML = c; 
    document.getElementById('coba').innerHTML = data; 
    // return result;
}

function abjadnum(length,jumlah,first,last) {
    
    var data = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var a = 1,c = 0;
    while(a <= jumlah) {
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
            result = first ? `${first}-${result}`: result;
            result = last ? `${result}-${last}` : result;
        if(!data.includes(result)){
            a++
            data.push(result);
        }
        c++;
    }

    document.getElementById('sum').innerHTML = c;
    document.getElementById('coba').innerHTML = data;
    // return result;
}

function abjad(length,jumlah,first,last) {
    
    var data = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var a = 1,c = 0;
    while(a <= jumlah) {
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
            result = first ? `${first}-${result}`: result;
            result = last ? `${result}-${last}` : result;
        if(!data.includes(result)){
            a++
            data.push(result);
        }
        c++;
    }
    document.getElementById('sum').innerHTML = c;
    document.getElementById('coba').innerHTML = data;
    // return result;
    result.append(result, result);
    return result;
}

