var express = require('express')
var router = express.Router()
var $ajax = require('axios')

// 增加用户接口
router.post('/login', (req, response,next) => {
  var params = {
    userName: req.body.loginName,
    password: req.body.password
  }
  $ajax.post('http://localhost:8080/sys/login', params).then(function (res) {
    response.send(res.data)
  }).catch(function (err) {
    response.send(err)
  })
})
router.get('/test', (req, res) => {
  res.send('success')
})

module.exports = router
