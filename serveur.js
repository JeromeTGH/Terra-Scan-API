//process.env.NODE_ENV = 'production';

const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config({ path: './config/.env' })

// Message d'invite
console.log("");
console.log("==========================");
console.log("Démarrage de l'application");
console.log("==========================");
console.log("");

// Création du serveur
const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.all('*', (req, res) => {
    res.status(200).json(JSON.parse('{"test": "ok !"}'))
})

// Serveur
app.listen(process.env.PORT, () => {
    console.log(`Serveur NodeJS démarré (port ${process.env.PORT})`)
})