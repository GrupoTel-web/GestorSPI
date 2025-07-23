const express = require('express');
const router = express.Router();
const controller = require('../../controllers/logs/logs');
const blockBrowserAccess = require('../../middleware/blockBrowserAccess');

router.use(blockBrowserAccess);

router.post('/registrar', controller.registrarLogController);
router.get('/buscar', controller.buscarTodosLogsController);

module.exports = router;