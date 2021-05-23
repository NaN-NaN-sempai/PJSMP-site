var viewport = document.querySelector("#viewport");
var q = 20//parseInt(prompt("Write the resolution: ", 20))
var resolution = Math.abs(!q?20:q) //20;
var pixelSize = 19;
var bgColor = 255;

var setColor = (node, color) => {
    color = color==undefined?bgColor:color;
    node.colorName = typeof color[3] == "string"?color[3]:undefined;
    node.style.background = "rgb("+(!isNaN(color[0])?color[0]:color)+", "+(!isNaN(color[0])?color[1]:color)+", "+(!isNaN(color[0])?color[2]:color)+")";
}
 
var createNode = (color) => { 
    var pixel = document.createElement("div");
        pixel.style.width = pixel.style.height = pixelSize+"px";
        setColor(pixel, typeof color == "undefined"? 255: color);
    return pixel;
}

var getTile = (x, y) => {
    return Array.from(Array.from(viewport.children).filter(e=>e.tagName!="BR")
        .find((vpl, i)=>i==y)?.children).find((vpt, i2)=>i2==x)
}
var getTileColor = (x, y) => {
    if(x >= resolution || y >= resolution || x < 0 || y < 0){ return }
    return Array.from(Array.from(viewport.children).filter(e=>e.tagName!="BR")
        .find((vpl, i)=>i==y)?.children).find((vpt, i2)=>i2==x)?.colorName
}

var createViewport = () => {
    viewport.innerHTML = ""; 
    for(i = 0; i < resolution; i++){
        var viewportLine = document.createElement("div");
            viewportLine.className = "viewportLine";
        
        for(i2 = 0; i2 < resolution; i2++){
            viewportLine.appendChild(createNode(255));
        }
        viewport.appendChild(viewportLine);
        viewport.innerHTML += "<br style='clear: both'>";
    }
}

var renderPixel = (action) => {
    Array.from(viewport.childNodes).filter(e=>e.tagName!="BR").forEach((vpl, x)=>{
        Array.from(vpl.childNodes).forEach((tile, y)=>{
            setColor(tile, action(x, y))
        });
    });
}

var dinRes = resolution;
var hr = dinRes / 2 // HALF RESOLUTION
var f = 0; // ACTUAL FRAME

var fps = parseInt(document.querySelector(".fps")?.querySelector("span")?.innerHTML) || 1;

var es = (frame, n) => { // EDGE SWAP
    return ((frame+n>=0)? ((frame+n)%dinRes): (dinRes+frame+n))
}
var cl = (n, from, to) => (n > hr+from && n < hr+to); // CREATE LINE

var chance = (n) => Math.floor(Math.random()*100) < n;

var nearY = (n, tileName, distance) => {
    var retArr = []
    Array.from((Array.from(viewport.children)
    .filter(e=>e.tagName != "BR"))
    .filter((e,i)=>i>n-distance && i<n+distance))
    .filter(e=>Array.from(e.children)
    .find(e2=>e2.colorName == tileName))
    .forEach(e=>{
        Array.from(e.children)
    })
}
var nearX = (n, tileName, distance) => {
    return Array.from((Array.from(viewport.children)))
    .filter(e=>e.tagName != "BR")
    .filter((e,i)=>i>n-distance && i<n+distance)
    .filter(e=>Array.from(e.children)
    .find(e2=>e2.colorName == tileName))
}
var hasNearY = (n, tileName, distance) => {
    return nearY(n, tileName, distance).length > 0
}
var hasNearX = (n, tileName, distance) => {
    return nearX(n, tileName, distance).length > 0
}

var renderInterval;
var start = () => {
    createViewport();

    renderInterval = setInterval(()=>{
        if(typeof window.render != "undefined"){
            renderPixel(render);
        } 
            
        f=f==resolution-1?0:f+1 // ADDS AND RESET FRAME
    }, fps);
}
start();

var stop = () => {
    clearInterval(renderInterval)
}