function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    // Verifica se a classe 'light' está ativa
    if(html.classList.contains('light')) {
        // Se estiver no MODO CLARO
        // Troca para a imagem de versão clara
        img.setAttribute('src', 'leo-light.jpg')
        img.setAttribute('alt', 'Sua foto no modo claro')
    } else {
        // Se estiver no MODO ESCURO (padrão)
        // Troca para a imagem de versão escura
        img.setAttribute('src', 'leo-dark.jpg')
        img.setAttribute('alt', 'Sua foto no modo escuro')
    }
}