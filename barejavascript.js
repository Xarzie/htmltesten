console.log("Execution started");

var wss_i = 0;
var wss_array = ["Fyns", "Militærhistoriske", "Museum"];
var wss_elem;
function wssNext() {
    wss_i++;
    wss_elem.style.opacity = 0;
    if (wss_i > (wss_array.length - 1)) {
        wss_i = 0;
    }
    setTimeout('wssSlide()', 1000);
}
function wssSlide() {
    wss_elem.innerHTML = wss_array[wss_i];
    wss_elem.style.opacity = 1;
    setTimeout('wssNext()', 3000);
}
wss_elem = document.getElementById("wss"); wssSlide();

function toggleNavPanel(x) {
    var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH = "600px"; /* max længde af container skal være større end Css value */
    if (panel.style.height == maxH) {
        panel.style.height = "0px";
        navarrow.innerHTML = "&#9776";
    } else {
        panel.style.height = maxH;
        navarrow.innerHTML = "&#9776";
    }
}

console.log("Execution ended");
