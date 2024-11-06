window.onload = function () {
  var ham = document.querySelector(".icon");
  ham.addEventListener('click', hamburg);  
}




function hamburg() {
    var links = document.querySelector('.links');
    // alert("display: " + links.style.display);
    if (links.style.display ===  "none" || links.style.display === "") {
      links.style.display = "block";
    } else {
      links.style.display = "none";
    }
    // alert("display: " + links.style.display)
    var topBar = document.querySelector(".topBar");
    // alert("height: " + topBar.style.height)
    if (topBar.style.height === "6vh" || topBar.style.height === "") {
      topBar.style.height = "18vh";
    } else {
      topBar.style.height = "6vh";
    }
    // alert("height: " + topBar.style.height);
  
}

