var express = require("express");
var router = express.Router();
var ObjectID = require("mongodb").ObjectID;

router.use((req, res, next) => {
    req.collection = req.db.collection("restaurante");
    next();
});

router.get("/", (req, res, next) => {
    req.collection.find().toArray().then(data => {
        res.send(data);
    }).catch(err => {
        res.send([]);
    });
});

router.get("/:id", (req, res, next)=>{
    let id = new ObjectID(req.params.id);
    req.collection.findOne({_id:id}).then(doc=>{
        if(doc){
            res.send(doc);
        }else{
            res.status(404).send({msg:"Restaurante no encontrado"});
        }
    }).catch(err => {

    });
});

router.post("/", (req, res, next) => {
    let restaurante = req.body;
    req.collection.insert(restaurante).then(result => {
        res.send({ success: true });
    }).catch(err => {
        res.send({ success: false });
    });
});

router.put("/:id", (req, res, next) => {
    let id = new ObjectID(req.params.id);
    let restaurante = req.body;
    req.collection.updateOne({_id:id}, {$set:restaurante}).then(result=>{
        res.send({success:true});
    }).catch(err=>{
        res.send({success:false})
    });

   
});

router.delete("/:id", (req, res, next) => {
    let id = new ObjectID(req.params.id);
    req.collection.deleteOne({_id:id}).then(result=>{
        res.send({success:true});
    })
    .catch(err=>{
        res.send({success:false});
    
    }); 
});

module.exports = router;
