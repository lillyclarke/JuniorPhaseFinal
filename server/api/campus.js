const router = require('express').Router()
const { Campus } = require('../db')

router.get('api/campuses', async (req, res, next) => {
  try{
  const campuses = await Campus.findAll({
    attributes: ['id', 'name', 'imageUrl', 'address', 'description']
  })
  res.json(campuses)
}catch(err){
  next(err);
}
})

router.get('api/campuses/:id', async (req, res, next) => {
  try{
  const campus = await Campus.findById(req.params.id)
  res.json(campus)
}catch(err){
  next(err);
}
})

// router.get('/api/campuses/numberOfStudents', async (req, res, next) => {
//   try{


module.exports = router;

