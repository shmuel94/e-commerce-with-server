// function update(i) {
//   console.log(data[i]);
//  document.getElementById("name").value = data[i].name
//  document.getElementById("price").value = data[i].price
//  document.getElementById("des").value = data[i].des
//  document.getElementById("category").value = data[i].category
//  document.getElementById("img1").value = data[i].img1
//  document.getElementById("img2").value = data[i].img2
const url = window.location.href;
const objUrl = new URL(url);
const productId = objUrl.searchParams.get("update");
console.log(productId);
  let form = document.getElementById("pformss");
  form.addEventListener("submit", updProduct);
  
  function updProduct(e) {
      e.preventDefault();
      let name = document.getElementById("name").value;
      let price = document.getElementById("price").value;
      let description = document.getElementById("des").value;
      let category = document.getElementById("category").value;
      let pictur1 = document.getElementById("img1").value;
      let pictur2 = document.getElementById("img2").value;
      console.log(name);
      axios
          .patch(`/products/${productId}`, {
              name: name,
              price: price,
              description: description,
              category: category,
              pictur1: pictur1,
              pictur2: pictur2
          })
          .then(function (response) {
              console.log(productId);
              alert("producet was update")
            //   console.log(response.data);
          })
          .catch(function (error) {
              console.log("error in update action!!");
          });
  }
// }