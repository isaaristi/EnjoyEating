var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  req.collection = req.db.collection("resena");
  next();
});

router.get("/", (req, res, next) => {
    req.collection.find().toArray().then(data => {
        res.send(data);
    }).catch(err => {
        res.send([]);
    });
});

router.get("/:idRes", (req, res, next) => {
    console.log("PARAMS: " + req.params.idRes);
    req.collection.find({ idRes: { $regex: req.params.idRes, $options: "i" } }).toArray()
        .then(doc => {
            if (doc) {
                res.send(doc);
            } else {
                res.status(404).send({ msg: "Resena no encontrada" });
            }
        }).catch(err => {
            res.send({ msg: "ERRORRRRRR" });
        });
});

router.post("/", (req, res, next) => {
    let resena = req.body;
    req.collection.insert(resena).then(result => {
        res.send({ success: true });
    }).catch(err => {
        res.send({ success: false });
    });
});

router.put("/:id", (req, res, next) => {
    let id = new ObjectID(req.params.id);
    let restaurante = req.body;
    req.collection.updateOne({ _id: id }, { $set: resena }).then(result => {
        res.send({ success: true });
    }).catch(err => {
        res.send({ success: false })
    });
});

module.exports = router;