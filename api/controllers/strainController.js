// const kitty = new Cat({ name: 'Gato Teste' });
// kitty.save().then(() => console.log('meow'));
const strainModel = require('../models/strainModel');

class StrainController {
    async findAllStrains(req, res) {
        const data = await strainModel.find

    try {
        res.send(foods);
    }
     catch (error) {
    res.status(500).send(error);
  }
    }
}   

module.exports = new StrainController(); 