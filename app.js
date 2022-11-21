// npm i
// npx sequelize db:create -> create db based on  config/config.json & models/index.js

const express = require('express');

const path = require('path');
const morgan = require('morgan');               //morgan
const dotenv = require('dotenv');

const {sequelize} = require('./models');


dotenv.config();

const app = express();
app.set('port', process.env.PORT || 8080);

sequelize.sync({force: false})
    .then(()=>{
        console.log('데이터베이스 연결 성공');
    })
    .catch((err)=>{
        console.error(err);
    });


app.use(morgan('dev'));     // for log 

app.use('/', express.static(path.join(__dirname, 'public')));   //approach to static file in public folder

app.use(express.json());                          //body parser  use req.body
app.use(express.urlencoded({extended: false}));   



  app.listen(app.get('port'), () => {       //specify port
      console.log(app.get('port'), '번 포트에서 대기중');
  });