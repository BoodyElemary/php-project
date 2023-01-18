// ===== parent element to append to:
let wholeOrderDiv = document.getElementById("wholeOrderDiv");
/*
 *
 */

///////////////////////////////////// >>> FILL ORDER FIELD <<< /////////////////////////////
let product_loop_begin = 0; // index to start looping for product on

function fill_Orders(OrdersArray) {
  //----- outer loop to creat orders , inner loop to get ordered products
  for (let i = 0; i < OrdersArray["orders"].length; i++) {
    let product_card_array = []; // insert products here
    product_card_array.length = 0;
    for (
      let j = product_loop_begin;
      j < product_loop_begin + Number(OrdersArray["orders"][i]["no_products"]);
      j++
    ) {
      product_card_array.push(`
        <div class="card-body px-0 pb-2 d-flex">
        <div class="row">
        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
        <div class="card card-blog card-plain w-md-75">
        <div class="card-header p-0 mt-n4 mx-3" onclick=alerrt()>
        <a class="d-block shadow-xl border-radius-xl">
        <img
        src="${OrdersArray["products"][j]["product_picture"]}"
        alt="img-blur-shadow"
        class="img-fluid shadow border-radius-xl position-relative"
        />
                        <span
                        class="position-absolute top-20 start-75 translate-middle badge rounded-pill bg-warning p-2"
                        >
                        x <span id="Itemscount">${OrdersArray["products"][j]["quantity"]}</span>
                        <span class="visually-hidden">unread messages</span>
                        </span>
                        </a>
                        </div>
                        <div class="card-body p-3">
                        <div
                        class="d-flex align-items-center justify-content-between"
                        >
                        <div>
                        <h5>${OrdersArray["products"][j]["product_name"]}</h5>
                        <div class="tags mb-2">
                        <span class="badge bg-gradient-info"
                        >${OrdersArray["products"][j]["category_name"]}</span
                        >
                        </div>
                        </div>
                        <span class="fs-4">${OrdersArray["products"][j]["product_price"]}</span>
                        </div>
                        </div>
                        </div>
                        </div>
                        <!-- here we can add products -->
                        </div>
                        </div>`);
    }
    product_loop_begin =
      product_loop_begin + Number(OrdersArray["orders"][i]["no_products"]);

    //----- stating the status of the order
    let selected1 = "";
    let selected2 = "";
    let selected3 = "";
    if (OrdersArray["orders"][i]["order_status"] == "progress") {
      selected1 = "selected";
    } else if (OrdersArray["orders"][i]["order_status"] == "out for delivery") {
      selected2 = "selected";
    } else {
      selected3 = "selected";
    }

    //----- creating orders
    wholeOrderDiv.innerHTML += `      <div class="row">
    <div class="col-12">
      <div class="card my-4"> 
      <div class="card">
      <div
      class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
          >
          <div
              class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">
              ${OrdersArray["orders"][i]["user_name"]} Orders
              </h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      <h6>Order Date</h6>
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      <h6>Name</h6>
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      <h6>Room</h6>
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      <h6>Action</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex px-2 py-1">
                          <div
                            class="d-flex flex-row justify-content-center align-items-baseline"
                          >
                            <h6 class="mb-0 text-sm">
                            ${OrdersArray["orders"][i]["order_date"]}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">
                        EGP <span id="orderAmount"> ${OrdersArray["orders"][i]["total"]} </span>
                      </p>
                    </td>

                    <td>
                      <p class="text-xs font-weight-bold mb-0">
                        <span>${OrdersArray["orders"][i]["room_no"]}</span>
                      </p>
                    </td>

                    <td>
                      <div class="input-group input-group-outline w-50">
                        <select
                          class="form-control fw-bolder text-warning"
                          id="statuSelection"
                          style="border-radius: 0 !important"
                          aria-placeholder="select-user"
                          onchange=lolo()
                        >
                          <option value="progress" ${selected1}>progress</option>
                          <option value="out for delivery" ${selected2}>out for delivery</option>
                          <option value="delivered" ${selected3}>delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>  
              </table>
            </div>
          </div>
        </div>
        ${product_card_array}
      </div>
    </div>
  </div>`;
  }
}

//------ receving and sending function
async function get_Orders() {
  let response = await fetch("http://localhost/php-project/server/Orders.php", {
    method: "GET",
    // body: product,
    // headers:
  });
  let data = await response.json();
  // console.log(data);

  fill_Orders(data);
  // fill_cards(data["products"]);
  // if(data['status']==true){
  //             // window.location="./profile.html"
  //             window.open("http://localhost/lab_3/profile.html","_self");
  //         }
}
get_Orders();

function alerrt() {
  alert("ttttttttt");
}

function lolo() {
  for (let i = 0; i < statuSelection.length; i++)
    alert(statuSelection[i].value);
}
