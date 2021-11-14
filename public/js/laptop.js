// var divs3 = document.getElementById("container");
// var laptop = [];
// for (let i = 0; i < Prodects.length ; i++) {
//   if(Prodects[i].category == "laptop"){
//       for (let j = -1; j < laptop.length; j++) {
//     lat = {
//       id: Prodects[i].id,
//       name: Prodects[i].name,
//       price: Prodects[i].price,
//       description: Prodects[i].description,
//       category: Prodects[i].category,
//       pictur1: Prodects[i].pictur1,
//       pictur2: Prodects[i].pictur2
//     }
//   }laptop.push(lat)
//   }
// } 

// for (let i = 0; i < laptop.length; i++) {
// divs3.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${laptop[i].pictur1}"><img class="imgs" src="${laptop[i].pictur2}"><br>id:${laptop[i].id}<br>name:${laptop[i].name}<br>price:${laptop[i].price}<br>description:${laptop[i].description}<br>category:${laptop[i].category}</div><br><button class="btn">Add to cart</button></div>`
// }

var laptop = [];
axios
.get("/products")
.then((response)=>{
    let data=response.data
    var divs3 = document.getElementById("container");

for (let i = 0; i < data.length; i++) {
  if(data[i].category == "laptop"){
    for (let j = -1; j < laptop.length; j++) {
      lat = {
        _id: data[i]._id,
        id: data[i].id,
        name: data[i].name,
        price: data[i].price,
        description: data[i].description,
        category: data[i].category,
        pictur1: data[i].pictur1,
        pictur2: data[i].pictur2
      }
    }laptop.push(lat)
  } 
}
for (let i = 0; i < laptop.length; i++) {
  divs3.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${laptop[i].pictur1}"><img class="imgs" src="${laptop[i].pictur2}"><br>id:${laptop[i].id}<br>name:${laptop[i].name}<br>price:${laptop[i].price}<br>description:${laptop[i].description}<br>category:${laptop[i].category}</div><br><button class="btn"  onclick="add(${i})">Add to cart</button><br><form method="get" action="update_product.html"><button class="btn" name="update" value="${laptop[i]._id}">update</button></form>
  <button onclick ="deletePd('${laptop[i]._id}')" class="btn"> delete</button></div>`
}
})
.catch((err)=>{
    console.log(err);
})

function add(i){
  axios.patch(`/carts/update`, {pictur1:laptop[i].pictur1, pictur2:laptop[i].pictur2, id:laptop[i].id, name:laptop[i].name, price:laptop[i].price, description:laptop[i].description, category:laptop[i].category})
  .then(function (response) {
    alert("the product added to the cart");
    console.log(response);
})
.catch(function (error) {
    console.log("error");
});
}

// let btn3 = document.getElementsByClassName("btn");
// for (let i = 0; i < laptop.length; i++) {
// btn3[i].onclick = () => {
//   newOrder = {
//     id: laptop[i].id,
//     name: laptop[i].name,
//     price: laptop[i].price,
//     description: laptop[i].description,
//     category: laptop[i].category,
//     pictur1: laptop[i].pictur1,
//     pictur2: laptop[i].pictur2
//   }
//   customerCart.push(newOrder)
//   console.log(customerCart);
// }
// }