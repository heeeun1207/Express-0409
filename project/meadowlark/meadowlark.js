const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (res,req) =>{
  res.type('text/plain')
  res.send('Meadowlark Travel');
})
app.get('/about', (res,req) =>{
  res.type('text/plain')
  res.send('About Meadowlark Travel');
})
//custom 404 page 
app.use ((req,res)=> {
  res.type('text/pain')
  res.status(404)
  res.send('404 - Not Found')
})

//cuntom 500 page
app.use ((err,req,res,next)=> {
  console.error(err.message)
  res.type('text/pain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port , () => console.log(
  `Express started on http://localhost:${port};`+
  `press Crtl-C to teminate.`))
  