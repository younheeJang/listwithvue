const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const js = require('./js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
	()=>{js.log('database mongomongo is connected!')},
	err=>{js.log('database mongomongo failed.!'+err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT, ()=>{
	js.log('server is running on port number: '+PORT);
});

app.get('/lists', (req, res)=>{
	res.send(
		[{
			title:"curious jeager",
			description:"in MEVN"
		}]
	)
})