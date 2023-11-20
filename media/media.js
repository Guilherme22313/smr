document.getElementById("menu-boton").addEventListener("click", function() {
  var menuList = document.getElementById("menu-lista");
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function(event) {
  var menuContainer = document.querySelector(".nav");
  if (!menuContainer.contains(event.target)) {
    var menuList = document.getElementById("menu-lista");
    menuList.style.display = "none";
  }
});

// No mostrar nav al recargar
function nav_onload(){
  var menuList = document.getElementById("menu-lista");
  menuList.style.display = "none";
}