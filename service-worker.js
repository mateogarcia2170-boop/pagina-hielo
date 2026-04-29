self.addEventListener("install", e => {
  console.log("SW listo");
});

self.addEventListener("fetch", e => {
  // NO intercepta nada (evita pantalla blanca)
});
