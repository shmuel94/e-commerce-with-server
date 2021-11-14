function deletePd(id) {
    axios
    .delete(`/products/${id}`)
    .then(function (response){
        alert("product was deleted");
        console.log(response.data);
    })
    .catch(function (error){
        console.log(error);
    });
}