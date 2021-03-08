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
            install: "Install",
            copied: "Copied to clipboard!",
            newTabTitle: "Raw"
        },
        moduleDesk: {
            player: "ＰＪＳＭＰ - Pure JavaScript Midi Player, PJSMP's module that plays MIDI files in Multiplayer Piano.",
            midiController: "ＰＪＳＭＰ - Pure JavaScript Midi Player, PJSMP's module that add effects to user notes in Multiplayer Piano."
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
            install: "Instalar",
            copied: "Copiado!",
            newTabTitle: "Código"
        },
        moduleDesk: {
            player: "ＰＪＳＭＰ - Pure JavaScript Midi Player, modulo do PJSMP que reproduz arquivos MIDI no site Multiplayer Piano.",
            midiController: "ＰＪＳＭＰ - Pure JavaScript Midi Player, modulo do PJSMP que adiciona efeitos às notas do usuário no site Multiplayer Piano."
        },
        history: {
            title: "Histórico",
            desc: "Clique em um item para abrir em uma nova guia"
        }
    },

    ru: /* Thanks to Loli Autist */ {
        lengName: "Русский",
        title: {
            clickToContinue: "Нажмите куда угодно чтобы продолжить"
        },
        buttons: {
            openCode: "Открыть код",
            copyCode: "Копировать код",
            downloadCode: "Скачать",
            install: "Установить",
            copied: "Копировать в буфер обмена",
            newTabTitle: "Код"
        },
        moduleDesk: {
            player: "ＰＪＳＭＰ - Миди проигрыватель сделанный на JavaScript,  позволяющий проигрывать midi файлы в Multiplayer Piano.",
            midiController: "ＰＪＳＭＰ - Миди проигрыватель сделанный на JavaScript, PJSMP модуль добавляет эффекты к клавишам игрока в Multiplayer Piano."
        },
        history: {
            title: "История",
            desc: "Нажмите на значок чтобы открыть в новом окне"
        }
    }
};


var insertTranslactions = () => {
    document.getElementById("clickToContinue").innerHTML = translate("title.clickToContinue"); // title

    Array.from(document.querySelectorAll(".openCode")).forEach(e=>e.innerHTML = translate("buttons.openCode")); // open code button
    Array.from(document.querySelectorAll(".copyCode")).forEach(e=>e.innerHTML = translate("buttons.copyCode")); // copy code button
    Array.from(document.querySelectorAll(".downloadCode")).forEach(e=>e.innerHTML = translate("buttons.downloadCode")); // download code button
    Array.from(document.querySelectorAll(".installInUSPrograms")).forEach(e=>e.innerHTML = translate("buttons.install")+`
        <span><img src="content/imgs/container/installIcon.png"></span>
    `); // download code button

    if(document.querySelector(".moduleDescription")){
        Array.from(document.querySelectorAll(".moduleDescription")).find(e=>e.title == "Module: Player").innerHTML = translate("moduleDesk.player");
        Array.from(document.querySelectorAll(".moduleDescription")).find(e=>e.title == "Module: MIDI Controller").innerHTML = translate("moduleDesk.midiController");
    } 

    if(document.getElementById("historyTitles")){ 
        document.getElementById("historyTitles").innerHTML = translate("history.title"); // history title
        document.querySelector(".historyDesc").innerHTML = translate("history.desc") + ":"; // history title
    } 
}
insertTranslactions();

var reinsertTranslactions = (leng = selectedLenguage) => {
    selectedLenguage = leng;    
    insertTranslactions();
}