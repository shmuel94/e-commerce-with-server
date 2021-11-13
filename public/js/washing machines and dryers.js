// var divs6 = document.getElementById("container");
// var washing = [];
// for (let i = 0; i < Prodects.length; i++) {
//   if(Prodects[i].category == "washing machines and dryers"){
//       for (let j = -1; j < washing.length; j++) {
//     wmad = {
//       id: Prodects[i].id,
//       name: Prodects[i].name,
//       price: Prodects[i].price,
//       description: Prodects[i].description,
//       category: Prodects[i].category,
//       pictur1: Prodects[i].pictur1,
//       pictur2: Prodects[i].pictur2
//     }
//   }washing.push(wmad)
//   }
// } 

// for (let i = 0; i < washing.length; i++) {
// divs6.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${washing[i].pictur1}"><img class="imgs" src="${washing[i].pictur2}"><br>id:${washing[i].id}<br>name:${washing[i].name}<br>price:${washing[i].price}<br>description:${washing[i].description}<br>category:${washing[i].category}</div><br><button class="btn">Add to cart</button></div>`
// }

var washing = [];
axios
.get("/products")
.then((response)=>{
    let data=response.data
    var divs6 = document.getElementById("container");

for (let i = 0; i < data.length; i++) {
  if(data[i].category == "washing machines and dryers"){
    for (let j = -1; j < washing.length; j++) {
      wmad = {
        id: data[i].id,
        name: data[i].name,
        price: data[i].price,
        description: data[i].description,
        category: data[i].category,
        pictur1: data[i].pictur1,
        pictur2: data[i].pictur2
      }
    }washing.push(wmad)
  } 
}
for (let i = 0; i < washing.length; i++) {
  divs6.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${washing[i].pictur1}"><img class="imgs" src="${washing[i].pictur2}"><br>id:${washing[i].id}<br>name:${washing[i].name}<br>price:${washing[i].price}<br>description:${washing[i].description}<br>category:${washing[i].category}</div><br><button class="btn"  onclick="add(${i})">Add to cart</button></div>`
}
})
.catch((err)=>{
    console.log(err);
})

function add(i){
  axios.patch(`/carts/update`, {pictur1:washing[i].pictur1, pictur2:washing[i].pictur2, id:washing[i].id, name:washing[i].name, price:washing[i].price, description:washing[i].description, category:washing[i].category})
  .then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log("error");
});
}


// let btn6 = document.getElementsByClassName("btn");
// for (let i = 0; i < washing.length; i++) {
// btn6[i].onclick = () => {
//   newOrder = {
//     id: washing[i].id,
//     name: washing[i].name,
//     price: washing[i].price,
//     description: washing[i].description,
//     category: washing[i].category,
//     pictur1: washing[i].pictur1,
//     pictur2: washing[i].pictur2
//   }
//   customerCart.push(newOrder)
//   console.log(customerCart);
// }
// }