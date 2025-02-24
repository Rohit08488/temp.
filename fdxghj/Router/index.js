const express = require('express')
const router = express.Router()
const st = require('../student')
const database = require('../database/db')
const stnew=require('../controller/studentlist')
const thnew=require('../controller/teacherlist')
const conew=require('../controller/course')

// studentapi
router.get('/getdata',stnew.getStudentList);
router.post('/insertdata',stnew.insertStudentList);
router.delete('/deletedata',stnew.deleteStudentList);
router.put('/updatedata',stnew.updateStudentList);


// teacherapi
router.get('/teachergetdata',thnew.getTeacherList);
router.post('/teacherinsertdata',thnew.insertTeacherList);
router.delete('/teacherdeletedata',thnew.deleteTeacherList);
router.put('/teacherupdatedata',thnew.updateTeacherList);

//courseapi
router.get('/getcourse',conew.getCourseList);
router.post('/insertcourse',conew.insertCourseList);
router.delete('/deletecourse',conew.deleteCourseList);
router.put('/updatecourse',conew.updateCourseList);

module.exports=router