const userName = document.querySelector("#username");
const errorUsername = document.querySelector(".errorUsername");
const userNameLength = document.querySelector(".userNameLength");
const passWord = document.querySelector("#password");
const errorPassword = document.querySelector(".errorPassword");
const passwordNameLength = document.querySelector(".passwordNameLength");
const loginButton = document.querySelector(".submit");
const loginSuccessful = document.querySelector(".loginMessage");

function showError(event) {
  event.preventDefault();
  let isValid = true;
  //Username
  if (userName.value.trim() === "") {
    errorUsername.style.display = "block";
    userNameLength.style.display = "none";
    isValid = false;
  } else if (userName.value.trim().length < 6) {
    userNameLength.style.display = "block";
    errorUsername.style.display = "none";
    isValid = false;
  } else {
    userNameLength.style.display = "none";
    errorUsername.style.display = "none";
  }

  //Password
  if (passWord.value.trim() === "") {
    errorPassword.style.display = "block";
    passwordNameLength.style.display = "none";
    isValid = false;
  } else if (passWord.value.trim().length < 6) {
    errorPassword.style.display = "none";
    passwordNameLength.style.display = "block";
    isValid = false;
  } else {
    errorPassword.style.display = "none";
    passwordNameLength.style.display = "none";
  }

  if (isValid) {
    loginSuccessful.classList.add("show");
    setTimeout(function () {
      loginSuccessful.classList.remove("show");
    }, 5000);
  } else {
    loginSuccessful.classList.remove("show");

    console.log("Please fix the errors");
  }
}

function typingUsername() {
  if (userName.value.trim() === "") {
    errorUsername.style.display = "block";
    userNameLength.style.display = "none";
  } else if (userName.value.trim().length < 6) {
    userNameLength.style.display = "block";
    errorUsername.style.display = "none";
  } else {
    userNameLength.style.display = "none";
    errorUsername.style.display = "none";
  }
}

function typingPassword() {
  if (passWord.value.trim() === "") {
    errorPassword.style.display = "block";
    passwordNameLength.style.display = "none";
  } else if (passWord.value.trim().length < 6) {
    passwordNameLength.style.display = "block";
    errorPassword.style.display = "none";
  } else {
    errorPassword.style.display = "none";
    passwordNameLength.style.display = "none";
  }
}
//Login Button To Perform An Action
loginButton.addEventListener("submit", showError);
userName.addEventListener('input', typingUsername);
passWord.addEventListener('input', typingPassword);
