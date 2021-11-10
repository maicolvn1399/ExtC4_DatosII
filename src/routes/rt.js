const { Router } = require('express');
const router = Router();

const Usuario = require('../models/Usuario');

//GET
router.get('/getUsuarios',(req,res) => {
    Usuario.find()
    .then((doc) => {
        res.json(doc);
    });
});

//POST 
router.post('/addUser',(req,res) => {
    try{
        Usuario.insertMany([{name:req.body.name,lastName:req.body.lastName,age:req.body.age, code:req.body.code,country:req.body.country}],
            (err) => {
            if(err){
                console.log('Error while POST');
            }else{
                res.send('POST OK');
            }
        });
    }catch(err){
        console.log(err);
    }
});


//UPDATE
router.put('/updateUser/:key',(req,res) => {
    const { key } = req.params;
    Usuario.findOneAndUpdate({code:key},
        {
        name:req.body.name,
        lastName:req.body.lastName,
        age:req.body.age,
        code:key,
        country:req.body.country,
    },(err) => {
        if(err){
            console.log(err);
        }else{
            res.send('UPDATE OK')
        }})

});

//DELETE 
router.delete('/deleteUser/:key',(req,res) => {
    const { key } = req.params; 
    Usuario.findOneAndDelete({code:key},(err,doc) => {
        if(err){
            console.log(err);
        }else{
            res.send('DELETE OK');
        }
    });
});



module.exports = router; 