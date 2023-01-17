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
    spanPrice.classList.add("fs-4", "product-price");
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

//////////////// >>>> ADD TO CART <<<< ////////////

// ======== ARRAYS:
let addedProducts = [];
let enterdCartItems = [];
let arrayCheck = [];
let avilablityCheck = false;
// === for prices in cart :
let pricesInCartArr = [];
// ===============
console.log(pricesInCartArr);

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

      // ======= for prices in cart ======

      // ==================================

      let addedItemToCart = addedProducts[addedProducts.length - 1];
      // console.log(addedProducts);
      if (addedProducts.length >= 1) {
        for (let i = 0; i < addedProducts.length; i++) {
          arrayCheck.push(addedProducts[i]);
        }
        arrayCheck.pop();
        // console.log(arrayCheck);
        for (let i = 0; i < arrayCheck.length; i++) {
          if (
            arrayCheck[i]["orderdProductName"] ===
            addedItemToCart["orderdProductName"]
          ) {
            // console.log("exist");

            avilablityCheck = true;

            // console.log(targetedInput);
          }
          // if (arrayCheck.includes(addedItemToCart) === true) {

          // }
        }

        if (avilablityCheck === true) {
          let targetedInput = document.getElementById(
            `${addedItemToCart["orderdProductName"]}`
          );
          let counterValue = parseInt(targetedInput.value);
          counterValue = counterValue + 1;
          // console.log(counterValue);
          targetedInput.setAttribute("value", counterValue);
        }

        if (avilablityCheck === false) {
          fillProductCart(addedItemToCart);
          // console.log(addedItemToCart);
          enterdCartItems.push(addedItemToCart);
        }
      } else if (addedProducts.length == 0) {
        fillProductCart(addedItemToCart);
        // console.log(addedItemToCart);
        enterdCartItems.push(addedItemToCart);
      }
      // console.log(arrayCheck);
      // console.log(enterdCartItems);
      // console.log(addedItemToCart);
      // console.log(arrayCheck.includes(addedItemToCart));
      // console.log(addedProducts.pop().includes(addedItemToCart));
      avilablityCheck = false;
      // remove item from cart;

      let removeFromCart = document.getElementsByClassName("removeFromCart");
      for (let i = 0; i < removeFromCart.length; i++) {
        removeFromCart[i].addEventListener("click", (e) => {
          let clicked = e.target;
          // console.log(clicked);
          let container = clicked.parentElement.parentElement.parentElement;
          let itemName = container.firstChild.firstChild.innerText;
          // console.log(container);
          // console.log(itemName);

          let addedProductsLength = addedProducts.length;
          // console.log(arrChecksLength);
          while (addedProductsLength--) {
            let index2 = arrayCheck
              .map((object) => object.orderdProductName)
              .indexOf(itemName);

            // console.log(index);
            if (index2 > -1) {
              addedProducts.splice(index2, 1);
            }
          }

          let arrChecksLength = arrayCheck.length;
          // console.log(arrChecksLength);
          while (arrChecksLength--) {
            let index = arrayCheck
              .map((object) => object.orderdProductName)
              .indexOf(itemName);

            // console.log(index);
            if (index > -1) {
              arrayCheck.splice(index, 1);
            }
          }
          // console.log(arrChecksLength);
          let index1 = enterdCartItems
            .map((object) => object.orderdProductName)
            .indexOf(itemName);

          // console.log(index);
          console.log(enterdCartItems);
          if (index1 > -1) {
            enterdCartItems.splice(index1, 1);
          }
          container.remove();
          console.log(arrayCheck);

          // avilablityCheck = false;
        });
      }

      // console.log(removeFromCart);
      // changeTotal();
    });
  }
  showToast();
}

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
  cartInput.classList.add(
    "form-control",
    "fw-bolder",
    "text-warning",
    "inputs"
  );
  cartInput.setAttribute("type", "number");
  cartInput.setAttribute("onfocus", "focused(this)");
  cartInput.setAttribute("onfocusout", "defocused(this)");
  cartInput.setAttribute("min", "1");
  cartInput.setAttribute("value", "1");
  cartInput.setAttribute("id", `${addedProducts["orderdProductName"]}`);
  cartInput.style.width = "60px";
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
    "fw-bolder",
    "removeFromCart"
  );
  cartPrice.classList.add("cartPriceNumber");

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

  // console.log(cartContainer);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  fillProducts(data["products"]);
  // return data;

  // if(data['status']==true){
  //             // window.location="./profile.html"
  //             window.open("http://localhost/lab_3/profile.html","_self");
  //         }
}
get_products();

function changeTotal() {
  let prices = document.getElementsByClassName("cartPriceNumber");
  let totalPay = document.getElementById("totalPay").innerText;
  let Total = Number(totalPay);
  let itemsCount = document.getElementsByClassName("inputs");
  for (let i = 0; i < prices.length; i++) {
    let itemCart = prices[i].parentElement.parentElement.parentElement;
    // console.log(itemsCount[i].value);
    // Total = Total + parseInt(prices[prices.length - 1].innerText);
    // console.log(Total);

    let beforeInputStep = Number(itemsCount[i].value);
    itemsCount[i].addEventListener("change", () => {
      // console.log(beforeInputStep);
      let itemNo = Number(itemsCount[i].value);
      let price = Number(prices[i].innerText);
      let itemsInCart_Data = {};

      itemsInCart_Data["name"] = itemCart.firstChild.firstChild.innerText;

      // console.log(itemNo);
      // console.log(price);
      // console.log(Total);
      if (beforeInputStep < itemNo) {
        Total = 0;
        Total += itemNo * price;
        itemsInCart_Data["price"] = Total;
      } else if (beforeInputStep > itemNo) {
        Total = 0;
        Total += itemNo * price;
        itemsInCart_Data["price"] = Total;
      }

      if (pricesInCartArr.length === 0) {
        pricesInCartArr.push(itemsInCart_Data);
      } else {
        for (let i = 0; i < pricesInCartArr.length; i++) {
          if (
            pricesInCartArr[i]["name"] ==
            itemCart.firstChild.firstChild.innerText
          ) {
            console.log("first");
            pricesInCartArr[i]["price"] = Total;
          } else {
            console.log("second");
            pricesInCartArr.push(itemsInCart_Data);
          }
        }
      }

      console.log(pricesInCartArr);
      totalPay = document.getElementById("totalPay");
      totalPay.innerText = Total;
      beforeInputStep = Number(itemsCount[i].value);
    });
  }
  // console.log(prices);
}
changeTotal();

function initiatOrder() {
  let confimBtn = document.getElementById("confirmBtn");
  let itemsCount = document.getElementsByClassName("inputs");
  confimBtn.addEventListener("click", () => {
    console.log("first");
    console.log(enterdCartItems);
    for (let i = 0; i < itemsCount.length; i++) {
      // console.log(itemsCount[i].value);
      enterdCartItems[i].productsCount = parseInt(itemsCount[i].value);
    }
    console.log(enterdCartItems);
  });
}

initiatOrder();
