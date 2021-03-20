// ############################################## TOPICS ################################################
createContainer({
    title: "Topics",
    id: "topics"
});

createContent({
    id: "topics",
    color: "white",
    solidBg: "transparent",
    title: "No topics",
    desc: "No topics for now, but future topics and cool stuff will appear here!",
    onClick: ()=>{}
});


// ############################################## PROJECTS #############################################
createContainer({
    title: "Projects",
    id: "projects"
});

createContent({
    id: "projects",
    color: "#fc9c28",
    background: "./projects/PJSMP/content/imgs/bg/fullBg.png",
    title: "ＰＪＳＭＰ (RE)",
    elemTitle: "Pure JavaScrip Midi Player (remake)",
    desc: "Follow PJSMP's scripts and releases here!<br><br>PJSMP (RE) is a auto player (MIDI player) made for Multiplayer Piano.",
    onClick: "'./projects/PJSMP/'"
});

createContent({
    id: "projects",
    color: "white",
    solidBg: "white",
    title: "Chat Hyperlinks", 
    desc: "Working in progress!<br><br>Interactive links, images and videos directly from the Multiplayere Piano chat.",
    onClick: "'./projects/ChatHyperlinks/'"
});


// ############################################## MORE #############################################
createContainer({
    title: "More",
    id: "more"
});

createContent({
    id: "more",
    color: "white",
    background: "./more/githug/content/imgs/hugwallpaper.jpeg",
    title: "GitHug", 
    desc: "Charsy 🤗",
    onClick: "'./more/githug/'"
});