function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, muda para a imagem light
    img.setAttribute("src", "./assets/avatar-ivan-light.png")
    img.setAttribute("alt", "foto de ivan com brilho estourado")
  } else {
    // senão tiver, muda retorna para a imagem normal
    img.setAttribute("src", "./assets/avatar-ivan.png")
    img.setAttribute(
      "alt",
      "Foto de Ivan Baldez sorrrindo, usando camisa do Flamengo e óculos em fundo geométrico preto e branco."
    )
  }
}
