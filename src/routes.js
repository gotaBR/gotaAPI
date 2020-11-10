const { Router } = require('express');

const CompanyController = require('./app/controllers/CompanyController');

const router = Router();

router.get('/', CompanyController.show);

module.exports = router;
