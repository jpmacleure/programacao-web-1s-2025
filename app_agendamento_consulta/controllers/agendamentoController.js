const AgendamentoConsulta = require('../models/agendamentoConsultaModel');

function getIndexView(req, res){
    res.render('index.html');
}

function getAgendamentosView(req, res){
    AgendamentoConsulta.findAll().then((agendamentos)=>{
        res.render('agendamentos.html', {agendamentos});
    });
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);

    if(campos_invalidos.length == 0){
        AgendamentoConsulta.create(dados_consulta).then(()=>{
            res.redirect('/agendamentos');
        });
    }
    else{
        res.render('index.html', {campos_invalidos, dados_consulta});
    }

    
}

function getEditarAgendamentoView(req, res){
    let id_agendamento = req.params.id;
    AgendamentoConsulta.findOne({
        where:{
            id: id_agendamento
        }
    }).then((dados_consulta)=>{
        res.render('editar_agendamento.html', {dados_consulta});
    }); 
    
}

function postEditarAgendamento(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);

    if(campos_invalidos.length == 0){
        AgendamentoConsulta.findOne({
            where:{
                id: dados_consulta.id
            }
        }).then((dados_agendamento)=>{
            dados_agendamento.update(dados_consulta).then(()=>{
                res.redirect('/agendamentos');
            });
            
        }); 
    }
    else{
        res.render('editar_agendamento.html', {campos_invalidos, dados_consulta});
    }
}

function getExcluirAgendamento(req, res){
    let id_agendamento = req.params.id;
    AgendamentoConsulta.findOne({
        where:{
            id: id_agendamento
        }
    }).then((dados_consulta)=>{
        dados_consulta.destroy().then(()=>{
            res.redirect('/agendamentos');
        });
    }); 
}

module.exports = {
    getIndexView,
    postAgendarConsulta,
    getAgendamentosView,
    getEditarAgendamentoView,
    postEditarAgendamento,
    getExcluirAgendamento
}

function validarRequisicaoAgendamentoConsulta(dados_consulta){
    let campos_invalidos = [];

    if(dados_consulta.nome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Nome");
    }
    if(dados_consulta.sobrenome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.cpf.length == 0){
        form_invalido = true;
        campos_invalidos.push("CPF");
    }

    return campos_invalidos;
}