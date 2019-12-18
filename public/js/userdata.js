userList = [{
    "name": "Chinanza Akachi",
    "image": "https://randomuser.me/api/portraits/women/30.jpg"
},{
    "name": "Darika Samak",
    "image": "https://randomuser.me/api/portraits/women/31.jpg"
},{
    "name": "Nombeko Mamballa",
    "image": "https://randomuser.me/api/portraits/women/32.jpg"
},{
    "name": "Martin Brito",
    "image": "https://randomuser.me/api/portraits/women/33.jpg"
},{
    "name": "Praskovay Dubinina",
    "image": "https://randomuser.me/api/portraits/women/34.jpg"
},]


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  
var classname = document.getElementsByClassName("leftNavBar");
console.log(classname)
var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};

for (var i = 0; i < classname.length; i++) {
    console.log("dsadas",classname[i])
    classname[i].addEventListener('click', myFunction, false);
}