const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const app = express();
module.exports = app;

app.use(volleyball)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', require('./api'))

app.use((req, res, next) => {
  const err = new Error('Not found.')
  res.status(404).end()
  next(err)
})

//use this instead of above?
// app.use((req, res, next) => {
//   if (path.extname(req.path).length > 0) {
//     res.status(404).end()
//   } else {
//     next()
//   }
// })

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})



