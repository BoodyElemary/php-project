///////////////// fill product cards /////////////////////////////
let productsZone = document.getElementById("productsZone");

function fillProducts(productsArr) {
  for (let i = 0; i < productsArr.length; i++) {
    let productsZone = document.getElementById("productsZone");
    let divParent = document.createElement("div");
    let divContainer = document.createElement("div"); ////
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
    img.setAttribute("src", `${productsArr[i]["product_picture"]}`);
    img.classList.add("img-fluid", "shadow", "border-radius-xl");
    divCardBody.classList.add("card-body", "p-3");
    cardBodyContainer.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-between"
    );
    h5Name.innerText = `${productsArr[i]["product_name"]}`;
    divCatInfo.classList.add("tags", "mb-2");
    spanCat.classList.add("badge", "bg-gradient-info");
    spanCat.innerText = `${productsArr[i]["category_name"]}`;
    spanPrice.classList.add("fs-4");
    spanPrice.innerText = `${productsArr[i]["product_price"]}`;
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// set this function for genertaed dom by js
function showToast() {
  let btns = document.getElementsByClassName("addToCart");
  let infoToastDiv = document.getElementById("infoToast");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      // console.log(infoToastDiv);
      infoToastDiv.classList.add("show");
      // console.log(infoToastDiv);
      setTimeout(() => {
        infoToastDiv.classList.remove("show");
      }, 1200);
    });
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//send datat to cart<===================================
let addedProducts = [];
let addBtns = document.getElementsByClassName("addToCart");
function addToCart() {
  for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener("click", (e) => {
      let data = {};
      let clicked = e.target;
      let parent = clicked.parentElement.parentElement;
      let orderdProductName = parent.firstChild.firstChild.firstChild.innerText;
      let orderdProductPrice = parent.firstChild.lastChild.innerText;
      data["orderdProductName"] = orderdProductName;
      data["orderdProductPrice"] = Number(orderdProductPrice);
      addedProducts.push(data);
      console.log(addedProducts);
      fillProductCart(addedProducts[addedProducts.length - 1]);
    });
  }

  showToast();
}
// console.log(addedProducts);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//add items to cart <====================================

// let CartDivContainer = document.getElementById("cartParent");
// console.log(CartDivContainer);

function fillProductCart(addedProducts) {
  // let addedProducts = { orderdProductName: "bjshd", orderdProductPrice: 212 };
  let cartContainer = document.getElementById("cartParent");

  let cartContainer2 = document.createElement("div");
  let cartContainer3 = document.createElement("div"); ////
  let cartProductDiv = document.createElement("div"); ////
  let cartProductName = document.createElement("h6"); ////
  let cartInputDiv = document.createElement("div"); ////
  let cartInput = document.createElement("input"); /////
  let cartPriceDiv = document.createElement("div"); ////
  let cartPriceCurrency = document.createElement("h6"); ////
  let cartPrice = document.createElement("span"); ////
  let cartCancelDiv = document.createElement("div"); ////
  let cartCancelBtn = document.createElement("button"); ////
  let cartCancelIcon = document.createElement("i"); ////

  cartContainer2.classList.add(
    "d-flex",
    "flex-column",
    "mt-2",
    "justify-content-center",
    "align-items-center"
  );
  cartContainer3.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-baseline",
    "col-12"
  );
  cartProductDiv.classList.add("col-5");
  cartInputDiv.classList.add("input-group", "input-group-outline", "mx-1");
  cartInput.classList.add("form-control", "fw-bolder", "text-warning");
  cartInput.setAttribute("type", "number");
  cartInput.setAttribute("onfocus", "focused(this)");
  cartInput.setAttribute("onfocusout", "defocused(this)");
  cartPriceDiv.classList.add("col-3", "mx-2");
  cartCancelDiv.classList.add("col-1");
  cartCancelBtn.classList.add(
    "btn",
    "btn-link",
    "text-danger",
    "p-0",
    "text-center",
    "mt-2",
    "mx-1",
    "fw-bolder"
  );
  cartCancelIcon.classList.add("material-icons");

  cartPriceCurrency.innerText = "EPG ";
  cartCancelIcon.innerText = "clear";
  cartProductName.innerText = `${addedProducts["orderdProductName"]}`;
  cartPrice.innerText = `${addedProducts["orderdProductPrice"]}`;
  cartContainer.appendChild(cartContainer2);
  cartContainer2.appendChild(cartContainer3);
  cartContainer3.appendChild(cartProductDiv);
  cartProductDiv.appendChild(cartProductName);
  cartContainer3.appendChild(cartInputDiv);
  cartInputDiv.appendChild(cartInput);
  cartContainer3.appendChild(cartPriceDiv);
  cartPriceDiv.appendChild(cartPriceCurrency);
  cartPriceCurrency.appendChild(cartPrice);
  cartContainer3.appendChild(cartCancelDiv);
  cartCancelDiv.appendChild(cartCancelBtn);
  cartCancelBtn.appendChild(cartCancelIcon);

  console.log(cartContainer);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  /* <div class="d-flex flex-column mt-2 justify-content-center align-items-center">
              <div class="d-flex justify-content-center align-items-baseline col-12">
                <div class="col-5"><h6>ice espresso</h6></div>
                <div class="input-group input-group-outline mx-1">
                  <input type="number" class="form-control fw-bolder text-warning" onfocus="focused(this)" onfocusout="defocused(this)">
                </div>
                <div class="col-3 mx-2"><h6>EGP<span>2225</span></h6></div>
                <div class="col-1">
                  <button class="btn btn-link text-danger p-0 text-center mt-2 mx-1 fw-bolder">
                    <i class="material-icons">clear</i>
                  </button>
                </div>
              </div>
            </div> */
}

// addToCart();
// viewProduct();

///////////////// fetch func. ////////////////////////////////
async function get_products() {
  let response = await fetch("http://localhost/php-project/server/Home.php", {
    method: "GET",
    // body: product,
    // headers:
  });
  let data = await response.json();
  // console.log(data);
  fillProducts(data);
  // return data;

  // if(data['status']==true){
  //             // window.location="./profile.html"
  //             window.open("http://localhost/lab_3/profile.html","_self");
  //         }
}
get_products();

// let allprouducts = get_profucts();

// console.log(allprouducts);
// console.log(infoToast);
