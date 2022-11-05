document.getElementById("pat").addEventListener("mousedown", function() {
    document.getElementById("pat").src = "img/pat2.png";
});

document.getElementById("pat").addEventListener("mouseup", function() {
    document.getElementById("pat").src = "img/pat1.png";
});

document.getElementById("pat").addEventListener("touchstart", function() {
    document.getElementById("pat").src = "img/pat2.png";
});

document.getElementById("pat").addEventListener("touchend", function() {
    document.getElementById("pat").src = "img/pat1.png";
});
