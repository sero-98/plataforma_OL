const express = require('express');
const Estudiante = require('../models/estudiante.js');

const estudianteRouter = express.Router();

estudianteRouter.post('/', async (req, res) => {
  const { nombre, apellido, profesion, universidad, email } = req.body

  const newEstudiante = new Estudiante({
    nombre, apellido, profesion, universidad, email
  })

  const savedEstudiante= await newEstudiante.save();

  res.status(200).json({ error: false, message: 'El Estudiante ' + nombre + ' fue creado correctamente' })

})

estudianteRouter.get('/', async (req, res) => {
  const Estudiantes = await Estudiante.find().sort({ name: 1});
  if (Estudiantes) {
    res.status(200).json({ error: false, Estudiantes });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay Estudiantes registrados en el sistema" });
  }
})

estudianteRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const foundEstudiante = await Estudiante.findOne({ _id: id })
  if (foundEstudiante) {
    res.status(200).json({ error: false, foundEstudiante });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No esta el Estudiante registrado en el sistema" });
  }
})

module.exports = estudianteRouter ;