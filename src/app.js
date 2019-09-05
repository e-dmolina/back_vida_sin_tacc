const express = require('express');
const cors = require('cors');
const app = express();

/*--------------------
        settings
--------------------*/
app.set('port', process.env.PORT || 5000);

/*--------------------
       middlewares
--------------------*/
//cors permite a la api enviar y recibir datos
app.use(cors());
//permite utilizar json y string
app.use(express.json());

/*--------------------
        routes
--------------------*/
app.use('/api/establecimientos', require('./routes/establecimientos'));


module.exports = app;
