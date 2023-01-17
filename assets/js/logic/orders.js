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
