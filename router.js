var express = require('express')
var router = express.Router()
const data = require(__dirname + '/assets/courses.json')

router.get('/', (req,res) => {
  console.log(req.url);

  res.render(__dirname + '/index.ejs', {data: data})
})

router.get('/courses', (req,res) => {
  console.log(req.url);
  res.render(__dirname + '/index.ejs', {data: data})
})

module.exports = router
