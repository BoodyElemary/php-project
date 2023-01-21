let productName = document.getElementById("product-name");
let productPrice = document.getElementById("product-price");
let productStatus = document.getElementById("product-status");
let productCategory = document.getElementById("Category");
let productImage = document.getElementById("product_image");
let submit = document.getElementById("save");

let productId = localStorage.getItem("product_id");
productName.value = localStorage.getItem("product_name");
productPrice.value = localStorage.getItem("product_price");
productStatus.value = localStorage.getItem("product_availability");
productCategory.value = localStorage.getItem("category_id");
image = localStorage.getItem("product_picture");
submit.onclick = function(){
    // if(productImage.value){
    //   image = productImage.files[0];
    // }
    let formData = new FormData();
    formData.append("productId", productId);
    formData.append("productName", productName.value);
    formData.append("productPrice", productPrice.value);
    formData.append("productStatus", productStatus.value);
    formData.append("productCategory", productCategory.value);
    formData.append("productImage", image);
  
    updateProduct(formData);
    
}

async function updateProduct(formdata) {
    let response = await fetch("http://localhost/php-project/server/adminPages/editProduct.php", {
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
  