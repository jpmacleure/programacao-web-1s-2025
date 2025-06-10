const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.verificarAutenticacao, agendamentoController.getIndexView);
router.get('/agendamentos', usuarioController.verificarAutenticacao, agendamentoController.getAgendamentosView);
router.post('/agendar_consulta', usuarioController.verificarAutenticacao, agendamentoController.postAgendarConsulta);

module.exports = router;