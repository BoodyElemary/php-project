
async function getMyOrders(targetTable) {
    let response = await fetch("http://localhost/php-project/server/myOrders.php", {
        method: "GET",
    });
    let data = await response.json();
    let table = targetTable.getElementsByTagName("table")[0];
    let tableView = document.getElementById("ordersProductsDetails");
    table.innerHTML="";
    let tableHead = createOrderHead(data[0]);
    table.append(tableHead);
    tableBody = document.createElement("tbody");
    table.append(tableBody);
    data.forEach(element => {
        let row = createMyOrdersRow(element, element['order_id'], tableView, getOrdersProducts);
        tableBody.append(row);
    });
   
}

function createOrderHead(rowContent){
    let tableHead = document.createElement("thead");
    let tr= document.createElement("tr");
    for (const key in rowContent) {
        if (Object.hasOwnProperty.call(rowContent, key)) {
            if(key =="user_id" || key == "order_id" || key == "product_id" || key == "admin_id" || key == "category_id"){
                continue;
            }
            else{
                let td = createTableHeadColumn(key);
                tr.append(td);  
            }
       
        }
    }

    let td = createTableHeadColumn("Action");
    tr.append(td);
    tableHead.append(tr);
    return tableHead;

}

function createMyOrdersRow(rowContent, btnEventRefrence, tableView, calledFunction, userName){
    let tr= document.createElement("tr");
    let firstKey = Object.keys(rowContent)[1];
    for (const key in rowContent) {
        if (Object.hasOwnProperty.call(rowContent, key)) {
            let td = "";
            if(key =="user_id" || key == "order_id" || key == "product_id" || key == "admin_id" || key == "category_id"){
                continue;
            }
            else if(key == firstKey){
                td = createTablebodyFirstColumn(rowContent[firstKey], btnEventRefrence, tableView, calledFunction, userName);
                tr.append(td);
            }
            else{
                td = createTablebodyColumn(rowContent[key]);
                tr.append(td);   
            }   
        }

        
    }
   if(rowContent['order_status']==="processing"){
        td = createTablebodyColumn("");
        td.classList.add(...["align-middle"]);
        td.innerHTML = `                            <button
        class="btn  btn-sm bg-gradient-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onclick = "cancel(${rowContent['order_id']})"
    >
        Cancel
    </button>`;
    tr.append(td);
   }
   else{
    td = createTablebodyColumn("");
        td.classList.add(...["align-middle"]);   
        tr.append(td);             
   }
    return tr;
}

function cancel(id){
    let model = document.getElementById("exampleModal");
    model.style = "display: block; opacity: 1;";
    let confirm = document.getElementById("ok");
    confirm.onclick = function(){
        cancelOrder(id);
    }
}
async function cancelOrder(id){
    let response = await fetch("http://localhost/php-project/server/cancelOrder.php", {
        method: "post",
        body: JSON.stringify({"order_id" : id}),
        headers:{
        "Content-Type": "application/json",
        }
        });
        let data = await response.json();
        if(data['success']){
            window.location.reload();
        }
        else{
            alert("error");
        }
}


async function getOrdersAtTime(dateFrom, dateTo, targetTable) {
    let response = await fetch("http://localhost/php-project/server/myOrdersWithTime.php", {
        method: "post",
        body: JSON.stringify({"dateFrom" : dateFrom, "dateTo": dateTo}),
        headers:{
        "Content-Type": "application/json",
        }

    });
    let data = await response.json();
    let table = targetTable.getElementsByTagName("table")[0];
    let tableView = document.getElementById("ordersProductsDetails");
    table.innerHTML="";
    let tableHead = createOrderHead(data[0]);
    table.append(tableHead);
    tableBody = document.createElement("tbody");
    table.append(tableBody);
    data.forEach(element => {
        let row = createMyOrdersRow(element, element['order_id'], tableView, getOrdersProducts);
        tableBody.append(row);
    });
}

let table = document.getElementById("myOrders");
let search = document.getElementById("search");
search.onclick = function(){
   let dateFrom = document.getElementById("dateFrom").value;
   let dateTo = document.getElementById("dateTo").value;
   getOrdersAtTime(dateFrom, dateTo, table);
   
}
getMyOrders(table);

