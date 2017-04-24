var express = require("express");
var router = express.Router();
var ObjectID = require("mongodb").ObjectID;

router.use((req, res, next) => {
    req.collection = req.db.collection("restaurante");
    next();
});

router.get("/", (req, res, next) => {
    let type = req.query.type;
    let q = {};
    if(type){
        q.tipo = {$regex:type};
    }
    req.collection.find(q).toArray().then(data => {
        res.send(data);
    }).catch(err => {
        res.send([]);
    });
});

router.get("/:nombre", (req, res, next) =>{
    console.log("PARAMS: "+req.params.nombre);
    req.collection.find({nombre:{$regex:req.params.nombre, $options:"i"}}).toArray()
    .then(doc=>{
        if(doc){
            res.send(doc);
        }else{
            res.status(404).send({msg:"Restaurante no encontrado"});
        }
    }).catch(err => {
        res.send({msg:"ERRORRRRRR"});
    });
});

/*router.get("/:menu.:ingredientes", (req, res, next) => {
    console.log("PARAMAS: "+req.params.ingredientes);
    req.collection.find({"menu.ingedientes":{$regex:req.params.ingredientes, $options:"i"}}).toArray()
    .then (doc => {
        if(doc){
            res.send(doc);
        }else{
            res.status(404).send({msg:"Ingrediente no encontrado"});
        }
    }).catch(err => {
        res.send({msg:"ERRORRRRRR"});
    });
    });*/

router.get("/menu/:ingredientes",(req, res, next) => {
    //let ingredientes = new ObjectID(req.params.ingredientes);
    console.log("PARAMS: "+req.params.ingredientes);
    req.collection.aggregate([
        {$project:{menu:1}},
        {$unwind:{path:"$menu"}},
        {$match:{"menu.ingredientes":{$regex:"arroz", $options:"i"}}},
        {$group:{_id:"menu", menu:{$push:"$menu"}}}
        ]).toArray().then(doc => {
        if(doc.length > 0){
            res.send(doc.menu);
        }else{
            res.send([]);
        }
    }).catch(err => {

    });
});

/*router.get("/:id", (req, res, next)=>{
    let id = new ObjectID(req.params.id);
    req.collection.findOne({_id:id}).then(doc=>{
        if(doc){
            res.send(doc);
        }else{
            res.status(404).send({msg:"Restaurante no encontrado"});
        }
    }).catch(err => {

    });
});*/


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
