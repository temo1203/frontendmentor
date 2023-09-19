let EmailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
let main = document.getElementById("main");
let success = document.getElementById("success");
let para = document.getElementById("para");
let para6 = document.getElementById("para6");
let emailInput = document.getElementById("email");

function Submit() {
  let email = emailInput.value;

  if (EmailRegex.test(email)) {
    console.log("it's right");
    para.innerHTML = `A confirmation email has been sent to ${email}. Please open it
    and click the button inside to confirm your subscription`;
    main.style.display = "none";
    success.style.display = "flex";
  } else {
    console.log("it's wrong");
    emailInput.style.border = "1px solid red";
    emailInput.classList.add("error");
    para6.style.display = "block";
  }
  emailInput.value = "";
}

function Back() {
  main.style.display = "flex";
  success.style.display = "none";
  emailInput.style.border = "1px solid gray";
  emailInput.classList.remove("error");
  para6.style.display = "none";
}
