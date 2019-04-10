const allAnimals = require('./animals');

module.exports = {
    getallAnimalsInventory: (req, res) => {
        res.status(200).send(allAnimals)
    }
}