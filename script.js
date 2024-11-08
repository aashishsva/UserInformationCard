let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let country = document.getElementById("country");
let phn = document.getElementById("phn");
let email = document.getElementById("email");
let state = document.getElementById("state");
let city = document.getElementById("city");

function fillDetail() {
  // Prompt the user for details and store each response in localStorage
  let fname = prompt("Please enter First Name:");
  let lname = prompt("Please enter Last Name:");
  let country = prompt("Please enter Country:");
  let phn = prompt("Please enter Phone Number:");
  let email = prompt("Please enter Email Address:");
  let state = prompt("Please enter State:");
  let city = prompt("Please enter City:");

  // Store responses in localStorage
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  localStorage.setItem("country", country);
  localStorage.setItem("phn", phn);
  localStorage.setItem("email", email);
  localStorage.setItem("state", state);
  localStorage.setItem("city", city);

  // Display stored values in the <span> elements
  document.getElementById("fnameText").innerHTML = fname;
  document.getElementById("lnameText").innerHTML = lname;
  document.getElementById("countryText").innerHTML = country;
  document.getElementById("phnText").innerHTML = phn;
  document.getElementById("emailText").innerHTML = email;
  document.getElementById("stateText").innerHTML = state;
  document.getElementById("cityText").innerHTML = city;
}

document.addEventListener("DOMContentLoaded", () => {
  fillDetail();
  document.getElementById("clearBtn").addEventListener("click", function () {
    localStorage.clear();
    // Reset all fields
    document.getElementById("fnameText").innerHTML = "";
    document.getElementById("lnameText").innerHTML = "";
    document.getElementById("countryText").innerHTML = "";
    document.getElementById("phnText").innerHTML = "";
    document.getElementById("emailText").innerHTML = "";
    document.getElementById("stateText").innerHTML = "";
    document.getElementById("cityText").innerHTML = "";
    // Reset the input fields
    fname.value = "";
    lname.value = "";
    country.value = "";
    phn.value = "";
    email.value = "";
    state.value = "";
    city.value = "";

    fillDetail();
  });
});

