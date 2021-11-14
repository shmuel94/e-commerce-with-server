let total = document.getElementById("total");
const tableDivs = document.getElementById("cartTable");
let customerCart = [];
let data;
function getCart() {
    axios
        .get("/carts")
        .then((response) => {
            data = response.data[0].cart
            let sum = 0;
            let sumArray = []
            for (let i = 0; i < data.length; i++) {
                console.log(data);
                tableDivs.innerHTML += `<tr class="cartTableRow">
    <td><img id="pic" src="${data[i].pictur1}"></td>
    <td>${data[i].name}</td>
    <td>${data[i].description}</td>
    <td>${data[i].category}</td>
    <td>${data[i].price}</td>
    <td><button class="btn" onclick="deleteProduct(${i})">-</button></td>
    </tr>`
                sum += Number(data[i].price);
                sumArray.push(Number(data[i].price));
            }
            total.innerText += `total : ${sum} NIS`
            //  } 
        })
}
getCart();


function deleteProduct(i) {
    console.log(data[i].id);
    axios
        .patch(`/carts/delete`,{id:data[i].id})
        .then(function (response) {
            // let data = response.data[0].cart
            alert("delete is complited!!!");
            // window.setTimeout(function(){location.reload()},0);
            console.log(response);
        })
        .catch(function (error) {
            console.log("error");
        })
}