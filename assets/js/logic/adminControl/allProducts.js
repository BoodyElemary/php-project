
async function getAllProducts(tableId) {
    let response = await fetch("http://localhost/php-project/server/adminPages/allProducts.php", {
        method: "GET",
    });
    let data = await response.json();

    let table = document.getElementById(tableId);
    table.innerHTML="";
    tableHead = document.createElement("thead");
    table.append(tableHead);
    let headRow = `
    <tr>
        <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
        >
            <h6>Product</h6>
        </th>
        <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
        >
            <h6>Price</h6>
        </th>
        <th
            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
        >
            <h6>Image</h6>
        </th>
        <th
        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
        >
            <h6>Status</h6>
        </th>
        <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
        >
            <h6>Action</h6>
        </th>
    </tr>
    `;
    tableHead.innerHTML = headRow;
    table.append(tableHead);
    tableBody = document.createElement("tbody");
    table.append(tableBody);
    data.forEach(element => {
      tr = `
      <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div
                          class="d-flex flex-column justify-content-center"
                        >
                          <h6 class="mb-0 text-sm ps-3">${element['product_name']}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">
                         <span id="orderAmount">${element['product_price']} EGP</span>
                      </p>
                    </td>
                    <td class="align-middle text-center text-sm">
                        <div class="avatar avatar-xl position-relative">
                            <img 
                              src="../server/products_images/${element['product_picture']}"
                              alt="profile_image"
                              class="w-100 border-radius-lg h-75 shadow-sm"
                            />
                          </div>
                    </td>
                    <td>
                    <p class="text-xs font-weight-bold mb-0">
                       <span id="orderAmount">${element['product_availability']} </span>
                    </p>
                  </td>
                    <td>
                    <button
                    class="btn  btn-sm bg-gradient-info me-3"
                    onclick = 'edit(${element['product_id']}, "${element['product_name']}", ${element['product_price']}, "${element['product_availability']}", "${element['product_picture']}", ${element['category_id']})';
                        >
                            edit
                        </button>
                            <button
                            class="btn  btn-sm bg-gradient-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onclick = "confirmDelete(${element['product_id']})"
                        >
                            Delete
                        </button>
                    </td>
          
                  </tr>
      `;

      table.innerHTML += tr;
    });
}

getAllProducts("products");

function confirmDelete(id){
    let model = document.getElementById("exampleModal");
    model.style = "display: block; opacity: 1;";
    let confirm = document.getElementById("ok");
    confirm.onclick = function(){
        deleteProduct(id);
    }
}


function edit(product_id, product_name, product_price, product_availability, product_picture, category_id){
    localStorage.setItem("product_id", product_id);
    localStorage.setItem("product_name", product_name);
    localStorage.setItem("product_price", product_price);
    localStorage.setItem("product_availability", product_availability);
    localStorage.setItem("product_picture", product_picture);
    localStorage.setItem("category_id", category_id);
    
    window.open("editProduct.html", "_self");

}

async function deleteProduct(id){
    
    let response = await fetch("http://localhost/php-project/server/adminPages/deleteProduct.php", {
    method: "post",
    body: JSON.stringify({"product_id" : id}),
    headers:{
    "Content-Type": "application/json",
    }
    });
    let data = await response.json();
    if(data['success']){
        window.location.reload();
    }

    
}