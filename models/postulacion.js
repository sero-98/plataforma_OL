const mongoose = require('mongoose');
const express = require('express');


const postulacionSchema = new mongoose.Schema(
  {
    comentario: { 
      type: String, 
      required: true 
    },
    evaluacion: {
      type: String, 
      required: true, 
    },
    valoracion: { 
      type: String, 
      required: true 
    },
  },
  {
    timestamps: true
  }
);

const Postulacion = mongoose.model('Postulacion', postulacionSchema);
module.exports = Postulacion ;