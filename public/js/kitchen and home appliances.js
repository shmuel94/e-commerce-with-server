var Kitchen = [];
let form = document.getElementById("pformss");

axios
  .get("/products")
  .then((response) => {
    let data = response.data
    var divs4 = document.getElementById("container");
    for (let i = 0; i < data.length; i++) {
      if (data[i].category == "Kitchen and home appliances") {
        for (let j = -1; j < Kitchen.length; j++) {
          kaha = {
            id: data[i].id,
            name: data[i].name,
            price: data[i].price,
            description: data[i].description,
            category: data[i].category,
            pictur1: data[i].pictur1,
            pictur2: data[i].pictur2
          }
        }
        Kitchen.push(kaha)
      }
    }
    for (let i = 0; i < Kitchen.length; i++) {
      divs4.innerHTML += `<div id="container{i}"><div>
      <img class="imgs" src="${Kitchen[i].pictur1}">
      <img class="imgs" src="${Kitchen[i].pictur2}">
      <br>id:${Kitchen[i].id}<br>name:${Kitchen[i].name}
      <br>price:${Kitchen[i].price}<br>description:${Kitchen[i].description}
      <br>category:${Kitchen[i].category}</div>
      <br><button class="btn" onclick="add(${i})">Add to cart</button>
      <br><form method="get" action="update_product.html"><button class="btn" type ="submit" name="urlNum" value="${Kitchen[i]._id}">update</button></form></div>`;
    }
  })
  .catch((err) => {
    console.log(err);
  })
console.log(Kitchen);

function add(i) {
  axios.patch(`/carts/update`, {
      pictur1: Kitchen[i].pictur1,
      pictur2: Kitchen[i].pictur2,
      id: Kitchen[i].id,
      name: Kitchen[i].name,
      price: Kitchen[i].price,
      description: Kitchen[i].description,
      category: Kitchen[i].category
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("error");
    });
}