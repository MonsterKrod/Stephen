const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname, 'app')))
app.get('/' , function(req , res){
  res.sendFile(path.join(__dirname+'/app/index.html'));
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
