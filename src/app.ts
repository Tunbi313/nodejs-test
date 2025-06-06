
import express from "express";
import 'dotenv/config'
import { dirname } from "path";
const app = express()
const port = process.env.port || 8080;
 //config view engine
 app.set('view engine','ejs');
 app.set('views',__dirname +'/views');
 console.log(__dirname +'/views')

app.get('/', (req, res) => {
  res.render("home.ejs")
})

app.get('/abc', (req, res) => {
  res.send('Hello World! ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(__dirname +'/views')
})
