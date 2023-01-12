let productsZone = document.getElementById("productsZone");

//////////////// get products array ///////////////////

function get_products_array(products) {
  //   for (let j = 0; j < products.length; j++) {
  //     var product_name = products[j]["product_name"];
  //     var product_picture = products[j]["product_picture"];
  //     var product_price = products[j]["product_price"];
  //     var category_name = products[j]["category_name"];
  //     console.log(category_name);
  //   }
}

///////////////// fill product cards /////////////////////////////
function fillProducts(productsArr) {
  for (let i = 0; i < productsArr.length; i++) {
    let productsZone = document.getElementById("productsZone");

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

    divContainer.classList.add("card", "card-blog", "card-plain");
    divHeader.classList.add("card-header", "p-0", "mt-n4", "mx-3");
    imglink.classList.add("d-block", "shadow-xl", "border-radius-xl");
    img.setAttribute("src", `${productsArr[i]["product_picture"]}`);
    img.classList.add("img-fluid", "shadow", "border-radius-xl", "w-25");
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
      "btn-0",
      "toast-btn"
    );
    addToCartBtn.innerText = "Add To Cart";
    addToCartBtn.setAttribute("data-target", "infoToast");

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

    productsZone.appendChild(divContainer);
  }
}

// addToCart();
// viewProduct();

{
  /* <div class="card card-blog card-plain">
  {" "}
  // container
  <div class="card-header p-0 mt-n4 mx-3">
    {" "}
    // divheader
    <a class="d-block shadow-xl border-radius-xl">
      {" "}
      /imglink
      <img
        src="https://ibc-static.broad.msu.edu/sites/globaledge/blog/55607.jpg" //img
        alt="img-blur-shadow"
        class="img-fluid shadow border-radius-xl"
      />
    </a>
  </div>
  <div class="card-body p-3">
    {" "}
    // cardbody
    <div class="d-flex align-items-center justify-content-between">
      {" "}
      //cardbodycontainer
      <div>
        {" "}
        // divnameinfo
        <h5>Coffe Late</h5> // h5name
        <div class="tags mb-2">
          {" "}
          //divcatinfo
          <span class="badge bg-gradient-info">Hot Drink</span> //spancat
        </div>
      </div>
      <span class="fs-4">450 EGP</span> //spanprice
    </div>
    <div class="d-flex align-items-center justify-content-end gap-3">
      {" "}
      //addtocartcontainer
      <button
        type="button"
        class="btn btn-primary btn-sm mb-0 toast-btn" // addtocartbtn
        data-target="infoToast"
      >
        add to cart
      </button>
    </div>
  </div>
</div>; */
}

///////////////// fetch func. ////////////////////////////////
async function get_products() {
  let response = await fetch(
    "http://localhost/poject/project/php-project/server/Home.php",
    {
      method: "GET",
      // body: product,
      // headers:
    }
  );
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
