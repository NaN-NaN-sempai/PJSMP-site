var criar_ponto = (x,y) => {
    var container = document.querySelector(".container");

    var ponto = document.createElement("div");
        ponto.className = "ponto";
        ponto.style.left = (x + 50) + "%";
        ponto.style.bottom = (y + 50) + "%";

    container.append(ponto);
}

var executar_funcao = (funcao) => { 
    ultima_funcao = funcao; 
    var resolucao = parseInt(document.getElementById("resolucao").value);
    var xZoom = parseInt(document.getElementById("xZoom").value);
    var yZoom = parseInt(document.getElementById("yZoom").value);

    for(i = -50; i < 50; i += 1/resolucao){
        criar_ponto(i * xZoom, funcao(i) * yZoom);
    }
}

var apagar_tudo = () => {
    Array.from(document.querySelectorAll(".ponto")).forEach(e => e.remove());
}

var reiniciar = () => {
    apagar_tudo();
    executar_funcao(ultima_funcao)
}

var funcao_padrao = x => Math.pow(x, 3);
document.getElementById("equacao").addEventListener("input", () => {
    var equacao = document.getElementById("equacao");
    if(equacao.value.length < 5){
        equacao.value = "x => ";
    }
    try {
        apagar_tudo();
        executar_funcao(eval(equacao.value));
    } catch (erro) {
        apagar_tudo();
        executar_funcao(funcao_padrao);
    }
});
document.getElementById("resolucao").addEventListener("input", reiniciar)
document.getElementById("yZoom").addEventListener("input", reiniciar)
document.getElementById("xZoom").addEventListener("input", reiniciar)

executar_funcao(funcao_padrao);