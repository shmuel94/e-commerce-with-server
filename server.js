// const products = require("./public/js/main");
const express = require("express"),
    app = express(),
    path = require('path'),
    publicPath = path.join(__dirname, "public"),
    PORT =  8080,
    utils = require("./utils");
    MongoDB = require("mongodb");
    app.set("view engine", "html");
    app.use(express.json());
    app.use(express.static(publicPath));
    // axios = require("axios"),
    ObjectId = MongoDB.ObjectId,
    MongoClient = MongoDB.MongoClient,
    // mongoURL = "mongodb://localhost:27017/",
    // dbName = "E-commerce",
    collectionContact = "contact",
    collectionCart = "carts",
    collectionProduct = "products";
    

// app.get("/products", (req, res) => {
//     utils.insertproducts(req, res);
// });

app.get("/products", (req, res) => {
    utils.getproducts(req, res);
});

app.get("/Kitchen_and_home_appliances", (req, res) => {
    utils.getKitchen(req, res);
});


app.get("/laptop", (req, res) => {
    utils.getLaptop(req, res);
});

app.get("/tv", (req, res) => {
    utils.getTv(req, res);
});

app.get("/washing_machines_and_dryers", (req, res) =>{
    utils.getWashing(req, res);
});

app.post("/products", (req, res) => {
    utils.addProduct(req, res);
});

app.patch("/products/:id", (req, res) => {
    utils.updateProduct(req, res);
});

app.delete("/products/:id", (req, res) => {
    utils.deleteProduct(req, res);
});

app.get("/contact", (req, res) => {
    utils.getPersons(req, res);
});

app.post("/contact", (req, res) => {
    utils.sendForm(req, res);
});

app.get("/carts", (req, res) => {
    utils.getcarts(req, res);
});

app.patch("/carts/update", (req, res) => {
    console.log(req.body);
    utils.addProductToCart(req, res);
});

app.patch("/carts/delete", (req, res) => {
    utils.deleteProductFromCart(req, res);
});

app.listen(PORT, () => {
    console.log(`app is listening on: ${PORT}`);
})