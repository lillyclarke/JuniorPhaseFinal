const router = require('express').Router()
const { Campus } = require('../db')

router.get('/', async (req, res, next) => {
  try{
  const campuses = await Campus.findAll()
  res.json(campuses)
}catch(err){
  next(err);
}
});

router.get('/:id', async (req, res, next) => {
  try{
  const campus = await Campus.findById(req.params.id)
  res.json(campus)
}catch(err){
  next(err);
}
});

router.post('/', async (req, res, next) => {
  try{
    res.status(201).json(await Campus.create(req.body))
  }catch(err){
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try{
    const campus = await Campus.findById(req.params.id)
    res.json(await campus.update(req.body))
  }catch(err){
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try{
    const campus = await Campus.findById(req.params.id)
    await campus.destroy()
    res.json(campus)
  }catch(err){
    next(err);
  }
});

module.exports = router;

