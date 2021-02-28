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
        module.appendChild(span);

        module.appendChild(document.createElement("br"));
        module.appendChild(document.createElement("br"));

        var button = document.createElement("button");
            button.className = "openCode";
            button.setAttribute("onclick", `(()=>{
                var w = window.open("");
                w.document.write("<html><head><title>`+translate('buttons.newTabTitle')+`: `+obj.title+`</title></head><body><span style='font-family: Arial, Helvetica, sans-serif; white-space: pre-wrap'>"+Array.from(this.parentElement.children).find(e=>e.tagName=="TEXTAREA").innerHTML+"</span></body></html>");
                w.document.close();
            })()`);
        module.appendChild(button);        

        var button2 = document.createElement("button");
            button2.className = "copyCode";
            button2.setAttribute("onclick", `(()=>{Array.from(this.parentElement.children).find(e=>e.tagName=="TEXTAREA").select();
                                                    document.execCommand('copy');
                                                    document.getSelection().removeAllRanges();
                                                    var thisButton = this;
                                                    this.innerHTML = window.translate("buttons.copied");
                                                    setTimeout(()=>reinsertTranslactions(), 1500);
                                                })()`);
        module.appendChild(button2);

        var button3 = document.createElement("button");
            button3.className = "downloadCode";
            button3.setAttribute("onclick", ` (()=>{
                                            var textFileAsBlob = new Blob([Array.from(this.parentElement.children).find(e=>e.tagName=="TEXTAREA").innerHTML], {type:'text/plain'}); 
                                            var downloadLink = document.createElement("a");
                                                downloadLink.download = Array.from(this.parentElement.children).find(e=>e.tagName=="H1").innerHTML+".js";
                                                downloadLink.innerHTML = "Download File";
                                            if (window.webkitURL != null)
                                            {
                                                // Chrome allows the link to be clicked
                                                // without actually adding it to the DOM.
                                                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
                                            }
                                            else
                                            {
                                                // Firefox requires the link to be added to the DOM
                                                // before it can be clicked.
                                                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                                                downloadLink.onclick = destroyClickedElement;
                                                downloadLink.style.display = "none";
                                                document.body.appendChild(downloadLink);
                                            }
                                        
                                            downloadLink.click();
                                        })()`);
        module.appendChild(button3);

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
        div.setAttribute("onclick", `(()=>{
            
            var w = window.open("");
            w.document.write("<html><head><title>`+translate('buttons.newTabTitle')+`: `+obj.title+`</title></head><body><span style='font-family: Arial, Helvetica, sans-serif; white-space: pre-wrap'>"+Array.from(this.children).find(e=>e.tagName=="TEXTAREA").innerHTML+"</span></body></html>");
            w.document.close();
            
        })()`);

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

        var invisibleTextarea = document.createElement("textarea");
            invisibleTextarea.innerHTML = obj.code;
        div.appendChild(invisibleTextarea);
    subcontainer.appendChild(div);
}















