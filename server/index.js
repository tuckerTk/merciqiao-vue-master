var path = require('path')
const login = require('./api/login')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// 后端api路由
app.use('/user', login)

//访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', function response(req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})
// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
