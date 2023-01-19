// ===== parent element to append to:
let wholeOrderDiv = document.getElementById("wholeOrderDiv");
//---- grabbing elements for functions
let logout_Btn = document.getElementById("logoutBtn");
//---- elemnts for admin data
let adminName = document.getElementById("adminName");
let adminImage = document.getElementById("adminImage");

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
                      <h6>Total</h6>
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
                          onchange=change_status(this)
                          onclick=get_current_value(this)
                        >
                          <option class = "opt" value="progress" ${selected1}>progress</option>
                          <option class = "opt" value="out for delivery" ${selected2}>out for delivery</option>
                          <option class = "opt" value="delivered" ${selected3}>delivered</option>
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
  });
  let data = await response.json();
  console.log(data);
  if (data["notAuthorized"] == true) {
    window.location = "http://localhost/php-project/admin/AdminSign-in.html";
  } else {
    fill_Orders(data);
    admin_data(data);
  }
}
get_Orders();

//////////////////////////////// LOUGOUT FUNCTION ////////////////////////////////////
logout_Btn.addEventListener("click", async function () {
  let formData = new FormData();
  formData.append("logout", true);
  let logoutSent = await fetch(
    "http://localhost/php-project/server/Admin_Sign_In.php",
    {
      method: "post",
      body: formData,
    }
  );
  let logoutResponse = await logoutSent.json();
  if (logoutResponse["loggedout"] == true) {
    window.location = "http://localhost/php-project/admin/AdminSign-in.html";
  }
});

///////////////// changing order status ////////////////////////////////
//----- get current state
let currentState;
function get_current_value(state) {
  currentState = state.value;
}

//------ changing the state
function change_status(status) {
  //------- all values in order
  let options = status.children;
  let values = [];
  for (let i = 0; i < options.length; i++) {
    values.push(options[i].value);
  }

  //------- gathering order info
  let newState = status.value;
  if (values.indexOf(newState) == values.indexOf(currentState)) {
    alert("Choose Next State");
    newState = currentState;
  } else if (values.indexOf(newState) < values.indexOf(currentState)) {
    alert("You can NOT goback to previous status");
    status.value = currentState;
  } else {
    let targetOrder =
      status.parentElement.parentElement.parentElement.firstElementChild
        .firstElementChild.firstElementChild.firstElementChild.firstElementChild
        .innerText;

    //------- sending new data
    async function set_Status() {
      let formData = new FormData();
      formData.append("status", newState);
      formData.append("targetOrder", targetOrder);
      let sendStatus = await fetch(
        "http://localhost/php-project/server/Orders.php",
        {
          method: "post",
          body: formData,
        }
      );
    }
    set_Status();
  }
}

//////////////////////// fill admin data ////////////////////////////
function admin_data(array) {
  adminName.innerText = array["admin"]["admin_name"];
  adminImage.src = array["admin"]["admin_pic"];
}
