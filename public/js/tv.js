// var divs4 = document.getElementById("container");

// var tvs = [];
// for (let i = 0; i < Prodects.length; i++) {
//   if(Prodects[i].category == "tv"){
//       for (let j = -1; j < tvs.length; j++) {
//     tv = {
//       id: Prodects[i].id,
//       name: Prodects[i].name,
//       price: Prodects[i].price,
//       description: Prodects[i].description,
//       category: Prodects[i].category,
//       pictur1: Prodects[i].pictur1,
//       pictur2: Prodects[i].pictur2
//     }
//   }tvs.push(tv)
//   }
// } 

// for (let i = 0; i < tvs.length; i++) {
// divs4.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${tvs[i].pictur1}"><img class="imgs" src="${tvs[i].pictur2}"><br>id:${tvs[i].id}<br>name:${tvs[i].name}<br>price:${tvs[i].price}<br>description:${tvs[i].description}<br>category:${tvs[i].category}</div><br><button class="btn">Add to cart</button></div>`
// }

var tvs = [];
axios
.get("/products")
.then((response)=>{
    let data=response.data
    var divs4 = document.getElementById("container");

for (let i = 0; i < data.length; i++) {
  if(data[i].category == "tv"){
    for (let j = -1; j < tvs.length; j++) {
      tv = {
        _id: data[i]._id,
        id: data[i].id,
        name: data[i].name,
        price: data[i].price,
        description: data[i].description,
        category: data[i].category,
        pictur1: data[i].pictur1,
        pictur2: data[i].pictur2
      }
    }tvs.push(tv)
  } 
}
for (let i = 0; i < tvs.length; i++) {
  divs4.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${tvs[i].pictur1}"><img class="imgs" src="${tvs[i].pictur2}"><br>id:${tvs[i].id}<br>name:${tvs[i].name}<br>price:${tvs[i].price}<br>description:${tvs[i].description}<br>category:${tvs[i].category}</div><br><button class="btn" onclick="add(${i})">Add to cart</button><br><form method="get" action="update_product.html"><button class="btn" name="update" value="${tvs[i]._id}">update</button></form>
  <button onclick ="deletePd('${tvs[i]._id}')" class="btn"> delete</button></div>`
}
})
.catch((err)=>{
    console.log(err);
})

function add(i){
  axios.patch(`/carts/update`, {pictur1:tvs[i].pictur1, pictur2:tvs[i].pictur2, id:tvs[i].id, name:tvs[i].name, price:tvs[i].price, description:tvs[i].description, category:tvs[i].category})
  .then(function (response) {
    alert("the product added to the cart");
    console.log(response);
})
.catch(function (error) {
    console.log("error");
});
}


// let btn4 = document.getElementsByClassName("btn");
// for (let i = 0; i < tvs.length; i++) {
// btn4[i].onclick = () => {
//   newOrder = {
//     id: tvs[i].id,
//     name: tvs[i].name,
//     price: tvs[i].price,
//     description: tvs[i].description,
//     category: tvs[i].category,
//     pictur1: tvs[i].pictur1,
//     pictur2: tvs[i].pictur2
//   }
//   customerCart.push(newOrder)
//   console.log(customerCart);
// }
// }