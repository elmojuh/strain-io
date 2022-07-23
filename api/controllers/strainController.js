// const kitty = new Cat({ name: 'Gato Teste' });
// kitty.save().then(() => console.log('meow'));

var conn = require('../db/db');

class StrainController {

  // Retorna todas as strains cadastradas
  async findAllStrains(req, res) {
    conn.query(
      "SELECT * FROM STRAIN",
      function(err,results){
        if(err){
          console.error(err.stack);
          res.status(500).send('Something broke!');
        }
        return res.send(results);
      }
    );
  }

  // Adiciona uma nova strain
  async addStrain(req, res) {
    if (!req.body) {
      res.status(500).send('No data to insert');
    }
    //let strain = req.body.strain;
    const values = [req.body]
    // const values = [req.body.strainName, req.body.strainType,
    //                 req.body.nickname, req.body.percent_of_thc,
    //                 req.body.percent_of_cbd, 
    // ];
    console.log(values);
    conn.query(
      "INSERT INTO STRAIN VALUES (?)",
    values,
    function(err,results){
      if(err){
        console.error(err.stack);
        res.status(500).send('Something broke!');
      }
      return res.send(results);
    })
  }
}


module.exports = new StrainController();
