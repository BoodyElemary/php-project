///////////////// GRABBING ELEMENTS /////////////////////////////
// ===== parent elements to append to:
let userNameParent = document.getElementById("userNameParent");
let orderDateParent = document.getElementById("orderDateParent");
let roomNumberParent = document.getElementById("roomNumberParent");
// ===== order info:
let userName_field = document.getElementById("userName");
let orderDate_field = document.getElementById("orderDate");
let roomNumber_field = document.getElementById("roomNumber");
let orderStatus_field = document.getElementById("orderStatus");
// ===== card info :
let productCard_container = document.getElementById("wholeCard_container");
let upperCard_div = document.getElementById("upperCard_div");
let productImage_field = document.getElementById("productImage");
let productCount_field = document.getElementById("productCount");
//---
let bottomCard_div = document.getElementById("bottomCard_div");
let productName_field = document.getElementById("productName");
let productCategory_field = document.getElementById("productCategory");
let productPrice_field = document.getElementById("productPrice");










///////////////////////////////////// >>> FILL ORDER FIELD <<< /////////////////////////////

function fill_Orders(OrdersArray) {
  for (let i = 0; i < OrdersArray.length; i++) {

    let userName = document.createElement("h6"); // user name field
    let orderDate = document.createElement("h6"); // order date field

    
    let divHeader = document.createElement("div"); ////
    let imglink = document.createElement("a"); ////
    let img = document.createElement("img"); /////
    let divCardBody = document.createElement("div"); ////
    let cardBodyContainer = document.createElement("div"); ////
    let divNameInfo = document.createElement("div"); ////
    let h5Name = document.createElement("h5"); ////
    let divCatInfo = document.createElement("div"); ////
    let spanCat = document.createElement("span"); ////
    let spanPrice = document.createElement("span"); ////
    let addToCartContainer = document.createElement("div"); ////
    let addToCartBtn = document.createElement("button"); ////

    divParent.classList.add("col-xl-3", "col-md-6", "mb-xl-0", "mb-4", "mt-4");
    divContainer.classList.add("card", "card-blog", "card-plain");
    divHeader.classList.add("card-header", "p-0", "mt-n4", "mx-3");
    imglink.classList.add("d-block", "shadow-xl", "border-radius-xl");
    img.setAttribute("src", `${OrdersArray[i]["product_picture"]}`);
    img.classList.add("img-fluid", "shadow", "border-radius-xl");
    divCardBody.classList.add("card-body", "p-3");
    cardBodyContainer.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-between"
    );
    h5Name.innerText = `${OrdersArray[i]["product_name"]}`;
    divCatInfo.classList.add("tags", "mb-2");
    spanCat.classList.add("badge", "bg-gradient-info");
    spanCat.innerText = `${OrdersArray[i]["category_name"]}`;
    spanPrice.classList.add("fs-4", "product-price");
    spanPrice.innerText = `${OrdersArray[i]["product_price"]}`;
    addToCartContainer.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-end",
      "gap-3"
    );
    addToCartBtn.setAttribute("type", "button");
    addToCartBtn.classList.add(
      "btn",
      "btn-primary",
      "btn-sm",
      "mb-0",
      "toast-btn",
      "customAlert",
      "addToCart"
    );
    addToCartBtn.innerText = "Add To Cart";
    addToCartBtn.dataset.target = "#infoToast";
    divContainer.appendChild(divHeader);
    divContainer.appendChild(divCardBody);
    divContainer.appendChild(addToCartContainer);
    divHeader.appendChild(imglink);
    imglink.appendChild(img);
    divCardBody.appendChild(cardBodyContainer);
    divCardBody.appendChild(addToCartContainer);
    cardBodyContainer.appendChild(divNameInfo);
    cardBodyContainer.appendChild(spanPrice);
    divNameInfo.appendChild(h5Name);
    divNameInfo.appendChild(divCatInfo);
    divCatInfo.appendChild(spanCat);
    addToCartContainer.appendChild(addToCartBtn);
    divParent.appendChild(divContainer);
    productsZone.appendChild(divParent);
  }
  addToCart();
}






async function get_Orders() {
  let response = await fetch("http://localhost/php-project/server/Orders.php", {
    method: "GET",
    // body: product,
    // headers:
  });
  let data = await response.json();
  console.log(data);
  // return data;

  // if(data['status']==true){
  //             // window.location="./profile.html"
  //             window.open("http://localhost/lab_3/profile.html","_self");
  //         }
}
get_Orders();
