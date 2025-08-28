const btn = document.getElementById("toggleMode");

// aplicar preferencia guardada
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
