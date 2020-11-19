const { Router } = require('express');

const CompanyController = require('./app/controllers/CompanyController');
const CalculatorController = require('./app/controllers/CalculatorController');

const router = Router();

router.get('/:uf/:empresa', CompanyController.show);
router.get('/calculator/:uf/:empresa/:municipio/:categoria/:consumo', CalculatorController.show);

module.exports = router;
