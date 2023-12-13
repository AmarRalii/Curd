

var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCatInput = document.getElementById('productCat');
var productDescInput = document.getElementById('productDesc');
var btn = document.getElementById('btn');
var tabelRow = document.getElementById('tableRow');

var productList = []

btn.onclick = function () {
    addProdect()
    clearFoem()
    display()
}

function addProdect() {

    var prodect = {
        productName : productNameInput.value,
        productPrice : productPriceInput.value,
        productCat : productCatInput.value,
        productDesc : productDescInput.value,
    }
    productList .push(prodect);
    display()
}

function display(){

    var box = '';
    for(var i = 0; i<productList.length;i++)
    {
        box+=`
        <tr>
        <td>${i + 1}</td>
        <td>${productList[i].productName}</td>
        <td>${productList[i].productPrice}</td>
        <td>${productList[i].productCat}</td>
        <td>${productList[i].productDesc}</td>
        <td><button class="btn btn-danger" onclick = deletefun(${i})>Delete</button></td>
        <td><button class="btn btn-primary">Update</button></td>
        </tr> `
    }
    tableRow.innerHTML = box
}

function deletefun(index){
    productList.splice(index,1)
    display()
}
function clearFoem(){
    productNameInput.value='';
    productPriceInput.value='';
    productCatInput.value='';
    productDescInput.value='';
    display()
}