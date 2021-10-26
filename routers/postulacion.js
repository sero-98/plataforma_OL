const express = require('express');
const Postulacion = require('../models/postulacion.js');

const postulacionRouter = express.Router();

postulacionRouter.post('/', async (req, res) => {
  const { comentario, evaluacion, valoracion } = req.body

  const newPostulacion = new Postulacion({
    comentario, evaluacion, valoracion
  })

  const savedPostulacion= await newPostulacion.save();

  res.status(200).json({ error: false, message: 'La postulacion fue creada correctamente' })

})

postulacionRouter.get('/', async (req, res) => {
  const Postulaciones = await Postulacion.find();
  if (Postulaciones) {
    res.status(200).json({ error: false, Postulaciones });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay postulaciones registradas en el sistema" });
  }
})

postulacionRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const foundpostulacion = await Postulacion.findOne({ _id: id });
  if (foundpostulacion) {
    res.status(200).json({ error: false, foundpostulacion });
  } else {s
    return res
      .status(400)
      .json({ error: true, message: "No hay esta Postulacion registrado en el sistema" });
  }
})

module.exports = postulacionRouter ;