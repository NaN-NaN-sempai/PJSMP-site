var containers = [];
var createContainer = (obj) => {
    var container = document.getElementsByClassName("mainContainer")[0];
    
    if(!!container.children[0]){
        container.appendChild(document.createElement("hr"));
    }

    var content = document.createElement("div");
        content.className = "subContainer"; 

        var title = document.createElement("h1");
            title.className = "subContainerTitle";
            title.innerHTML = obj.title;
        content.appendChild(title);

        var subContainer = document.createElement("div");
            subContainer.className = "subContainerContent";
            subContainer.id = obj.id;
            subContainer.dataset.leng = obj.leng;

        content.appendChild(subContainer);
    container.appendChild(content);

    containers.push({
        id: obj.id,
        content: []
    });
}

var createContent = (obj) => {
    var container = document.getElementById(obj.id);

    var content = document.createElement("div");
        content.className = "subContainerIten";  
        if(!obj.solidBg){
            content.style.backgroundImage = "url("+obj.background+")";
        } else {
            content.style.background = obj.solidBg;
        }
        content.addEventListener("click", ()=>openContent(obj.onClick));

        var contentContainer = document.createElement("div");
            contentContainer.className = "itenContainer";

            var contentTitle = document.createElement("h1");
                contentTitle.className = "itenTitle";
                contentTitle.innerHTML = obj.title;
                contentTitle.title = !obj.elemTitle? obj.title: obj.elemTitle;
                contentTitle.style.color = !obj.color? undefined: obj.color;
            contentContainer.appendChild(contentTitle);

            var contentDesc = document.createElement("p");
                contentDesc.className = "itenDesc";
                contentDesc.style.color = !obj.color? undefined: obj.color;

                var typeContainer = document.createElement("p");
                    typeContainer.className = "typeContainer";
                
                    if(typeof obj.type == "object" && typeof obj.type[0] != "undefined"){
                    var forPt = {
                        "Previa": "Preview",
                        "Projeto": "Project", 
                    }
                    obj.type.forEach((e,i) => {
                        var span = document.createElement("span");
                            span.className = (forPt[e] == undefined? e: forPt[e]).replace(" ", "_");
                            span.innerHTML = e;

                        typeContainer.append(span);
                        
                        var comma = document.createElement("span");
                            comma.style.color = !obj.color? undefined: obj.color;
                            comma.innerHTML = (i != obj.type.length - 1? ", ": "<br><br>")
                        typeContainer.append(comma);
                    });

                contentDesc.append(typeContainer);
                }

                contentDesc.innerHTML += obj.desc;
            contentContainer.appendChild(contentDesc);
        content.appendChild(contentContainer);
    container.appendChild(content);

    containers.find(e=>e.id == obj.id).content.push(obj);
}

var openContent = (action) => {
    if(typeof action == "function"){
        action();
    } else { 
        window.open(action, "_self");
    }
}