// let form = document.getElementById("pformss");
form.addEventListener("submit", updProduct);
let urlId = window.location.href;
let url = new URL(urlId);
let urlNum = url.searchParams.get("urlNum");
console.log(urlNum);
console.log(urlId);
console.log(url);


function updProduct(e) {
    e.preventDefault();
    let id = document.getElementById("pid").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("des").value;
    let category = document.getElementById("category").value;
    let pictur1 = document.getElementById("img1").value;
    let pictur2 = document.getElementById("img2").value;
     axios
        .patch(`/products/:${urlNum}`, {
            id: id,
            name:name,
            price:price,
            description:description,
            category:category,
            pictur1:pictur1,
            pictur2:pictur2
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log("error in update action!!");
        });
}