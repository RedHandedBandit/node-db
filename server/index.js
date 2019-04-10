const express = require('express');
const Ctrl = require('./controllers/InventoryCtrl')

const app = express()

app.use(express.json())

app.get('/api/animalInventory', Ctrl.getallAnimalsInventory)

const port = 4000
app.listen(port, console.log(`if you are quiet you can hear port ${port}`))