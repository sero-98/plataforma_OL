const mongoose = require('mongoose');
const express = require('express');


const empresaSchema = new mongoose.Schema(
  {
    nombre: { 
      type: String, 
      required: true 
    },
    ruc: { 
      type: String, 
      required: true 
    },
    direccion: { 
      type: String, 
      required: true 
    },
    rubro: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true 
    },
    cantidad_trabajadores: { 
      type: String, 
      required: true 
    },
  },
  {
    timestamps: true
  }
);

const Empresa = mongoose.model('Empresa', empresaSchema);
module.exports = Empresa ;