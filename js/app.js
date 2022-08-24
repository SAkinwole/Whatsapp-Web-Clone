function myFunction() {
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function myDrop() {
    var x = document.getElementById("drop");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function myDropLeft() {
    var x = document.getElementById("dropLeft");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const moon = document.getElementById("moon")

moon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        moon.src = "images/Moon-1.png";
    } else {
        moon.src = "images/Sun-1.png";
    }
}