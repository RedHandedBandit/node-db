const allAnimals = require('./animals');
const myList = []

function getMyList(){
    let filteredAnimals = []
    for(let i = 0; i < myList.length; i++){
        // console.log('are you running')
        filteredAnimals.push( allAnimals.dataOfAnimals.find((val, index, arr) => {
            // console.log('val.id', val.id, 'val.id2', myList[i])
        return val.id === myList[i]
        }))
    }
    return filteredAnimals
}

module.exports = {
    getallAnimalsInventory: (req, res) => {
        res.status(200).send(allAnimals)
    },
    updateInfo: (req, res) => {
        let {dataOfAnimals} = allAnimals
        let {newInfo} = req.body
        let {id} = req.params
        // let filteredAnimals = []
        
        let fullObj = dataOfAnimals.find(el => +el.id === +id)
        fullObj.info = newInfo
        console.log('full edited obj', fullObj)
       
        // for(let i = 0; i < myList.length - 1; i++){
        //     filteredAnimals.push( dataOfAnimals.find((val, index, arr) => {
        //         console.log('val.id', val.id, 'val.id2', myList[i])
        //     return val.id === myList[i]
        //     }))
        // }
        // console.log('filteredAnimals', filteredAnimals)
        res.status(200).send(getMyList())
    },
    addIDToMyList: (req, res) => {
        // let filteredAnimals = []
        myList.push(
            +req.params.id
        )
        console.log('did .push', myList)
        // for(let i = 0; i < myList.length - 1; i++){
        //     filteredAnimals.push( allAnimals.dataOfAnimals.find((val, index, arr) => {
        //         console.log('val.id', val.id, 'val.id2', myList[i])
        //     return val.id === myList[i]
        //     }))
        // }
        // console.log(myList)
        let filteredMyList = getMyList()
        // console.log('filteredMyList', filteredMyList)
        res.status(200).send(filteredMyList)
    },
    deleteAnimalObj: (req, res) => {
        let {id} = req.params
        // console.log('myList for delete',myList)
        let newIndex = myList.indexOf(+id)
        // console.log('myList newIndex',newIndex)
        myList.splice(newIndex,1)
        // console.log('myList myNewList',myNewList)
        res.status(200).send(getMyList())
    }

}