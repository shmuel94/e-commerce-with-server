const products = require("./public/js/main");
// console.log(products);
 require("dotenv").config();
const MongoDB = require("mongodb"),
    // axios = require("axios"),
    MongoClient = MongoDB.MongoClient,
    ObjectId = MongoDB.ObjectId,
    mongoURL = process.env.MONGOURL,
    dbName = "E-commerce",
    collectionContact = "contact",
    collectionCart = "carts",
    collectionProduct = "products";
    // 

// function insertproducts(req, res) {
    // MongoClient.connect(mongoURL, function (err, db) {
    //     if (err) throw err;
    //     const dbo = db.db(dbName);
    //     dbo.collection(collectionProduct).insertMany(products, function (err, allProtucts) {
    //         if (err) throw err;
    //         res.send(allProtucts)
    //         console.log(allProtucts);
    //     });
    // });
// }

// MongoClient.connect(mongoURL, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(dbName);
//     dbo.createCollection(collectionProduct, function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });


function getKitchen(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        dbo.collection(collectionProduct).find({
            'category': /Kitchen and home appliances$/
        }).toArray(function (err, allKitchen) {
            if (err) throw err;
            res.send(allKitchen)
            console.log(allKitchen);
        });
    });
}

function getLaptop(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        dbo.collection(collectionProduct).find({
            'category': /laptop$/
        }).toArray(function (err, allLaptop) {
            if (err) throw err;
            res.send(allLaptop)
            console.log(allLaptop);
        });
    });
}

function getTv(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        dbo.collection(collectionProduct).find({
            'category': /tv$/
        }).toArray(function (err, allTv) {
            if (err) throw err;
            res.send(allTv)
            console.log(allTv);
        });
    });
}

function getWashing(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        dbo.collection(collectionProduct).find({
            'category': /washing machines and dryers$/
        }).toArray(function (err, allWashing) {
            if (err) throw err;
            res.send(allWashing)
            console.log(allWashing);
        });
    });
}

function addProduct(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        let newProduct = req.body;
        if (!Number(newProduct.id) || !Number(newProduct.price)) {
            return res.sendStatus(400);
        }
        if (newProduct.name == undefined || newProduct.name.length == 0) {
            return res.sendStatus(400);
        }
        dbo
            .collection(collectionProduct)
            .insertOne(newProduct, function (err, product) {
                console.log(product);
                if (err) throw err;
                res.sendStatus(201);
                db.close();
            });
    });
}

function getproducts(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        dbo.collection(collectionProduct).find({}).toArray(function (err, allProtucts) {
            if (err) throw err;
            res.send(allProtucts)
            console.log(allProtucts);
        });
    });
}

function updateProduct(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        const productToUpdate = req.body;
        const id = req.params.id;
        dbo
          .collection(collectionProduct)
          .findOneAndUpdate(
            { _id: ObjectId(id)},
            { $set: productToUpdate },
            function (err, resUpdated) {
              if (err) throw err;
              res.send(resUpdated)
              db.close();
            }
          );
    });
}

function deleteProduct(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
      if (err) throw err;
      const id = req.params.id;
      console.log(id);
      var dbo = db.db(dbName);
      dbo
        .collection(collectionProduct)
        .findOneAndDelete(
          { _id: MongoDB.ObjectId(id) },
          function (err, deleteProduct) {
            if (err) throw err;
            console.log(deleteProduct.value);
            if (deleteProduct.value) {
              res.sendStatus(200);
            } else {
              res.sendStatus(404);
            }
            db.close();
          }
        );
    });
}

function sendForm(req, res){
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        let newPerson = req.body;
        if (newPerson.lastName == undefined || newPerson.lastName.length == 0) {
            return res.sendStatus(400);
        }
        if (newPerson.firstName == undefined || newPerson.firstName.length == 0) {
            return res.sendStatus(400);
        }
        dbo
            .collection(collectionContact)
            .insertOne(newPerson, function (err, person) {
                console.log(person);
                if (err) throw err;
                res.sendStatus(201);
                db.close();
            });
    });
}

function getPersons(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        dbo.collection(collectionContact).find({}).toArray(function (err, allPersons) {
            if (err) throw err;
            res.send(allPersons)
            console.log(allPersons);
        });
    });
}

function getcarts(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        dbo.collection(collectionCart).find({}).toArray(function (err, allCarts) {
            if (err) throw err;
            res.send(allCarts)
            console.log(allCarts);
        });
    });
}

function addProductToCart(req, res) {
    // const reqId = req.params.id;
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        const cartId = {_id:ObjectId("61894da27a651b2899c20dbc")};
        let newProductToCart = req.body;
        if (!Number(newProductToCart.id) || !Number(newProductToCart.price)) {
            return res.sendStatus(400);
        }
        if (newProductToCart.name == undefined || newProductToCart.name.length == 0) {
            return res.sendStatus(400);
        }
        dbo
            .collection(collectionCart)
            .updateOne(cartId,{$push: {cart: newProductToCart}}, function (err, product) {
                console.log(product);
                if (err) throw err;
                res.status(201).json(product);
                db.close();
            });
    });
}

function deleteProductFromCart(req, res) {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        const cartId = {_id:ObjectId("61894da27a651b2899c20dbc")};
        dbo
            .collection(collectionCart)
            .updateOne(cartId,{$pull: {cart:req.body}}, function (err, product) {
                console.log(product);
                if (err) throw err;
                res.status(201).json(product);
                db.close();
            });
    });
}


module.exports = {
    // insertproducts
    getKitchen,
    getLaptop,
    getTv,
    getWashing,
    addProduct,
    getproducts,
    updateProduct,
    deleteProduct,
    sendForm,
    getPersons,
    getcarts,
    addProductToCart,
    deleteProductFromCart
};