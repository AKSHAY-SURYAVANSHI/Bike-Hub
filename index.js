function dark_Mode() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let reLogoImage = document.getElementById("RElogo");
    let bikeImage = document.getElementById("bike");

    // Find the moon/sun icon element
    let moonSunIcon = document.querySelector(".dark-mode-toggle");

    if (element.classList.contains("dark-mode")) {
        reLogoImage.src = "images/RE(dark).png";
        bikeImage.src = "images/bike(dark).png";

        // Change the moon to sun
        moonSunIcon.classList.remove("fa-moon-o");
        moonSunIcon.classList.add("fa-sun-o");
    } else {
        reLogoImage.src = "images/RE.png";
        bikeImage.src = "images/bike.png";

        // Change the sun back to moon
        moonSunIcon.classList.remove("fa-sun-o");
        moonSunIcon.classList.add("fa-moon-o");
    }
}


