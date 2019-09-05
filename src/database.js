const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/bdvidasintacc';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//cuando se abre la conexión mostramos el msj por consola
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connect');
});