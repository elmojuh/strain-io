const dataMockada  = require('./data/data');
const express = require('express');
const app = express() //inicializa express
const port = process.env.PORT || 3000 //cria porta

//middleware para passar os requests como JSON
app.use(express.json())
app.use(express.urlencoded( {extended: false}))

//requisicao HTTP get na rota "/" (raiz)
app.get('/', (req, res) => {
    res.send('<h1>Voce deu um get na pasta raíz do projeto </h1>') //retorna na response um elemento html
})

//req HTTP get na rota /strains, onde ficam os dados das strains
app.get('/strain', (req, res) => {
    res.json(dataMockada.dados) //retorna um JSON com o array de objetos strains mockados acima
})

//req HTTP post na rota /strains, adicionando uma strain
app.post('/strain', (req, res) => {
    if (dataMockada.dados[req.body.id] != null){
        res.status(403).send("There is already a Strain registered for this ID.")
    }
    dataMockada.dados.push(req.body)
    return res.status(201).json(dataMockada.dados)
})

app.put('/strain/:id', (req, res) => {
    if (dataMockada.dados[id] == null){
        res.status(404).send("Strain not found.")
    }
    var id = req.params.id
    id = parseInt(id.replace(/[^0-9]/g,''))
    
    dataMockada.dados[id] = {
        nome : req.body.nome,
        tipo : req.body.tipo,
        efeitos : req.body.efeitos,
        terpeno_dominante : req.body.terpeno_dominante 
    }
    
    return res.status(201).send("Updated!")
    
})

app.delete('/strain/:id', (req, res) => {
    if (dataMockada.dados[id] == null){
        res.status(404).send("Strain not found.")
    }
    var id = req.params.id
    id = parseInt(id.replace(/[^0-9]/g,''))
    dataMockada.dados.splice(id, 1)
    //dataMockada = dataMockada.dados.filter((x) => x.id == id )
    
    res.end("Deleted")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
