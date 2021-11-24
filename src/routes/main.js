
const express = require('express');
const router = express.Router();


const mainController = require('../controllers/mainController');
const admin = require ('../middlewares/adminMiddlewares')

router.get('/', mainController.index); 


router.get('/admin', admin, mainController.admin)

module.exports = router;