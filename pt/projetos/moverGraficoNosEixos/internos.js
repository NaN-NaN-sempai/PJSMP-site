var criar_ponto = (x, y, valorX, valorY, tamanho) => {
    var container = document.querySelector(".container");

    if(isNaN(x) || isNaN(y)) {
        return;
    }
    var ponto = document.createElement("div");
        ponto.className = "ponto apagar";
        ponto.title = "x: " + valorX + "\ny: " + valorY;
        ponto.style.left = (x + 50) + "%";
        ponto.style.bottom = (y + 50) + "%";
        ponto.style.width = ponto.style.height = (tamanho || 5) + "px"

    container.append(ponto);
}
var criar_barra = (x1, y1, x2, y2, tamanho)  => {
    var container = document.querySelector(".container");

    if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        return;
    }

    var direcao = {
        x: x2 - x1,
        y: y2 - y1
    }
    var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    var angulo = Math.atan2((x1 - x2), (y1 - y2)) * (180 / Math.PI) + 90;

    
    var barra = document.createElement("hr");
        barra.className = "barra apagar"; 
        barra.style.left = (x1 + (direcao.x / 2) + 50) + "%";
        barra.style.bottom = (y1 + (direcao.y / 2) + 50) + "%";
        barra.style.width = distancia+"%";
        barra.style.height = (tamanho || 5)/2 + "px";
        barra.style.transform = "translate(-50%, 50%) rotate("+angulo+"deg)";

    container.append(barra);
}

var executar_funcao = (funcao) => { 
    ultima_funcao = funcao; 
    var tamanho = parseFloat(document.getElementById("tamanho").value);
    var resolucao = parseFloat(document.getElementById("resolucao").value);
    var xZoom = parseFloat(document.getElementById("xZoom").value);
    var yZoom = parseFloat(document.getElementById("yZoom").value);
    var diferencialEmY = parseFloat(document.getElementById("moverEmY").value);
    var diferencialEmX = parseFloat(document.getElementById("moverEmX").value);

    var funcaoMoverNosEixos = x => {
        var xDeRetorno = funcao(x - diferencialEmX); // O diferencial em X é calculado aqui

        return xDeRetorno + diferencialEmY // O diferencial em Y é calculado aqui
    }

    document.getElementById("funcaoResultado").value = "x => (" + document.getElementById("equacao").value.slice(5).replaceAll("x", "(x " + (diferencialEmX>=0?"- ":"+ ") + Math.abs(diferencialEmX) + ")") + ") " + (diferencialEmY>=0?"+ ":"- ") + Math.abs(diferencialEmY);

    var passo = 1/resolucao;
    for(i = -100; i < 100; i += passo){
        criar_ponto(i * xZoom, funcaoMoverNosEixos(i) * yZoom, i, funcaoMoverNosEixos(i), tamanho);

        var iAux = i + passo;

        criar_barra(i * xZoom, funcaoMoverNosEixos(i) * yZoom,
                    iAux * xZoom, funcaoMoverNosEixos(iAux) * yZoom, tamanho);
    }
}

var apagar_tudo = () => {
    Array.from(document.querySelectorAll(".apagar")).forEach(e => e.remove());
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
document.getElementById("tamanho").addEventListener("input", reiniciar);
document.getElementById("resolucao").addEventListener("input", reiniciar);
document.getElementById("zoom").addEventListener("input", () => {
    document.getElementById("yZoom").value = document.getElementById("zoom").value;
    document.getElementById("xZoom").value = document.getElementById("zoom").value;
    reiniciar();
});
document.getElementById("yZoom").addEventListener("input", reiniciar);
document.getElementById("xZoom").addEventListener("input", reiniciar);

document.getElementById("moverEmY").addEventListener("input", reiniciar);
document.getElementById("moverEmX").addEventListener("input", reiniciar);

document.getElementById("restaurarMovimento").addEventListener("click", () => {
    document.getElementById("moverEmY").value = 0;
    document.getElementById("moverEmX").value = 0;
    reiniciar();
});

document.getElementById("funcaoResultado").addEventListener("click", () => document.getElementById("funcaoResultado").select());

window.addEventListener("resize", reiniciar);

executar_funcao(funcao_padrao);