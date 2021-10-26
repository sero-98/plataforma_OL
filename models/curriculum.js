const mongoose = require('mongoose');
const express = require('express');


const curriculumSchema = new mongoose.Schema(
  {
    informacion: { 
      type: String, 
      required: true 
    },
    estudios: {
      type: String, 
      required: true, 
    },
    habilidades: { 
      type: String, 
      required: true 
    },
    idiomas: { 
      type: String, 
      required: true 
    },
    experiencia: { 
      type: String, 
      required: true 
    },
  },
  {
    timestamps: true
  }
);

const Curriculum = mongoose.model('Curriculum', curriculumSchema);
module.exports = Curriculum ;