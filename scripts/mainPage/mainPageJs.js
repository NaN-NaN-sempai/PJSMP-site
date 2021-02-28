var loadModules = async () => {
    var size;
    await fetch("./scripts/PJSMP_modules/module_player.js")
    .then(response => {
        size = response.headers.get("content-length");
        return response.text();})
    .then(text => {
        newModule({
            title: "module: player",
            desc: translate("moduleDesk.player"),
            time: "28/02/2021",
            size: fixByte(size),
            version: "1.0.9",
            code: text
        })
    });



    
    createHistory(); // ================================== HISTORY ============================================

    await fetch("./scripts/PJSMP_modules/nothingThere.txt")
    .then(response => {
        size = response.headers.get("content-length");
        return response.text();})
    .then(text => {
        newHistoryFile({
            title: "Nothing there for now.",
            time: "28/02/2021",
            version: "0.0",
            size: fixByte(size),
            code: text
        })
    });


    reinsertTranslactions();
}




var fixByte = (bytes) => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0 || !bytes){ return '0 Byte' };
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }
Object.entries(translations).forEach(e=>{
    var button = document.createElement("button");
        button.innerHTML = e[0].toUpperCase();
        button.title = e[1].lengName;
        button.setAttribute("onclick", '(()=>reinsertTranslactions(this.innerHTML.toLowerCase()))()');

    document.querySelector(".tranlateContainer").appendChild(button);
})


var translateDropdow = () => {
    var dropdown = document.querySelector(".tranlateContainer");
    if(!dropdown.style.maxHeight || dropdown.style.maxHeight=="0px"){
        dropdown.style.maxHeight = "500px";
        dropdown.style.opacity = 1;
        dropdown.style.pointerEvents = "auto";
    } else {
        dropdown.style.maxHeight = "0px";
        dropdown.style.opacity = 0;
        dropdown.style.pointerEvents = "none";
    }
}
document.querySelector("#tranlateButton").addEventListener("mousedown", translateDropdow);


window.addEventListener("mousemove", mouseMoveFunction);
function mouseMoveFunction(e){
    var centerPorc = (window.innerWidth/2)/window.innerWidth;
    var mousePorc = (e.offsetX-(window.innerWidth/2))/window.innerWidth;
    var porc = (centerPorc + (mousePorc/15))*100;
    document.querySelector("#centerLogo").style.left = porc + "%";

    var porc2 = (centerPorc + (-mousePorc/20))*100;
    document.querySelector("#clickToContinue").style.left = porc2 + "%";

    
    var centerPorcY = (window.innerHeight/2)/window.innerHeight;
    var mousePorcY = (e.offsetY-(window.innerHeight/2))/window.innerHeight;
    var porcY = (centerPorcY + (mousePorcY/25))*100;
    document.querySelector("#centerLogo").style.top = porcY + "%";
}

setTimeout(()=>{
    window.addEventListener("mouseup", clickToContinue);
}, 3500);
var clickToContinue = (e) => {
    var target = (e.target || e.srcElement);
    var ignoreClick = [
        document.querySelector("#tranlateButton"),
        document.querySelector("#tranlateButton").children[0],
        document.querySelector(".tranlateContainer"),
        document.querySelector(".nanGit"),
        document.querySelector(".nanGit").children[0]
    ]
    .concat(Array.from(document.querySelector(".tranlateContainer").children)); 
    if(ignoreClick.includes(target)){ return }

    document.getElementById("realBg").style.opacity = 1;
    window.removeEventListener("mousemove", mouseMoveFunction);
    window.removeEventListener("mouseup", clickToContinue);
    loadModules();

    Array.from(document.getElementById("bgdiv").children).forEach((e, i)=>{
        setTimeout(()=>{
            if(i==document.getElementById("bgdiv").children.length-1 || i==0){ return }
            e.style.opacity = 0;
            e.style.animation = "none";
        }, 2000)
    });

    setTimeout(()=>{
        container.style.maxHeight = "700px";
        document.getElementById("bgdiv").children[document.getElementById("bgdiv").children.length-1].style.transition = "10s";
        document.getElementById("bgdiv").children[document.getElementById("bgdiv").children.length-1].style.opacity = 0;
    }, 3000);
    
}



document.addEventListener('contextmenu', event => event.preventDefault());