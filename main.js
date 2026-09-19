    const btn = document.querySelector(".submit");
    const errorText = document.querySelector(".error");
    const input = document.querySelectorAll("input");

    btn.addEventListener("click", showError);

    function showError() {
    if (errorText.className === "error" && input.values === '') {
        errorText.classList.remove("error");
        errorText.classList.add("errorShow");
    } else errorText.classList.add("error");
    }

