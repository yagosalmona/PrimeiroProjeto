function toggleMode() {
  const html = document.documentElement
  // tag para alternar para light
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //subistituir a imagem
  if (html.classList.contains("light")) {
  //se tiver light, adicionar a imagem light 
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/white atualizada.png")


  }
}
