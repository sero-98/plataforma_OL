const express = require('express');
const Curriculum = require('../models/curriculum.js')


const curriculumRouter = express.Router();

curriculumRouter.post('/', async (req, res) => {
  const { informacion, estudios, habilidades, idiomas, experiencia } = req.body

  const newCurriculum = new Curriculum({
    informacion, estudios, habilidades, idiomas, experiencia
  })

  const savedCurriculum= await newCurriculum.save();

  res.status(200).json({ error: false, message: 'Fue creado correctamente' })

})

curriculumRouter.get('/', async (req, res) => {
  const curriculums = await Curriculum.find();
  if (curriculums) {
    res.status(200).json({ error: false, curriculums });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay curriculums registrados en el sistema" });
  }
})

curriculumRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const foundCurriculum = await Curriculum.findOne({ _id: id })
  if (foundCurriculum) {
    res.status(200).json({ error: false, foundCurriculum });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay curriculum registrado en el sistema" });
  }
})

module.exports = curriculumRouter ;