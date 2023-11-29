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

  
  function aceptarCookies() {
  document.getElementById('cookieContainer').style.display = 'none';

  // Establecer una cookie que expire en 30 días (ajusta según tus necesidades)
  document.cookie = "cookiesAceptadas=true; expires=" + new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toUTCString();
  cerrarVentana();
}

function cerrarVentana() {
  document.getElementById('cookieContainer').style.display = 'none';
}

// Mostrar la ventana de cookies si no se ha aceptado y han pasado al menos 1 segundo
setTimeout(function() {
  if (!document.cookie.includes("cookiesAceptadas")) {
      document.getElementById('cookieContainer').style.display = 'block';
  }
}, 1000);
  
