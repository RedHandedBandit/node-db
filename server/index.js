const express = require('express');
const Ctrl = require('./controllers/InventoryCtrl')

const app = express()

app.use(express.json())

app.get('/api/animalInventory', Ctrl.getallAnimalsInventory)
app.put('/api/info/:id', Ctrl.updateInfo)
app.post('/api/myList/:id', Ctrl.addIDToMyList)
app.delete('/api/deleteAnimal/:id', Ctrl.deleteAnimalObj)

const port = 4000
app.listen(port, console.log(`if you are quiet you can hear port ${port}`))