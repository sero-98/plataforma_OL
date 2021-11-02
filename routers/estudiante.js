const express = require('express');
const Estudiante = require('../models/estudiante.js');
const nodemailer =require('nodemailer');


const estudianteRouter = express.Router();

estudianteRouter.post('/send-email', async (req, res) => {
  
  const { name, email, phone, message } = req.body;

  contentHTML = `
        <h1>Reunion de Estudiantes</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'sergio.ac.1503@gmail.com',
          pass: 'kjdguugxigjrbpui',
      }
  });


  let info = await transporter.sendMail({
      from: '"UNMSM form', // sender address,
      to: 'sergio.aroni@unmsm.edu.pe, aroni.carbajals@gmail.com',
      //to: mentorizados.email,
      subject: 'Website Contact Form',
      //text: 'Hello World'
      html: contentHTML
  })

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.redirect('/success.html'); 

  /*console.log(req.body);
  res.send("recibido")*/

})

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