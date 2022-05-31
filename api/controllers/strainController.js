// const kitty = new Cat({ name: 'Gato Teste' });
// kitty.save().then(() => console.log('meow'));
const strainModel = require('../models/strainModel');

class StrainController {
    async findAllStrains(req, res) {
        const data = await strainModel.find({});
        try {
            res.send('We are trying');
            res.send(data);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }

    async addStrain(req, res) {
        const data = await strainModel.create();
        try {
            res.send(data);
        } 
        catch (error) {
            res.status(500).send(error);
        }
    }
}   

module.exports = new StrainController(); 