let selector = document.getElementById("users");
selector.addEventListener("change", function(){
   let orders = document.getElementById("orders");
   let ordersProductsDetails = document.getElementById("ordersProductsDetails");
   orders.style = " display: none !important";
   ordersProductsDetails.style = " display: none !important";
    
   getOrdersOFuser(this.value, "usersTable", "orders");
});

getAllOrders("usersTable", "orders");

let search = document.getElementById("search");
search.onclick = function(){
   let dateFrom = document.getElementById("dateFrom").value;
   let dateTo = document.getElementById("dateTo").value;
   getOrdersAtTime(dateFrom, dateTo, "usersTable", "orders");
   
}

