var criar_ponto = (x, y, valorX, valorY, tamanho, cor) => {
    var container = document.querySelector(".container");

    if(isNaN(x) || isNaN(y)) {
        return;
    }
    var ponto = document.createElement("div");
        ponto.className = "ponto";
        ponto.style.background = cor || "red";
        ponto.title = "x: " + valorX + "\ny: " + valorY;
        ponto.style.left = (x + 50) + "%";
        ponto.style.bottom = (y + 50) + "%";
        ponto.style.width = ponto.style.height = (tamanho || 5) + "px"

    container.append(ponto);
}

var executar_funcao = (funcao) => { 
    ultima_funcao = funcao; 
    var tamanho = parseFloat(document.getElementById("tamanho").value);
    var resolucao = parseFloat(document.getElementById("resolucao").value);
    var xZoom = parseFloat(document.getElementById("xZoom").value);
    var yZoom = parseFloat(document.getElementById("yZoom").value);

    for(i = -50; i < 50; i += 1/resolucao){
        criar_ponto(i * xZoom, funcao(i) * yZoom, i, funcao(i), tamanho);
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
    var span = document.getElementById("equacaoSpan");
    if(equacao.value.length < 5){
        equacao.value = "x => ";
    }
    try {
        apagar_tudo();
        executar_funcao(eval(equacao.value));
        span.innerHTML = "";
        equacao.className = span.className = "";
    } catch (erro) {
        apagar_tudo();
        executar_funcao(funcao_padrao);
        span.innerHTML = "- ERRO!";
        equacao.className = span.className = "erro";
    }
});


var calcular_raiz = (f, xInicial, treshHolderInput) => {
    var treshHolder = treshHolderInput || 1 / 1000;
    var derivada = x => ((f(x+treshHolder)) - (f(x))) / treshHolder;

    var xN = xInicial;
    var xN1 = undefined;

    var pararRepeticao = false;

    var antiOverflow = 0;

    while(!pararRepeticao){
        xN1 = xN - (f(xN) / derivada(xN));

        pararRepeticao = !(xN1 - xN);

        xN = xN1;

        if(antiOverflow++ == 500) {
            alert("Limite de iterações atingido!\nPonto mais proximo: "+xN);
            break
        }
    }

    return xN1;
}




document.getElementById("tamanho").addEventListener("input", reiniciar);
document.getElementById("resolucao").addEventListener("input", reiniciar);
document.getElementById("zoom").addEventListener("input", () => {
    document.getElementById("yZoom").value = document.getElementById("zoom").value;
    document.getElementById("xZoom").value = document.getElementById("zoom").value;
    reiniciar();
});
document.getElementById("yZoom").addEventListener("input", reiniciar);
document.getElementById("xZoom").addEventListener("input", reiniciar);
document.getElementById("calcularRaiz").addEventListener("click", () => {
    var xInicial = parseFloat(document.getElementById("numeroInicial").value); 
    var raiz = calcular_raiz(ultima_funcao, xInicial);

    var tamanho = parseFloat(document.getElementById("tamanho").value);
    var xZoom = parseFloat(document.getElementById("xZoom").value);
    var yZoom = parseFloat(document.getElementById("yZoom").value);

    criar_ponto(raiz * xZoom, ultima_funcao(raiz) * yZoom, raiz, ultima_funcao(raiz), tamanho, "blue");
});

executar_funcao(funcao_padrao);