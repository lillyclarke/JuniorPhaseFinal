const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

app.get('api/students', async (req, res, next) => {
  try{
  const students = await Student.findAll({
    attributes: ['id', 'name', 'email', 'campusId']
  })
  res.json(students)
}catch(err){
  next(err);
}
})

app.get('api/students/:id', async (req, res, next) => {
  try{
  const student = await Student.findById(req.params.id)
  res.json(student)
}catch(err){
  next(err);
}
})


app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});



module.exports = app;

