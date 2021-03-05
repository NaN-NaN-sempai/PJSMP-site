var container = document.querySelector(".container");


var newModule = (obj) => {
    var module = document.createElement("div");
        module.className = "modules";
        var title = document.createElement("h1");
            title.innerHTML = obj.title;
        module.appendChild(title);

        var spanInfo = document.createElement("span");
            spanInfo.className = "moduleSpanInfo";
            spanInfo.innerHTML = obj.time;
        module.appendChild(spanInfo);

        var spanInfo3 = document.createElement("span");
            spanInfo3.className = "moduleSpanInfo";
            spanInfo3.innerHTML = obj.version+"v";
        module.appendChild(spanInfo3);

        var spanInfo2 = document.createElement("span");
            spanInfo2.className = "moduleSpanInfo";
            spanInfo2.innerHTML = obj.size;
        module.appendChild(spanInfo2);

        module.appendChild(document.createElement("br"));
        module.appendChild(document.createElement("br"));

        var span = document.createElement("span");
            span.innerHTML = obj.desc;
            span.title = obj.title;
            span.className = "moduleDescription";
        module.appendChild(span);

        module.appendChild(document.createElement("br"));
        module.appendChild(document.createElement("br"));

        var button = document.createElement("button");
            button.className = "openCode";
            button.setAttribute("onclick", "openFileCode(this, '"+obj.title+"')");
        module.appendChild(button);        

        var button2 = document.createElement("button");
            button2.className = "copyCode";
            button2.setAttribute("onclick", "copyCode(this)");
        module.appendChild(button2);

        var button3 = document.createElement("button");
            button3.className = "downloadCode";
            button3.setAttribute("onclick", `downloadCode(this)`);
        module.appendChild(button3);

        var button4 = document.createElement("button");
            button4.className = "installInUSPrograms"; 
            button4.title = "Tampermonkey, Greasemonkey, Violentmonkey, etc."
            button4.setAttribute("onclick", `installInUSPrograms("./scripts/PJSMP_modules/`+obj.fileName+`")`);
        module.appendChild(button4);

        module.appendChild(document.createElement("br"));
        module.appendChild(document.createElement("br"));

        var textarea = document.createElement("textarea");
            textarea.innerHTML = obj.code;
            textarea.readOnly = true;
        module.appendChild(textarea);
    container.appendChild(module);
}

var createHistory = () => {
    var module = document.createElement("div");
        module.className = "modules";
        var title = document.createElement("h1");
            title.id = "historyTitles";
        module.appendChild(title);

        var span = document.createElement("span");
            span.className = "historyDesc";
        module.appendChild(span);

        module.appendChild(document.createElement("br"));
        module.appendChild(document.createElement("br"));

        var div = document.createElement("div");
            div.className = "historyContainer";
        module.appendChild(div);
    container.appendChild(module);
}
var newHistoryFile = (obj) => {
    var subcontainer = document.querySelector(".historyContainer");

    var div = document.createElement("div");
        div.className = "historyFile";
        div.setAttribute("onclick", 'openHistoryCode("'+obj.fileName+'", "'+obj.title+'")');

        var title = document.createElement("h1");
            title.innerHTML = obj.title;
            title.title = obj.title;
        div.appendChild(title);

        var p3 = document.createElement("p");
            p3.innerHTML = obj.version+"v";
        div.appendChild(p3);

        var p2 = document.createElement("p");
            p2.innerHTML = obj.size;
        div.appendChild(p2);

        var p = document.createElement("p");
            p.innerHTML = obj.time;
        div.appendChild(p);
    subcontainer.appendChild(div);
}















