if (document.getElementById("raketeSidebar") == null) {
  
  console.log("Making new sidebar!!!");
  
  var raketeSidebar = document.createElement("div");
  raketeSidebar.id = "raketeSidebar";
  document.body.style.paddingRight = "350px";

  raketeSidebar.setAttribute("style", [
    'background-color: blue;',
    'width: 350px;',
    'height: 100%;',
    'position: fixed;',
    'top: 0px;',
    'right: 0px;',
    'z-index: 9999;'].join('\n')
  );
  document.body.appendChild(raketeSidebar);
}