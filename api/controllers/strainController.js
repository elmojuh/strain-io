// const kitty = new Cat({ name: 'Gato Teste' });
// kitty.save().then(() => console.log('meow'));
const strainModel = require('../models/strainModel');

class StrainController {
    async findAllStrains(req, res) {
        const data = await strainModel.find();
        try {
            res.send(data);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }

    async addStrain(req, res) {
        await strainModel.create(req.body);
        try {
            res.send('Item saved on the database');
        } 
        catch (error) {
            res.status(400).send("item was not saved to the database")
        }
    }
}   
// addStrain(req, res) {
//     let data =  new strainModel(req.body);
//     data.save().then((err, data) => {
//         res.send(data)
//     })
//     .catch(() => {
//         res.status(400).send("item was not saved to the databse")
//     });
// }

module.exports = new StrainController(); 