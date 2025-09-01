const btn = document.getElementById("toggleMode");

if (localStorage.getItem("modo") === "oscuro") {
  document.body.classList.add("dark");
  btn.innerText = "Light";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "Light";
    localStorage.setItem("modo", "oscuro");
  } else {
    btn.innerText = "Dark";
    localStorage.setItem("modo", "claro");
  }
});

function toggleMenu() {
  menuLista.classList.toggle("visible");
}

if (menuBtn && menuLista) {
  menuBtn.addEventListener("click", toggleMenu);
  console.log("Menú listo");
}