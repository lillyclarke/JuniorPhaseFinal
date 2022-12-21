const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

app.get('api/campuses', async (req, res, next) => {
  try{
  const campuses = await Campus.findAll({
    attributes: ['id', 'name', 'email', 'campusId']
  })
  res.json(campuses)
}catch(err){
  next(err);
}
})

app.get('api/campuses/:id', async (req, res, next) => {
  try{
  const campus = await Campus.findById(req.params.id)
  res.json(campus)
}catch(err){
  next(err);
}
})

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

