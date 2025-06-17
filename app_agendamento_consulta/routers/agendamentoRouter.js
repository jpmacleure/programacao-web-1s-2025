const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.verificarAutenticacao, agendamentoController.getIndexView);
router.get('/detalhar_agendamento/:id', usuarioController.verificarAutenticacao, agendamentoController.getEditarAgendamentoView);
router.get('/excluir_agendamento/:id', usuarioController.verificarAutenticacao, agendamentoController.getExcluirAgendamento);
router.get('/agendamentos', usuarioController.verificarAutenticacao, agendamentoController.getAgendamentosView);

router.post('/agendar_consulta', usuarioController.verificarAutenticacao, agendamentoController.postAgendarConsulta);
router.post('/editar_agendamento', usuarioController.verificarAutenticacao, agendamentoController.postEditarAgendamento);

module.exports = router;