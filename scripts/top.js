addhtml();
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

function addhtml() {
  var file = document.currentScript.getAttribute("file");
  var opener;
  if (file === "index.html") {
    opener = "";
  } else {
    opener = "../"
  }

  var container = document.createElement("div");

  container.setAttribute("class", "topBar");
  var header = document.createElement("header");
  var link = document.createElement("a");
  link.setAttribute("href", `${opener}index.html`);
  link.setAttribute("id", "header-link");
  var h1 = document.createElement("h1");
  h1.textContent = "Coding Club";
  link.appendChild(h1);
  header.appendChild(link);
  container.appendChild(header);

  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  ul.setAttribute("class", "links");

  makeNavLink("html/projects.html", "Projects", opener, ul);

  makeNavLink("html/about.html", "About", opener, ul);

  makeNavLink("html/signin.html", "Sign In", opener, ul);

  nav.appendChild(ul);
  var bars = document.createElement("a");
  bars.setAttribute("href", "javascript:void(0);");
  bars.setAttribute("class", "icon");
  var i = document.createElement("i");
  i.setAttribute("class", "fa fa-bars");
  bars.appendChild(i);
  nav.appendChild(bars);


  container.appendChild(nav);

  var body = document.querySelector("body");
  body.appendChild(container);

}

function makeNavLink(href, name, opener, ul) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.setAttribute("href", `${opener}${href}`);
  a.setAttribute("class", "top");
  a.textContent = name;
  li.appendChild(a);
  ul.appendChild(li);
}

