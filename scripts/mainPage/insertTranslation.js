var selectedLenguage = undefined; // IF USER DECIDES TO CHANGE LENGUAGE
var translate = (text) => {
    var userLanguage = selectedLenguage || navigator.language || navigator.userLanguage;
 
    var selectedLeng = typeof translations[userLanguage.substr(0,2)] == "undefined"? translations["en"]:
                    typeof leng == "string"? translations[leng]:
                    translations[userLanguage.substr(0,2)];
 
    var textObj = text.replace(/\./g," ").split(" ");
 
    var returnTranslation;
    var fixedReturnTranslation;
    textObj.forEach((e)=>{
        returnTranslation = (returnTranslation==undefined?selectedLeng:returnTranslation)[e];
        fixedReturnTranslation = (fixedReturnTranslation==undefined?translations["en"]:fixedReturnTranslation)[e];
    });
 
    return returnTranslation == undefined? fixedReturnTranslation: returnTranslation;
}
var translations = {
    en: { // DEFALT LENGUAGE IN CASE OF UNDEFINED TRANSLATIONS
        lengName: "English",
        title: {
            clickToContinue: "Click anywere to continue"
        },
        buttons: {
            openCode: "Open code",
            copyCode: "Copy code",
            downloadCode: "Download",
            copied: "Copied to clipboard!",
            newTabTitle: "Raw"
        },
        moduleDesk: {
            player: "ＰＪＳＭＰ - Pure JavaScript Midi Player, PJSMP's module that plays MIDI files in Multiplayer Piano."
        },
        history: {
            title: "History",
            desc: "Click in a item to open in a new tab"
        }
    },
    pt: {
        lengName: "Português",
        title: {
            clickToContinue: "Clique em qualquer lugar para continuar"
        },
        buttons: {
            openCode: "Abrir código",
            copyCode: "Copiar código",
            downloadCode: "Baixar",
            copied: "Copiado!",
            newTabTitle: "Código"
        },
        moduleDesk: {
            player: "ＰＪＳＭＰ - Pure JavaScript Midi Player, modulo do PJSMP que reproduz arquivos MIDI no site Multiplayer Piano."
        },
        history: {
            title: "Histórico",
            desc: "Clique em um item para abrir em uma nova guia"
        }
    }
};



var insertTranslactions = () => {
    document.getElementById("clickToContinue").innerHTML = translate("title.clickToContinue"); // title

    Array.from(document.querySelectorAll(".openCode")).forEach(e=>e.innerHTML = translate("buttons.openCode")); // open code button
    Array.from(document.querySelectorAll(".copyCode")).forEach(e=>e.innerHTML = translate("buttons.copyCode")); // copy code button
    Array.from(document.querySelectorAll(".downloadCode")).forEach(e=>e.innerHTML = translate("buttons.downloadCode")); // download code button

    if(document.getElementById("historyTitles")){ 
        document.getElementById("historyTitles").innerHTML = translate("history.title"); // history title
    }
    if(document.querySelector(".historyDesc")){ 
        document.querySelector(".historyDesc").innerHTML = translate("history.desc") + ":"; // history title
    }
}
insertTranslactions();

var reinsertTranslactions = (leng = selectedLenguage) => {
    selectedLenguage = leng;    
    insertTranslactions();
}