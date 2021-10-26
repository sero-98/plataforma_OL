const express = require('express');
const Empresa = require('../models/empresa.js');

const empresaRouter = express.Router();

empresaRouter.post('/', async (req, res) => {
  const { nombre, ruc, direccion, rubro, email, cantidad_trabajadores } = req.body

  const newEmpresa= new Empresa({
    nombre, ruc, direccion, rubro, email, cantidad_trabajadores
  })

  const savedEmpresa= await newEmpresa.save();

  res.status(200).json({ error: false, message: 'La empresa ' + nombre + ' fue creada correctamente' })

})

empresaRouter.get('/', async (req, res) => {
  const Empresas = await Empresa.find().sort({ name: 1});
  if (Empresas) {
    res.status(200).json({ error: false, Empresas });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay Empresas registradas en el sistema" });
  }
})

empresaRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const foundEmpresa = await Empresa.findOne({ _id: id });
  if (foundEmpresa) {
    res.status(200).json({ error: false, foundEmpresa });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No esta la Empresa registrada en el sistema" });
  }
})

module.exports = empresaRouter ;