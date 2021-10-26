const mongoose = require('mongoose');
const express = require('express');


const estudianteSchema = new mongoose.Schema(
  {
    nombre: { 
      type: String, 
      required: true 
    },
    apellido: {
      type: String, 
      required: true
    },
    profesion: {
      type: String, 
      required: true 
    },
    universidad: {
      type: String, 
      required: true 
    },
    email: {
      type: String, 
      required: true 
    },
  },
  {
    timestamps: true
  }
);

const Estudiante = mongoose.model('Estudiante', estudianteSchema);
module.exports = Estudiante ;