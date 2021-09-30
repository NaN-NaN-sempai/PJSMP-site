var containers = [];
var createContainer = (obj, notForSecondary = true) => {
    var container = document.getElementsByClassName("mainContainer")[notForSecondary? 0: 1];
    
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

    if(notForSecondary){
        containers.push({
            id: obj.id,
            content: []
        });
    }
}
var typeCounter = 0;
var createContent = (obj, notForSecondary = true) => {
    var container = document.getElementById(obj.id);

    var typeContainer;
    myObjExists = typeof obj.type == "object" && typeof obj.type[0] != "undefined";

    var content = document.createElement("a");
        content.className = "subContainerIten";  
        if(!obj.solidBg){
            content.style.backgroundImage = "url("+obj.background+")";
        } else {
            content.style.background = obj.solidBg;
        }
        openContent(content, obj.onClickType, obj.title, obj.onClick, obj.target);

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
                
                    if(myObjExists){
                        typeContainer = document.createElement("p");
                        typeContainer.className = "typeContainer typeContainerLenght"+(typeCounter++);
                        
                        var forPt = {
                            "Previa": "Preview",
                            "Projeto": "Project", 
                        }
                        obj.type.forEach((e,i) => {
                            var link = document.createElement("a");
                                var className = (forPt[e] == undefined? e: forPt[e]).replace(" ", "_");
                                link.className = className + " typeSpan";
                                link.href = "#tagFilter="+className;
                                link.innerHTML = e;  

                            typeContainer.append(link);
                            
                            var comma = document.createElement("span");
                                comma.style.color = !obj.color? undefined: obj.color;
                                comma.innerHTML = (i != obj.type.length - 1? ", ": "");
                            typeContainer.append(comma);
                        }); 

                        contentDesc.append(typeContainer);
                    }

                contentDesc.innerHTML += obj.desc;
            contentContainer.appendChild(contentDesc);
        content.appendChild(contentContainer);
    container.appendChild(content);

    if(notForSecondary){
        var objParent = containers.find(e=>e.id == obj.id);
        obj.parent = objParent;
        objParent.content.push(obj);
    }
}

var openContent = (element, type, title, action, target) => {
    if(typeof action == "function"){
        if(type != undefined){
            element.href = "#"+type+"="+title.replaceAll(" ", "_");
        } else {
            element.addEventListener("click", () => action());
        }
    } else if(typeof action == "string"){ 
        element.href = action;
        element.target = target || "_self";
    }
}

var checkFocus = () => {
    var focusClass = "mainContainerFocus";
    var container1 = "mainContainer1";

    var focus = document.querySelector("."+focusClass);

    return focus.classList.contains(container1);
}
var changeContainerFocus = (selectedContainer) => {
    const focusClass = "mainContainerFocus";
    const container1 = "mainContainer1";
    const container2 = "mainContainer2";

    const [removeFocus, addFocus] = typeof selectedContainer == "string"? [[container1,container2].find(e => e!=selectedContainer), selectedContainer]:
                                    checkFocus()? [container1, container2]: [container2, container1];

    document.querySelector("."+removeFocus).classList.remove(focusClass);

    if(!document.querySelector("."+addFocus).classList.contains(focusClass)){
        document.querySelector("."+addFocus).classList.add(focusClass);
    }
}

var removeContentContainer2 = () => {
    const container2 = "mainContainer2";
    var container = document.querySelector("."+container2);

    container.innerHTML = "";

    var goBackLink = document.createElement("a");
        goBackLink.href = "#";
        var button = document.createElement("button");
            button.className = "goBackToContainer1Btn";
            button.dataset.innerText = !document.querySelector("*[data-leng=pt]")? "Go Back": "Voltar";
        goBackLink.append(button);
    container.append(goBackLink);
}

var tagOnclick = (tag) => {
    if(checkFocus()){        
        searchForTag(tag);

    } else {
        var container1 = document.querySelector(".mainContainer1")
        container1.style.pointerEvents = "none";

        changeContainerFocus();

        setTimeout(() => {
            searchForTag(tag);
            setTimeout(()=>container1.style.pointerEvents = "auto", 600);
        }, 1500);
    }
}

var searchForTag = (tag) => {
    removeContentContainer2();

    var forPt = {
        "Preview": "Previa",
        "Project": "Projeto"
    }
    var isPt = !document.querySelector("*[data-leng=pt]");
    var tagName = (isPt? tag: (forPt[tag] == undefined? tag: forPt[tag])).replace("_", " ");

    var id = "tagDisplayContainer";

    var withTag = [];
    containers.forEach(conta=>{
        withTag = withTag.concat(conta.content.filter(conte => conte.type?.includes(tagName)));
    });

    createContainer({
        title: 'Tag: <span class="'+tag+'">'+tagName+"</span>",
        id
    }, false);

    if(withTag.length){
        withTag.forEach(e => {
            var newObj = Object.assign({}, e);
            newObj.id = id;
            createContent(newObj, false);
        });

    } else {
        createContent({
            id,
            title: isPt? "Sorry...": "Desculpe...",
            desc: isPt? "Theres no projects with the tag <i>"+tagName+"</i>.": "Parece que não existe nem um projeto com a tag <i>"+tagName+"</i>."
        }, false);
    }

    changeContainerFocus("mainContainer2");
} 

var openContentInContainer2 = (contentName, contanersArr, contentsArr) => {
    var doFocus = () => {
        removeContentContainer2();

        var title = document.createElement("h1");
            title.className = "titleMaincontainer2";
            title.innerHTML = contentName;
        document.querySelector(".mainContainer2").append(title);

        contanersArr.forEach(e => createContainer(e, false));
        contentsArr.forEach(e => createContent(e, false));

        changeContainerFocus("mainContainer2");
    }

    if(checkFocus()){
        doFocus();

    } else {
        var container1 = document.querySelector(".mainContainer1")
        container1.style.pointerEvents = "none";

        changeContainerFocus();

        setTimeout(() => {
            doFocus();
            setTimeout(()=>container1.style.pointerEvents = "auto", 600);
        }, 1500);
    }
}

var findContentOnObj = (name) => {
    name = name.replaceAll("%20"," ").replaceAll("_", " ");
    var content = containers.find(conta => conta.content.find(conte => conte.title == name))?.content.find(conte => conte.title == name);
    return content;
}

var hrefChange = () => {
    var params = document.location.href.replace(document.location.origin+document.location.pathname, "");

    var title = document.head.querySelector("title");

    if(params[0] == "#"){
        var param = params.split("=")[1];
        title.innerHTML = title.dataset.title == undefined || param == undefined? 
                            title.dataset.title || title.innerHTML: 
                            title.dataset.title + " | " + param?.replaceAll("_", " ");

        if(params.includes("tagFilter")){
            tagOnclick(param);

        } else if(params.includes("content")){
            var content = findContentOnObj(param);

            if(content != undefined){
                content.onClick(content.title);

            } else {
                var isPt = !document.querySelector("*[data-leng=pt]");
                var id = "contentNotFound";
                removeContentContainer2();
                createContainer({
                    title: isPt? "Content": "Conteudo",
                    id
                }, false);
                createContent({
                    id,
                    title: isPt? "Sorry...": "Desculpe...",
                    desc: isPt? "Theres no content with the name <i>"+param+"</i>.": "Parece que não existe nem um conteudo chamado <i>"+param+"</i>."
                }, false);

                changeContainerFocus("mainContainer2");
            }
        } else if(params == "#"){
            changeContainerFocus("mainContainer1");

        } else {
            document.location.href = "#";
        }
    }
}

window.addEventListener("load", hrefChange);
window.addEventListener('popstate', hrefChange);