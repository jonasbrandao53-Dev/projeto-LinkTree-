function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // sustituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a image light
    img.setAttribute("src", "./assets/eu.avatar.png")
    // se tiver sem light mode, manter a image normal
  } else {
    img.setAttribute("src", "./assets/eu.terno.png")
  }
}
