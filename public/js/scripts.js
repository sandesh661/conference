
function onTabbuttonClick(event, className){
    document.querySelector(".tab-content.active").classList.remove("active");
    document.querySelector(".tab-content."+className).classList.add("active");

    document.querySelector(".custom-tab-btn.active").classList.remove("active");
    event.classList.add("active");
}

function rangeSelector(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("radius");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
    }
}
//window.onload = loadScript;rangeSelector();
