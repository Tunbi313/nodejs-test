
import express from "express";
import 'dotenv/config'
import webRoutes from "./routes/web"; 
import { dirname } from "path";
import initDatabase from "config/seed";

const app = express()
const port = process.env.port || 8080;
 //config view engine
 app.set('view engine','ejs');
 app.set('views',__dirname +'/views');
 console.log(__dirname +'/views')
 

 //config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//config stic files: images/css/js
app.use(express.static('public'));


//config routes
webRoutes(app);

//seeding data
initDatabase();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(__dirname +'/views')
})
