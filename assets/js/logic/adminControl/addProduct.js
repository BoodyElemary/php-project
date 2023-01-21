let submit = document.getElementById("save");
submit.onclick = function(){
    let productName = document.getElementById("product-name").value;
    let productPrice = document.getElementById("product-price").value;
    let productAmount = document.getElementById("product-amount").value;
    let productCategory = document.getElementById("Category").value;
    let productImage = document.getElementById("product_image").files[0];
    let formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productAmount", productAmount);
    formData.append("productCategory", productCategory);
    formData.append("productImage", productImage);
    addProduct(formData);
    
}

async function getAllCatgories(){
  let response = await fetch("http://localhost/php-project/server/adminPages/allCategory.php", {
    method: "GET",
  });
  let data = await response.json();
  let select = document.getElementById("Category");
  select.innerHTML = "";
  let option = document.createElement("option");
  option.value = "";
  option.disabled = "";
  option.innerHTML = "Select Category";
  select.append(option);
  
  data.forEach(element => {
    let option = document.createElement("option");
    option.value = element['category_id'];
    option.innerHTML = element['category_name'];
    select.append(option);
    
  });
}


getAllCatgories();

async function addProduct(formdata) {
    let response = await fetch("http://localhost/php-project/server/adminPages/addProduct.php", {
      method: "POST",
      body: formdata,
    });
    let data = await response.json();
    let msgContainer = document.getElementById("server-msg");
    if(data['error']){
      msgContainer.innerHTML = data['msg'];
      msgContainer.style.display="block";
      msgContainer.style.color = "red";
    }
    else{
      msgContainer.innerHTML = data['msg'];
      msgContainer.style.color = "#397e5e";
      msgContainer.style.display="block";
    }
}

let addCategoryBtn= document.getElementById("addCategory");
let categoryName= document.getElementById("category-name");

addCategoryBtn.onclick = function(){
  addCategory(categoryName.value);
}

async function addCategory(CName){
  let response = await fetch("http://localhost/php-project/server/adminPages/addCategory.php", {
    method: "post",
    body: JSON.stringify({"C_name" : CName}),
    headers:{
    "Content-Type": "application/json",
    }

});
let data = await response.json();
if(data['success']){
  getAllCatgories();
}
else{
  alert(data['msg']);
}
alert("category Successfuly Added");
}