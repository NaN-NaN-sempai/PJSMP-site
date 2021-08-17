// ############################################## TOPICS ################################################
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
    background: "./content/imgs/nodeBanner.png",
    title: "Node JS",
    desc: "Projetos em Node Js<br><br>Servidore, aplicativos e projetos feitos usando Node Js.",
    onClick: "https://nodejs.org/"
});

createContent({
    id: "projectTypes",
    color: "white",
    background: "./content/imgs/tamperBanner.png",
    title: "Userscript",
    desc: "Projetos de Userscript<br><br>Userscripts feitos para sites que podem mudar o seu comportamento.<br><br>Recomendado: Tampermonkey.",
    onClick: "https://www.tampermonkey.net/"
});

createContent({
    id: "projectTypes",
    color: "rgb(100,180,255)",
    background: "./content/imgs/webBanner.jpg",
    title: "Web App",
    desc: "Projetos Web<br><br>Projetos, aplicativos e paginas com HTML, CSS e Javascript que podem ser executados online." 
});
