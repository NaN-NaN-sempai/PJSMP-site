// ############################################## TOPICS ################################################
createContainer({
    title: "Project Types",
    id: "projectTypes"
});

createContent({
    id: "projectTypes",
    color: "white",
    solidBg: "rgb(90,200,90)",
    title: "Preview",
    desc: "Previewable projects<br><br>Projects that can be previewable just by clicking in it's link.",
    onClick: ()=>{}
});

createContent({
    id: "projectTypes",
    color: "white",
    solidBg: "rgb(200,90,90)",
    title: "Project",
    desc: "Just project<br><br>It's link send you to it's project location.",
    onClick: ()=>{}
});

createContent({
    id: "projectTypes",
    color: "rgb(170,170,170)",
    background: "./content/imgs/mppBanner.jpg",
    title: "MPP",
    desc: "Multiplayer Piano<br><br>Projects or scripts made for Multiplayer Piano.",
    onClick: "'https://multiplayerpiano.com/'"
});

createContent({
    id: "projectTypes",
    color: "white",
    background: "./content/imgs/nodeBanner.png",
    title: "Node JS",
    desc: "Node JS projects<br><br>Server, examples, web service, and desktop apps using Node JS.",
    onClick: "'https://nodejs.org/'"
});

createContent({
    id: "projectTypes",
    color: "white",
    background: "./content/imgs/tamperBanner.png",
    title: "Userscript",
    desc: "Userscript projects<br><br>Web sites custom scripts using Userscript client.<br><br>Recommended: Tampermonkey.",
    onClick: "'https://www.tampermonkey.net/'"
});

createContent({
    id: "projectTypes",
    color: "rgb(100,180,255)",
    background: "./content/imgs/webBanner.jpg",
    title: "Web App",
    desc: "Web Projects<br><br>Projects, pages or scripts using HTML, CSS and JavaScript for executing web application.",
    onClick: ()=>{}
});
