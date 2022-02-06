const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (
        event.currentTarget.value.length ===
        parseInt(event.currentTarget.getAttribute("data-length"))
    ) {
        if (inputRef.classList.contains("invalid")) {
            inputRef.classList.replace("invalid", "valid");
        } else inputRef.classList.add("valid");
    } else if (inputRef.classList.contains("valid")) {
        inputRef.classList.replace("valid", "invalid");
    } else inputRef.classList.add("invalid");
}