const express = require('express');
const router = express.Router();

//Import Statement to load Controllers
const processController = require('../controllers/process.controller');

//Import Statement to load Middleware
const auth = require('../middleware/auth')

//Process Api Routes
router.patch('/api/update/:id',auth, processController.updateProcessApi);
router.post('/api/create',auth, processController.saveNewProcessApi);
router.delete('/api/delete/:id',auth, processController.deleteProcessApi);
router.post('/api/uploadImage', auth, processController.uploadImage, processController.getImageLocation);

//Process View Routes
router.get('/', auth, processController.getProcesses);
router.get('/:id',auth, processController.getProcessById);

module.exports = router;