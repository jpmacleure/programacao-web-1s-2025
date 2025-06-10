const Usuario = require('../models/usuarioModel');

function getCadastroView(req, res){
    res.render('cadastro_usuario.html');
}

function getLoginView(req, res){
    res.render('login.html');
}

function postCadastrarUsuario(req, res){
    const dados_usuario = req.body;
    Usuario.create(dados_usuario).then(()=>{
        res.redirect('/acessar');
    });
}

async function postAutenticarUsuario(req, res){

    const usuario = await Usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });

    if(usuario !== null){
        console.log('USUÁRIO AUTENTICADO');
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/agendamentos');
    }
    else{
        res.redirect('/acessar?erro_login=1');
    }

}

function sair(req, res){
    req.session.destroy();
    res.redirect('/acessar');
}

function verificarAutenticacao(req, res, next){
    if(req.session.autorizado){
        console.log('usuário autorizado');
        next();
    }
    else{
        console.log('usuário NÃO autorizado');
        res.redirect('/acessar');
    }
}

module.exports = {
    getCadastroView,
    getLoginView,
    postCadastrarUsuario,
    postAutenticarUsuario,
    sair,
    verificarAutenticacao
}