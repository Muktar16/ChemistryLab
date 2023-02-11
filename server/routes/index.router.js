const router = require('express').Router();
const facultyController = require('../controllers/facultyController');


//routing to Faculty controller modules
router.post('/');
router.get("/faculties", facultyController.getAllFaculties);
router.get('/:expenseID');
router.put('/:expenseID');
router.delete('/:expenseID');

module.exports = router;