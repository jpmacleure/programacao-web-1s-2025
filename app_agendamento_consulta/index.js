const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const db  = require('./db');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',
    resave: false,
    saveUninitialized: false
}));

const agendamentoRouter = require('./routers/agendamentoRouter');
const usuarioRouter = require('./routers/usuarioRouter');
app.use('/', agendamentoRouter);
app.use('/', usuarioRouter);

db.sync();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});