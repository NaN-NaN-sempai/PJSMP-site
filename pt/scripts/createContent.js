// ############################################## TOPICS ################################################
createContainer({
    title: "Tópicos",
    id: "topics",
    leng: "pt"
});

createContent({
    id: "topics",
    color: "white", 
    solidBg: "transparent",
    title: "Tipos de Projeto",
    desc: `Pequena explicação de dos tipos de projetos que estão e serão postados aqui:
        <br>- <span class="Preview">Previa</span>
        <br>- <span class="Project">Projeto</span>
        <br>- <span class="Node_JS">Node JS</span>
        <br>- <span class="Userscript">Userscript</span>
        <br>- <span class="Web_App">Web App</span>`,
    onClickType: "content",
    onClick: (name)=>{
        var containersArr = [];
        var contentsArr = [];
        
        var createContainer = obj => containersArr.push(obj);
        var createContent = obj => contentsArr.push(obj);

        createContainer({
            title: "Tipos de Projeto",
            id: "projectTypes"
        });
        
        createContent({
            id: "projectTypes",
            color: "white",
            solidBg: "rgb(90,200,90)",
            title: "Previa",
            desc: "Projetos com com exemplos online<br><br>Projetos que podem ser executado online com o GitHub Pages ou outros métodos.",
            onClick: ()=>{}
        });
        
        createContent({
            id: "projectTypes",
            color: "white",
            solidBg: "rgb(200,90,90)",
            title: "Projeto",
            desc: "Apenas o projeto<br><br>Apenas o link para o projeto em questão.",
            onClick: ()=>{}
        });
        
        createContent({
            id: "projectTypes",
            color: "white",
            background: "../pt/topicos/tiposDeProjetos/content/imgs/nodeBanner.png",
            title: "Node JS",
            desc: "Projetos em Node Js<br><br>Servidore, aplicativos e projetos feitos usando Node Js.",
            onClick: "https://nodejs.org/"
        });
        
        createContent({
            id: "projectTypes",
            color: "white",
            background: "../pt/topicos/tiposDeProjetos/content/imgs/tamperBanner.png",
            title: "Userscript",
            desc: "Projetos de Userscript<br><br>Userscripts feitos para sites que podem mudar o seu comportamento.<br><br>Recomendado: Tampermonkey.",
            onClick: "https://www.tampermonkey.net/"
        });
        
        createContent({
            id: "projectTypes",
            color: "rgb(100,180,255)",
            background: "../pt/topicos/tiposDeProjetos/content/imgs/webBanner.jpg",
            title: "Web App",
            desc: "Projetos Web<br><br>Projetos, aplicativos e paginas com HTML, CSS e Javascript que podem ser executados online." 
        });

        openContentInContainer2(name, containersArr, contentsArr);
    }
});

createContent({
    id: "topics",
    color: "white",
    background: "../pt/content/imgs/logoIF.jpg",
    title: "Academicos (IF Baiano)",
    desc: `Lista com trabalhos estudos acadêmicos produzidos durante minha graduação no Instituto Federal Baiano em Senhor do Bonfim.`,
    onClickType: "content",
    onClick: (name)=>{
        var containersArr = [];
        var contentsArr = [];
        
        var createContainer = obj => containersArr.push(obj);
        var createContent = obj => contentsArr.push(obj);

        createContainer({
            title: "Trabalhos",
            id: "trabalhosIF"
        });
        
        createContent({
            id: "trabalhosIF",
            color: "white",
            background: "../pt/content/imgs/coneduLogo.png",
            title: "SEGURANÇA DA INFORMAÇÃO NO CONTEXTO ESCOLAR",
            //<iframe src="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf#zoom=92"></iframe>
            desc: "Juntamente a Douglas da Silva Santos e Victor Hugo de Carvalho Santana, sob a supervisão do professor Damon Ferreira Farias, publicamos esse artigo no CONEDU para a nossa bolsa do PIBID.",
            onClick: "https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf"
        });

        createContainer({
            title: "Estudos",
            id: "estudosIf"
        });

        var tempCont = getContent("Site Oficina de Introdução a Computação", "studies");
        tempCont.id = "estudosIf";
        createContent(tempCont);

        tempCont = getContent("Método de Newton-Raphson", "studies");
        tempCont.id = "estudosIf";
        createContent(tempCont);

        openContentInContainer2(name, containersArr, contentsArr);
    }
})

/* createContent({
    id: "topics",
    color: "white",
    solidBg: "transparent",
    title: "Sem tópicos",
    desc: "Sem tópicos por enquanto, mas futuros tópicos irão aparecer aqui!",
    onClick: ()=>{}
});
*/


// ############################################## PROJECTS #############################################
createContainer({
    title: "Projetos",
    id: "projects",
    leng: "pt"
});


createContent({
    id: "projects",
    color: "#fbeba3",
    title: "Elden Ring Countdown",
    type: ["Node JS", "Web App", "Previa"],
    background: "../content/imgs/banners/EldenRingCountdownWallpaper.jpg",
    elemTitle: "Elden Ring Countdown",
    desc: "Contagem regressiva para o lançamento de Elden Ring.<br><br>O horário é traduzido para Central Time, então a contagem está certa independente da Time Zone do usuario.",
    onClick: "https://elden-ring-countdown.vercel.app/#pt"
});


createContent({
    id: "projects",
    color: "white",
    background: "linear-gradient(to right, white 49.8%, black 49.8%, black 50.2%, white 50.2%), linear-gradient(to top, white 49.8%, black 49.8%, black 50.2%, white 50.2%)",
    title: "Visualizador de Funções", 
    type: ["Web App", "Previa"],
    desc: `Visualizador de funções usando Javascript e HTML.<br>
           <i>Update (18/09/2021):</i> Agora com linhas entre os pontos.`,
    onClick: "./projetos/visualizadorDeFuncoes/"
});


createContent({
    id: "projects",
    color: "white",
    background: "./content/imgs/rpgDeTurnoBanner.png",
    title: "RPG de Turno Node Js", 
    type: ["Projeto", "Node JS"],
    desc: "Projeto de um jogo RPG de turno feito em Node Js.",
    onClick: "https://github.com/NaN-NaN-sempai/RPG-de-turno-NodeJS"
});


// ############################################## STUDIES #############################################
createContainer({
    title: "Testes e Estudos",
    id: "studies"
});


createContent({
    id: "studies",
    color: "#00e3ff",
    background: "./content/imgs/oficinaLogo.png",
    title: "Site Oficina de Introdução a Computação", 
    type: ["Web App", "Previa"],
    desc: 'Site que criei com meu colega <a style="color: rgb(255, 30, 30)" href="https://github.com/Marckhos ">Marcos Santos</a> para uma oficina sobre introdução a computação da nossa matéria de estágio da faculdade.',
    onClick: "https://oficina-introducao-computacao.vercel.app/"
});


createContent({
    id: "studies",
    color: "white",
    background: "linear-gradient(to right, white 49.8%, black 49.8%, black 50.2%, white 50.2%), linear-gradient(to top, white 49.8%, black 49.8%, black 50.2%, white 50.2%)",
    title: "Método de Newton-Raphson", 
    type: ["Web App", "Previa"],
    desc: 'Calcula e mostra a raiz de funções usando o método de Newton-Raphson, o visualizador é uma copia do projeto "Visualizador de Funções" encontrado na aba "Projetos".<br>Requisitado pela matéria <i>Matemática Aplicada</i> da minha faculdade.',
    onClick: "./projetos/metodoDeNewton/"
});

/* createContent({
    id: "studies",
    color: "white",
    solidBg: "transparent",
    title: "Sem tópicos",
    desc: "Sem tópicos por enquanto, mas futuros tópicos irão aparecer aqui!",
    onClick: ()=>{}
}); */


// ############################################## MORE #############################################
createContainer({
    title: "Mais",
    id: "more",
    leng: "pt"
});

createContent({
    id: "more",
    color: "rgb(255 100 0)",
    background: "../content/imgs/bg/NaNScriptsBg.jpg",
    title: "NaN Scripts",
    desc: "Área voltada para projetos em inglês.",
    onClick: "../"
});

createContent({
    id: "more",
    color: "#0689ff",
    background: "./content/imgs/discordBanner.png",
    title: "NWS Discord",
    desc: "{NWS} NeverWinter SENAI<br><br>Link de convite para meu servidor pessoal no Discord.<br><br>Chega lá pra jogar, programar ou fazer qualquer coisa comigo e com meus amigos!",
    onClick: "https://discord.gg/YSJtYae"
});