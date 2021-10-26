const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { config } = require('./config/index.js');
const empresaRouter = require('./routers/empresa.js');
const postulacionRouter = require('./routers/postulacion.js');
const estudianteRouter = require('./routers/estudiante.js');
const curriculumRouter = require('./routers/curriculum.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(config.mongodb_uri, {
  
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!')
});

//Http request Logger
app.use(morgan('tiny'));

//Rutas
app.use('/api/empresa', empresaRouter);
app.use('/api/postulacion', postulacionRouter);
app.use('/api/estudiante', estudianteRouter);
app.use('/api/curriculum', curriculumRouter);

app.get('/', (req, res) => {
  res.json('Server is ready');
});

//Puerto
app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});
