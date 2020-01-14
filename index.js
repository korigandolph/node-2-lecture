const express =require('express');
const cors=require('cors');
const ctrl=require('./controller.js');

const app=express();

app.use(cors());
app.use(express.json());

app.get('/api/movies', ctrl.getMovies);

const port=3333;
app.listen(port, ()=> console.log(`Server running on ${port}`));