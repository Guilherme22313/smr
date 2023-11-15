document.getElementById("menu-btn").addEventListener("click", function() {
  var menuList = document.getElementById("menu-list");
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function(event) {
  var menuContainer = document.querySelector(".menu-container");
  if (!menuContainer.contains(event.target)) {
    var menuList = document.getElementById("menu-list");
    menuList.style.display = "none";
  }
});
