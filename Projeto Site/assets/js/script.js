console.log("calcular...")

// manipulação do DOM
document.querySelector("#qtde").addEventListener("change", calcular)
document.querySelector("#orcamento").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)

function calcular() {

    const qtde = document.querySelector("#qtde").value
    let preco = qtde * 500

    const tipo = document.querySelector("#tipo").value
    if (tipo==2) preco += 1000

    //const check = document.querySelector("#prototipo_sim").checked
    //if (check) preco += 2

    document.querySelector("#orcamento").innerText = "R$ " + preco

    console.log(preco)

}

