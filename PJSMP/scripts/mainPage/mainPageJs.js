var loadModules = async () => {
    await generateModule({
        fileName: "module_player.user.js",
        title: "Module: Player",
        desc: translate("moduleDesk.player"),
        time: "28/02/2021",
        version: "1.0.9"
    });

    await generateModule({
        fileName: "module_midi_controller.user.js",
        title: "Module: MIDI Controller",
        desc: translate("moduleDesk.midiPlayer"),
        time: "03/03/2021",
        version: "0.04"
    });

    
    createHistory(); // ================================== HISTORY ============================================

    await generateHistoryFile({
        fileName: "nothingThere.txt",
        title: "Nothing there for now.",
        time: "28/02/2021",
        version: "0.0",
    });


    reinsertTranslactions();
}

var generateModule = async (obj) => {
    var size;
    await fetch("./scripts/PJSMP_modules/"+obj.fileName)
    .then(response => {
        size = response.headers.get("content-length");
        return response.text();
    })
    .then(text => {
        newModule({
            fileName: obj.fileName,
            title: obj.title,
            desc: obj.desc,
            time: obj.time,
            size: fixByte(size),
            version: obj.version,
            code: text
        })
    });
}
var generateHistoryFile = async (obj) => {
    fetch("./scripts/PJSMP_modules/history/"+obj.fileName)
    .then(response => response.headers.get("content-length"))
    .then(size => {
        newHistoryFile({
            fileName: obj.fileName,
            title: obj.title,
            time: obj.time,
            version: obj.version,
            size: fixByte(size)
        })
    });
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


var openFileCode = (elem, title) => {
    var w = window.open("../PJSMP/pages/openFiles/index.html");
        w.fileTitle = translate('buttons.newTabTitle')+": "+title;
        w.fileContent = Array.from(elem.parentElement.children).find(e=>e.tagName=="TEXTAREA").innerHTML;
    w.document.close();
}
var openHistoryCode = (fileName, title) => {
    fetch("./scripts/PJSMP_modules/history/"+fileName)
    .then(response => response.text())
    .then(text => {
        var w = window.open("../PJSMP/pages/openFiles/index.html");
            w.fileTitle = translate('buttons.newTabTitle')+": "+title;
            w.fileContent = text;
        w.document.close();        
    });
}

var copyCode = elem => {
    Array.from(elem.parentElement.children).find(e=>e.tagName=="TEXTAREA").select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    var elemButton = elem;
    elem.innerHTML = window.translate("buttons.copied");
    setTimeout(()=>reinsertTranslactions(), 1500);
}
var downloadCode = (elem) => {
    var textFileAsBlob = new Blob([Array.from(elem.parentElement.children).find(e=>e.tagName=="TEXTAREA").innerHTML], {type:'text/plain'}); 
    var downloadLink = document.createElement("a");
        downloadLink.download = Array.from(elem.parentElement.children).find(e=>e.tagName=="H1").innerHTML+".js";
        downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null){
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob); 

    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}
var installInUSPrograms = (n) => { 
    window.open(n, "_self");
}


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