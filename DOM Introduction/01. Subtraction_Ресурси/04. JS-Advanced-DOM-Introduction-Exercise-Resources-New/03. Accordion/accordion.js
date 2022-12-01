function toggle() {
    let buttonText = document.getElementsByClassName("button")[0];
    let extraText = document.getElementById("extra");

    if (buttonText.textContent === "More")
    {
        extraText.style.display = "block";
        buttonText.textContent = "Less";
    }
    else
    {
        extraText.style.display = "none";
        buttonText.textContent = "More";
    }
}