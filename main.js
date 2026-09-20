const errorUsername = document.querySelector(".errorUsername");
// const errorPassword = document.querySelector(".errorPassword");
const loginButton = document.querySelector(".submit");
const userName = document.querySelector("#username");
// const passWord = document.querySelector("#password");
function showError() {
  if (userName.value.trim() === "" /*|| passWord.value.trim() === ""*/) {
    errorUsername.style.display = "block";
    // errorPassword.style.display = "block";
  } else
        errorUsername.style.display = "none";
        // errorPassword.style.display = "none";
}

loginButton.addEventListener('click', showError);