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
    title: "Tipos de projeeto",
    desc: "Pequena explicação de dos tipos de projetos que estão e serão postados aqui:<br>- Previa<br>- Projeto<br>- Node JS<br>- Userscript<br>- Web App",
    onClick: "./topicos/tiposDeProjetos/"
});

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
    color: "white",
    solidBg: "transparent",
    title: "Sem tópicos",
    desc: "Sem tópicos por enquanto, mas futuros tópicos irão aparecer aqui!",
    onClick: ()=>{}
});


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