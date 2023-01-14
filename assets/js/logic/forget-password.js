// GRABBING THE ELEMTNS //////////////////////////////
let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let roomNumberField = document.getElementById("roomnumber");
let passwordField = document.getElementById("newpassword");
let passwordConfirmField = document.getElementById("passwordconfirmation");
let warningMsg = document.getElementById("warningmsg");
let changePassword = document.getElementById("changepassword");
let errorToastText = document.getElementById("errormsg");
let errorToastBody = document.getElementById("dangerToast");

////// password confirm //////////////////////////
passwordConfirmField.addEventListener("keyup", function () {
  if (passwordConfirmField.value != passwordField.value) {
    warningMsg.style.display = "block";
  } else {
    warningMsg.style.display = "none";
  }
});

function showToast(data) {
  errorToastText.innerText = data["msg"];
  errorToastBody.classList.add("show");
  setTimeout(() => {
    errorToastBody.classList.remove("show");
  }, 4000);
}

// ON CLICK //////////////////////////////

changePassword.addEventListener("click", (e) => {
  e.preventDefault();

  // GETTING THE VALUES //////////////////////////////
  let name = nameField.value;
  let email = emailField.value;
  let roomNo = roomNumberField.value;
  let password = passwordField.value;
  let confirmedPassword = passwordConfirmField.value;

  /////// CONFIRMATION BEFORE SUMBIT ////////////////////
  if (password != confirmedPassword) {
    warningMsg.style.display = "block";
  } else {
    // CREATING JSON//////////////////////////////
    let Data = {
      name: name,
      email: email,
      roomNo: roomNo,
      password: password,
    };
    let changedData = JSON.stringify(Data);

    console.log(changedData);

    // SENDING DATA /////////////////////////////
    send_changes(changedData);
  }
});

async function send_changes(formdata) {
  let response = await fetch(
    "http://localhost/php-project/server/forget-password.php",
    {
      method: "POST",
      body: formdata,
    }
  );
  let data = await response.json();
  console.log(data);

  if (data["status"] == true) {
    showToast(data);
  } else {
    window.open(
      "http://localhost/php-project/user_pages/sign-in.html",
      "_self"
    );
  }
}
