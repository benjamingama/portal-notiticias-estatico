const express = require('express');
var bodyParser = require('body-parser')

const path = require('path');

const app = express();

app.use( bodyParser.json() );     // to suport JSON-enconded bodies
app.use(bodyParser.urlencoded({   // to suport URL-encoded bodies
 extended: true
}));

app.engine('html',require('ejs').renderFile)
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname, 'public')));
app.set('viewa',path.join(__dirname, '/views'));



app.listen(5000,()=>{
    console.log('server rodando!')
})