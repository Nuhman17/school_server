const express = require('express')


const userController = require('../Controller/userController')
const studentsController = require('../Controller/studentController')


const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multer = require('../Middleware/multerConfig')

const router = express.Router()

router.post('/reg', userController.userRegistration)
router.post('/log', userController.userLogin)

router.post('/addstudents', jwtMiddleware, multer.single('image'), studentsController.addStudents)
router.get('/getstudents', jwtMiddleware, studentsController.getStudents)
router.delete('/deletestudent/:sid', jwtMiddleware, studentsController.deleteStudents)
router.put('/updatestudent/:sid',jwtMiddleware,multer.single('image'),studentsController.updateStudents)


module.exports = router