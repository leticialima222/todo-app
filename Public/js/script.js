function completarTarefa(id) {
    fetch("http://localhost:3000/completar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })

    window.location.reload()
}

function descompletarTarefa(id) {
    fetch("http://localhost3000/descompletar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })

    window.location.reload()
}

function excluirTarefas(id) {
    fetch("http://localhost3000/excluir", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
}

function alterarTema() {
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector("tema-button")

    if (tema) {
        let novoTema

        if (tema === "ligth") {
            novoTema = "dark"
            button.innerHTML = `<img src="/imagens/sun-icon.png" alt="ícone do sol">`
            body.classList.remove("ligth")
            body.classList.add("dark")
        } else {
            novoTema = "ligth"
            button.innerHTML = `<img src="/imagens/moon-icon.png" alt="ícone de lua">`
            body.classList.remove("dark")
            body.classList.add("ligth")
        }

        localStorage.setItem("tema", novoTema)
        return
    }

    localStorage.setItem("tema", "dark")
    body.classList.add("dark")
}

function verificarTema() {
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector("tema-button")

    if (tema) {
        if (tema === "dark"){
            body.classList.add("dark")
            button.innerHTML = `<img src="/imagens/sun-icon.png" alt="ícone do sol">`
        } else {
            body.classList.add("ligth")
            button.innerHTML = `<img src="/imagens/moon-icon.png" alt="ícone de lua">`
        }
    }
}

verificarTema()