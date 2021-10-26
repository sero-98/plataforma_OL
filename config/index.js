require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_ADDON_URI,
}

module.exports = { config };

//trim() remueve los espacios en blanco
//let str = "       Hello World!        ";
//str.trim()   // Returns "Hello World!"