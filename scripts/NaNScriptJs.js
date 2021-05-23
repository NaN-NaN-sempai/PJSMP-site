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
        content.appendChild(subContainer);
    container.appendChild(content);
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
        content.setAttribute("onclick", 'openContent('+obj.onClick+')');

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
                contentDesc.innerHTML = !obj.type? "": "Project type: "+obj.type + "<br><br>";
                contentDesc.innerHTML += obj.desc;
            contentContainer.appendChild(contentDesc); 
        content.appendChild(contentContainer);
    container.appendChild(content);
}

var openContent = (action) => {
    if(typeof action == "function"){
        action();
    } else {
        window.open(action);
    }
}