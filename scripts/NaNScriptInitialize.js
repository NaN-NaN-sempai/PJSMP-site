// ############################################## TOPICS ################################################
createContainer({
    title: "Topics",
    id: "topics"
});

createContent({
    id: "topics",
    color: "white", 
    solidBg: "transparent",
    title: "Project types",
    desc: "Get to know a little of NaN Scripts project types and its meanings:<br><br>- Preview<br>- Project<br>- MPP<br>- Node JS<br>- Userscript<br>- Web App",
    onClick: "./topics/projectTypes/"
});


// ############################################## PROJECTS #############################################
createContainer({
    title: "Projects",
    id: "projects"
});

createContent({
    id: "projects",
    color: "white",
    background: "./projects/Viewport/imgs/linkProjectBanner.png",
    title: "Viewport", 
    type: "Web App, Preview",
    desc: "Little screen for pixel animations.<br><br>Some tools and logics for helping in the animations.",
    onClick: "./projects/Viewport/"
});

createContent({
    id: "projects",
    color: "#fc9c28",
    background: "./projects/PJSMP/content/imgs/bg/fullBg.png",
    title: "ＰＪＳＭＰ",
    type: "MPP",
    elemTitle: "Pure JavaScrip Midi Player (remake)",
    desc: "Follow PJSMPs scripts and releases here!<br><br>PJSMP (RE) is a auto player (MIDI player) made for Multiplayer Piano.",
    onClick: "./projects/PJSMP/"
});

createContent({
    id: "projects",
    color: "white",
    solidBg: "white",
    title: "Chat Hyperlinks", 
    type: "MPP",
    desc: "Working in progress!<br><br>Interactive links, images and videos directly from the Multiplayere Piano chat.",
    onClick: "./projects/ChatHyperlinks/"
});


// ############################################## MORE #############################################
createContainer({
    title: "More",
    id: "more"
});

createContent({
    id: "more",
    color: "var(--titleColor)",
    background: "../content/imgs/banners/luishenriquesite.jpg",
    title: "Luís Henrique - Site",
    desc: "Area for projects in portuguese, my native lenguage.",
    onClick: "./pt/"
});

createContent({
    id: "more",
    color: "white",
    background: "./more/githug/content/imgs/hugwallpaper.jpeg",
    title: "GitHug", 
    desc: "Charsy 🤗",
    onClick: "./more/githug/"
});