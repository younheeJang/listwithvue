const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 6000;
const cors = require('cors');
const log = console.log;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT, ()=>{
	log('server is running on port number: '+PORT);
});