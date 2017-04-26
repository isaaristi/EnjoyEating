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
