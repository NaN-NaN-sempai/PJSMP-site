// ==UserScript==
// @name         ＰＪＳＭＰ (RE) - module: midi controller
// @version      0.04
// @description  ＰＪＳＭＰ (RE) - Pure JavaScript Midi Player (Remake), PJSMP module that add effects to the notes in Multiplayer Piano
// @author       ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)
// @include      *://www.multiplayerpiano.com/*
// @include      *://multiplayerpiano.com/*
// @include      *://piano.ourworldofpixels.com/*
// @include      *://mpp.terrium.net/*
// @grant        none
// ==/UserScript==

window.PJSMP_mmc__version = "0.04";
window.PJSMP_mmc__moduleName = "ＰＪＳＭＰ (RE) - module: midi controller";
window.PJSMP_mmc__moduleFullName = "Pure JavaScript Midi Player (Remake) - module: midi controller";
window.PJSMP_mmc__changeLog = `
                                    MIDI TO JSON, MADE BY ToneJs: https://tonejs.github.io/
                                    ToneJs's GITHUB: https://github.com/Tonejs

                                    THIS CODE DOES NOT USE MIDI TO JSON, ONLY THE PJSMP PLAYER MODULE USES IT.

                                    SCRIPT FOR MULTIPLEYR PIANO BY: Luís Henrique de Almeida
                                    (aka ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR), HN Sine and Okóda Bérich)

                                    Luís Henrique's SOCIAL MIDIAS:
                                        GITHUB: https://github.com/NaN-NaN-sempai
                                        PASTEBIN: https://pastebin.com/u/okoda
                                        YOUTUBE: https://www.youtube.com/user/sonic9818
                                        SOUNDCLOUD: https://soundcloud.com/hn-sine
                                        FACEBOOK: https://www.facebook.com/luisinho.crei.crei
                                        INSTAGRAM: https://www.instagram.com/luis_hnrique/
                                        TWITTER: https://twitter.com/LuisHN4444


STAY UPDATED WITH NEWER VERSIONS OF THIS AND OTHERS SCRIPTS IN MY PASTEBIN PAGE: https://pastebin.com/u/okoda


_________________________________________________________DESCRIPTION_____________________________________________________________

THIS IS THE NEW VERSION OF THE ＰＪＳＭＰ - Pure JavaScript Midi Player, ＰＪＳＭＰ (RE) - Pure JavaScript Midi Player (Remake).
THE OLD VERSION IN BEEING DISCONTINUED AND TRANSLATED TO THIS NEW VERSION.

ＰＪＳＭＰ (RE) IS A MIDI PLAYER FOR MULTIPLAYER PIANO, IT IS MODULAR SO EACH MODULE OPERATES A DIFRENT FUNCTION.
THE NEW VERSION ALSO WORKS WITH OUR WORLD OF PIXELS PIANO: https://piano.ourworldofpixels.com/
AND MPP.TERRIUM: https://mpp.terrium.net/


ＰＪＳＭＰ (RE) - module: player
    THE MAIN MODULE THAT READ AND PLAY THE MIDI FILES.
    
ＰＪＳＭＰ (RE) - module: midi controller (THIS ONE)
    CONTROL AND ADD EFFECTS TO THE NOTES PLAYED BY THE PLAYER (USING MOUSE, KEYBOARD OR MIDI CONTROLLERS) OR NOTES PLAYED BY THE ＰＪＳＭＰ (RE) - module: player.


_________________________________________________________HOW TO USE______________________________________________________________

TO INSTAL AND USE THIS SCRIPT IS REALLY SIMPLY.
METHOD 1: 
    THIS METHOD WORKS ONCE PER PAGE, IF YOU REFRESH OR QUITE THE MULTIPLAYER PIANO TAB YOU WILL NEED TO DO THIS METHOD AGAIN.
    - COPY THIS WHOLE CODE.
    - ON THE MULTIPLAYER PIANO TAB, OPEN YOUR BROWSER'S DEV TOOLS:
        > IF YOU ARE ON WINDOWS AND USING GOOGLE CHROME, JUST PRESS  CTRL + SHIFT + I OR F12. IN ANOTHERS BROWSERS THIS MAY WORK TOO.
        > IF YOU ARE IN GOOGLE CHROME, USING THE MOUSE, CLICK IN THE "CUSTOMIZE AND CONTROL" BUTTON (THE THREE DOTS IN THE TOP RIGHT CORNER) AND PRESS IN "MORE TOOLS", THEN IN "DEVELOPER TOOLS". MIGHT WORK IN ANOTHERS BROWSERS TOO.
        > IF YOU ARE NOT ON WINDOWS, RIGHT CLICK SOMEWHERE IN THE PAGE, THEN CLICK IN "INSPECT".
        > IF NONE OF THESE WAYS WORKED, SEARCH HOW TO OPEN THE DEVELOPER TOOLS TAB IN YOU BROWSER.
    - NAVIGATE TO THE "CONSOLE" TAB IN THE TOP OF THE DEV TOOLS WINDOW.
    - PASTE THE CODE IN THE TEXTAREA IN THE BOTTOM OF THE CONSOLE AND PRESS ENTER.

METHOD 2:
    THIS METHOD WILL AWAYS WORK EVEN IF YOU REFRESH THE PAGE.
    - COPY THIS WHOLE CODE.
    - INSTALL TAMPERMONKEY OR GREASYMONEKY EXTENSIONS TO YOUR BROWSER, THIS MIGHT WORK WITH OTHERS USERSCRIPTS TOOLS.
    - CLICK ON THE EXTENSION ICON. IN GOOGLE CHROME, IT STAYS AT THE TOP RIGHT OF THE WINDOW, IF IT DOESN'T SHOW UP, CLICK IN THE EXTENSION ICON (A PUZZLE FIGURE).
    - CLICK IN "ADD NEW SCRIPT...".
    - DELETE THE PRE CREATED SCRIPT.
    - PASTE THE NEW SCRIPT AND SAVE, CTRL + S OR CLICK IN "FILE", THEN "SAVE".
    - IF THE MULTIPLAYER PIANO TAB IS OPENED, REFRESH IT AND THE CODE WILL BE WORKING JUST FINE.

IF THE CODE DIDN'T WORK OR YOU CAUGHT ANY BUG OR ERROR THAT IS NOT LISTED IN THE "BUGS AND ISSUES" AREA, IN THE BOTTOM OF THE CHANGE LOG TEXT, THEN CONTACT ME IN ANY OF MY SOCIAL MIDIAS, THEY ARE IN THE TOP OF THIS TEXT. 

STAY UPDATED WITH NEWER VERSIONS OF THIS AND OTHERS SCRIPTS IN MY PASTEBIN PAGE: https://pastebin.com/u/okoda


_____________________________________________________WORKING IN PROGRESS_________________________________________________________

WORKING IN PROGRESS:  
    FIXING BUGS.

FUTURE IDEAS:
    - TRACK CONTROLLER MODULE: CONTROL EACH TRACK SEPARADATELY. 


__________________________________________________________CHANGE LOG_____________________________________________________________

0.04 FEATURES [VELOCITY OVERRIDE AND ECHO]:
    - ECCHO SECTION: SECTION THAT ADDS A ECHO EFFECT TO THE NOTES, YOU CAN SET THE AMOUNT OF ECHO, THE DELAY OF THE ECHO AND THE DELAY TO RELEASE OF IT.
    - (ERROR FIX) CHANGE LOG TAB: CHANGE LOG TAB DOESNT LOAD FOREVER NOW. 
    - VELOCITY OVERRIDE: NEW SLIDER TO OVERRIDE THE VELOCITY OF THE NOTES. IF ITS ON, THE NOTES WILL BE PLAYED IN A CONSTANT VELOCITY.
    - (ERROR FIX) RELEASE: NOW THE NOTES ARE BEEING RELEASED PROPERLY WHEN EFFECTS ARE ADDED ON USER DEVICES OR ON PJSMP.

0.03 FEATURES [OCTAVES]:
    - (ERROR FIX) SLIDERS: FIXED THE ERROR WHEN THE INPUT NUMBER VALUE WAS SET AS BELLOW ZERO AND THE SLIDER VALUE AUTOMATICALLY WAS SET TO THE MINOR VALUE POSSIBLE.
    - MORE OCTAVES: NEW SLIDER TO SELECT THE AMOUNT OF MORE OCTAVES THAT WILL BE PLAYED.
    - SAME EFFECTS TO ALL: NOW THE PJSMP AND THE USER DEVICES WILL BE TREATED IN THE SAME WAY.

0.02 FEATURES [USER INTERFACE]:
    - SECTION SWITCH: LITTLE ROUND BUTTON TO ENABLE OR DISABLE ALL THE EFFECTS ON THE SELECTED SECTION.
    - MULTINOTE SLIDER: SLIDER TO SELECT THE AMOUNT OF MULTINOTES THAT WILL BE PLAYED.
    - DEVICE SWITCH: BUTTONS TO ENABLE OR DISABLE THE EFFECTS IN EACH SUPPORTED DEVICE.
    - INTERFACE: ADDED A USER INTERFACE BASED ON THE PJSMP PLAYER MODULE.

0.01 FEATURES [FIRST WORKING VERSION]:
    - SHOW VERSION AND MODULE: DISPLAYS IN THE CHAT THE VERSION BY SENDING THE MESSAGE "PJSMP VERSION".
    - WORKING: NOTES PLAYER BY THE PLAYER OR BY THE PJSMP MODULE PLAYER GETS A MULTIPLIED BY 4 EFFECT, TO SWITCH ON THE SCRIPT PASTE: "PJSMP_mmc__aplyToAll = true" ON TE CONSOLE OR "PJSMP_mmc__aplyToAll = false" TO SWITCH IT OFF.


________________________________________________________BUGS AND ISSUES__________________________________________________________
    
KNOWN BUGS & ISSUES:
    - DOUBLE NOTES IN DEVICE:
    [REPORTED IN 0.04]
    [REPVENTION ERROR IMPOVISATION IN 0.03] => ON THE FIST NOTE OF THE MULTINOTE EFFECT, THE NOT WILL BE IGNORED. (IT RETURNED IN THE ADDITION OF THE ECHO EFFECT - v0.04)
    (KINDA ANOYING) (SINCE 0.01)
        THE NOTES PLAYED BY THE USER DEVICES GET PLAYED TWICE.


    - BACKGROUND COLOR:
    [REPORTED IN PJSMP (RE) module: player - v0.05.6]
    [PREVENT ERROR IMPROVISATION IN PJSMP (RE) module: player - v0.05.8] => IF THE PROGRAM CATCHS THE GRAY COLOR AS THE PLAYER COLOR, IT TURNS TO A RANDOM COLOR INSTEAD.
    (NOT HARMFUL) (SINCE PJSMP (RE) module: player - v0.01)
        SOMETIMES THE BACKGROUND COLOR DOESN'T GET THE PLAYER COLOR AND TURNS TO GRAY.


_________________________________________________________________________________________________________________________________


                                                FEEL FREE TO EDIT THIS CODE.
`;







































//____________________________________________________CODE STARTS HERE___________________________________________________________

window.PJSMP_mmc__debugLenguage = undefined; //CHANGE THIS VALUE TO CHANGE THE LENGUAGE OF THE PROGRAM (BEFORE LOADING THE CODE)
window.PJSMP_mmc__translations = {
    en: /* DEFALT LENGUAGE IN CASE OF UNDEFINED TRANSLATIONS */ {
        fix: "Fix",
        toDevices: {
            all: "All devices",
            mouse: "Mouse",
            keyboard: "Keyboard",
            midiController: "Midi controller" 
        },
        text: {
            openWindow: "Open program window",
            closeWindow: "Minimize program window",
            enableSection: "Enable or disable section: ",
            sections: {
                simply: "Simple modifiers",
                echo: "Echo"
            },
            thxTo: "English translation by ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)"
        },
        sliders: {
            multiNote: "Multiple Notes",
            moreOctave: "More Octaves",
            velocityOverride: "Velocity Override",
            echoLoops: "Echo Amount",
            echoDelay: "Echo Deley",
            echoDelayRelease: "Echo Release Delay"
        }
    },
    pt: {
        fix: "Padrão",
        toDevices: {
            all: "Todos os dispositivos",
            mouse: "Mouse",
            keyboard: "Teclado",
            midiController: "Controlador Midi"
        },
        text: {
            openWindow: "Abir programa",
            closeWindow: "Minimizar programa",
            enableSection: "Ativar ou desativar seção: ",
            sections: {
                simply: "Modificadores simples"
            },
            thxTo: "Portuguese translation by ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)"
        },
        sliders: {
            multiNote: "Multiplas Notas",
            moreOctave: "Multiplas Oitavas",
            velocityOverride: "Sobreposição de Velocidade"
        }
    },
    ru: {
        fix: "Откат",
        text: {
            openWindow: "Открывает программное окно",
            closeWindow: "Сворачивание программного окна",
        }
    },
    ja: {
        fix: "修正",
        text: {
            openWindow: "プログラムウィンドウを開く",
            closeWindow: "プログラムウィンドウの最小化"
        }
    }
};

window.PJSMP_mmc__translate = (text) => {
    var userLanguage = window.PJSMP_mmc__debugLenguage || navigator.language || navigator.userLanguage;

    var selectedLeng = typeof PJSMP_mmc__translations[userLanguage.substr(0,2)] == "undefined"? PJSMP_mmc__translations["en"]:
                    typeof leng == "string"? PJSMP_mmc__translations[leng]:
                    PJSMP_mmc__translations[userLanguage.substr(0,2)];

    var textObj = text.replace(/\./g," ").split(" ");

    var returnTranslation;
    var fixedReturnTranslation;
    textObj.forEach((e)=>{
        returnTranslation = (returnTranslation==undefined?selectedLeng:returnTranslation)[e];
        fixedReturnTranslation = (fixedReturnTranslation==undefined?PJSMP_mmc__translations["en"]:fixedReturnTranslation)[e];
    });

    return returnTranslation == undefined? fixedReturnTranslation: returnTranslation;
}


window.PJSMP_mmc__controllers = {
    containers:{
        simpliest: {
            state: true
        },
        echo: {
            state: true
        }
    },
    sliders: {
        //SIMPLE
        multiNote: {
            state: true,
            value: 0,
            default: 0
        },
        moreOctave: {
            state: true,
            value: 0,
            default: 0
        },
        velocityOverride: {
            state: false,
            value: 1,
            default: 1
        },
        //echo
        echoLoops: {
            state: undefined,
            value: 15,
            default: 15
        },
        echoDelay: {
            state: undefined,
            value: 100,
            default: 100
        },
        echoDelayRelease: {
            state: false,
            value: 100,
            default: 100
        }
    },
    toDevices: {
        all: {
            state: true
        },
        mouse: {
            state: true
        },
        keyboard: {
            state: true
        },
        midiController: {
            state: true
        }
    }
};

window.PJSMP_mmc__keyboardHoldRepeat = false; //REPEAT THE NO IF HOLD THE KEY


window.PJSMP_mmc__convertHex = (hex, opacity) => {
    if(hex.length == 4){
        hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    return 'rgba('+r+','+g+','+b+','+(typeof opacity != "number"? 0.5: opacity)+')';
}

window.PJSMP_mmc__playerColor = typeof PJSMP_mp__playerColor !== "undefined"? PJSMP_mp__playerColor: (MPP.client.getOwnParticipant().color=="#777"?Math.floor(Math.random()*16777215).toString(16):MPP.client.getOwnParticipant().color);
window.PJSMP_mmc__colors = { //PRESETED COLORS
    on: "rgba(11, 133, 0, 1)",
    off: "rgba(255, 34, 31, 1)",
    transOn: "rgba(11, 133, 0, .5)",
    transOff: "rgba(255, 34, 31, .5)",
    darkerOn: "rgba(11, 50, 0, 1)",
    darkerOff: "rgba(90, 14, 11, 1)",
    darkerBg: "rgba(20, 20, 20, .7)",
    darkerBg2: "rgba(57, 57, 57, 0.35)",

    bgColor: PJSMP_mmc__convertHex(PJSMP_mmc__playerColor),
    bgColor2: PJSMP_mmc__convertHex(PJSMP_mmc__playerColor, .9)
};

window.PJSMP_mmc__setBtnTextColor = (button, color, blur) => { //SET BUTTON COLLOR
    button.style.color = color;
    button.style.textShadow = "0px 0px "+(typeof blur != "number"? "5px": blur+"px")+" "+color;
}
window.PJSMP_mmc__setCheckColor = (button, color) => { //SET BUTTON COLLOR 
    button.style.background =  "radial-gradient("+color+" 1%, "+PJSMP_mmc__colors.darkerBg2+", "+color+" 80%)";
}
MPP.client.on("a", function (msg) { //SHOW VERSION COMMAND
    if(["player version", "player v", "pjsmp version", "pjsmp v", "pjsmp module", "pjsmp m"].includes(msg.a.toLowerCase())){
        var chatVHour = String(new Date().getHours()).padStart(2, "0")+":"+String(new Date().getMinutes()).padStart(2, "0");
        var chatV = "("+chatVHour+"): ";
        MPP.chat.send(chatV+"using "+PJSMP_mmc__moduleName+" - v"+PJSMP_mmc__version);
    }
});

window.PJSMP_mmc__windowMinimized = false;

if(!document.querySelector("#PJSMP_mmc__mainContainer")){
    //PROGRAM MAIN CONTAINER
    var PJSMP_mmc__mainContainer = document.createElement("div");
    PJSMP_mmc__mainContainer.id = "PJSMP_mmc__mainContainer";
    PJSMP_mmc__mainContainer.style.position = "fixed";
    PJSMP_mmc__mainContainer.style.top = "300px";
    PJSMP_mmc__mainContainer.style.right = "30px";
    PJSMP_mmc__mainContainer.style.backdropFilter = "blur(1.5px)";

    
    //CSS STYLE TAG
    var PJSMP_mmc__CSS = document.createElement("style");
    PJSMP_mmc__CSS.innerHTML = `
        #PJSMP_mmc__window {
            display: inline-block;
            border: solid `+PJSMP_mmc__colors.darkerBg+`;
            border-radius: 10px 0px 10px 0px;
            transition: .2s;
        } 

        #PJSMP_mmc__mainContainer{
            width: fit-content;
        }
        #PJSMP_mmc__mainContainer .PJSMP_mmc__buttonClass{
            margin: 0px 0px 5px 5px;
            padding: 5px;
        }
        #PJSMP_mmc__mainContainer button{ 
            background: rgba(60, 60, 60, 0.7);
            border: 1px solid `+PJSMP_mmc__colors.darkerBg+`;
            cursor: pointer;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            color: white;
            overflow: hidden;
            white-space:nowrap;
            outline: none;
            text-shadow: none;
            transition: background .2s, color .3s, text-shadow .3s;
        }
        #PJSMP_mmc__mainContainer button:hover{
            text-shadow: 0px 0px 2px white;
            background: `+PJSMP_mmc__colors.secondBg+`;
        }
        #PJSMP_mmc__mainContainer button:active{
            text-shadow: 0px 0px 5px white;
            background: `+PJSMP_mmc__colors.darkerBg+`;
        } 

        #PJSMP_mmc__toDeviceContainer {
            border-radius: 7px 0px 0px 0px;
            background: rgba(20, 20, 20, .7);
            width: fit-content;
        }
        #PJSMP_mmc__toDeviceContainer button{
            margin: 0px 0px 2px 2px;
        }


        #PJSMP_mmc__effectsContainer{
            padding: 2px;
            display: inline-grid;
            grid-gap: 2px; 
            grid-auto-flow: column;
        }
        .PJSMP_mmc__effectsContainer{
            background: `+PJSMP_mmc__colors.darkerBg2+`;
            border: `+PJSMP_mmc__colors.darkerBg+` solid;
            border-radius: 20px;
            width: fit-content;
            height: fit-content;
            padding: 0px 3px 2px 3px;
        } 
        .PJSMP_mmc__effectsContainer input[type=checkbox]{ 
            margin-left: 2px;
            width: 20px;
            height: 20px; 
            border-radius: 50%;
            vertical-align: middle;
            border: `+PJSMP_mmc__colors.darkerBg+` solid;
            -webkit-appearance: none; 
            cursor: pointer;
            transition: 1s;
        } 
        #PJSMP_mmc__effectsContainer *{
            outline: none;
        }
        .PJSMP_mmc__effectsContainer_subContainer{
            display: grid;
            grid-gap: 5px;
            width: 43px;
            overflow: hidden;
            background-color: `+PJSMP_mmc__colors.darkerBg+`;
            border: `+PJSMP_mmc__colors.darkerBg+` solid;
            border-radius: 20px;
        }
        .PJSMP_mmc__effectsContainer_subContainer input[type=range][orient=vertical]{
            writing-mode: bt-lr; /* IE */
            -webkit-appearance: slider-vertical; /* WebKit */
            width: 8px;
            height: 60px;
            position: relative;
            left: 50%;
            bottom: -2px;
            transform: translateX(-50%);
        }
        .PJSMP_mmc__effectsContainer_subContainer input[type=number]{
            background: `+PJSMP_mmc__colors.darkerBg+`;
            color: white;
            text-align: center;
            width: 92%;
            border: none;
            transition: 1s;
        }
        .PJSMP_mmc__effectsContainer_subContainer input[type="number"]::-webkit-inner-spin-button{
            cursor: pointer;
            display: none;
        }
        .PJSMP_mmc__effectsContainer_subContainer input[type="number"]:hover::-webkit-inner-spin-button{
            display: inline;
        }
        .PJSMP_mmc__effectsContainer_content{ 
            display: grid;
            grid-gap: 2px; 
            grid-auto-flow: column;
        }

        

        #PJSMP_mmc__bottomName{
            position: absolute;
            bottom: -22px;
            left: 0px;
            height: 20px;
            background: `+PJSMP_mmc__colors.bgColor2+`;
            border: solid `+PJSMP_mmc__colors.darkerBg+`;
            border-radius: 0px 0px 10px 10px;
        }
        #PJSMP_mmc__bottomName span, #PJSMP_mmc__dragAndDrop span{
            font-size: 10px;
            text-align: center;
            padding: 0px 2px 0px 2px;
            position: relative;
            bottom: 65%;
            transform: translateY(50%);
            text-shadow: 0px 0px 2px white;
            transition: 1s;
        }
        #PJSMP_mmc__bottomName span:hover, #PJSMP_mmc__dragAndDrop span:hover{
            text-shadow: 0px 0px 4px white, 0px 0px 4px white;
        } 

        #PJSMP_mmc__bottomName span, #PJSMP_mmc__dragAndDrop span{
            font-size: 10px;
            text-align: center;
            padding: 0px 2px 0px 2px;
            position: relative;
            bottom: 65%;
            transform: translateY(50%);
            text-shadow: 0px 0px 2px white;
            transition: 1s;
        }
        #PJSMP_mmc__bottomName span:hover, #PJSMP_mmc__dragAndDrop span:hover{
            text-shadow: 0px 0px 4px white, 0px 0px 4px white;
        }

        #PJSMP_mmc__dragAndDrop{
            position: absolute;
            top: -22px;
            right: 0px;
            height: 20px;
            width: max-content;
            background: `+PJSMP_mmc__colors.bgColor2+`;
            border: solid `+PJSMP_mmc__colors.darkerBg+`;
            border-radius: 10px 10px 0px 0px;
            cursor: move;
            overflow: hidden;
        }
        #PJSMP_mmc__dragAndDrop button{
            float: right;
            width: 0px; 
            height: 100%;
            border-radius: 0px;
            padding: 0px;
            margin: 0px;
            opacity: 0;
            border: none;
            transition: width 1.5s, margin 1.5s, opacity 1.5s, background .5s; 
        }
        #PJSMP_mmc__dragAndDrop:hover #PJSMP_mmc__dragAndDrop_ocBtn{
            margin: 0px 0px 0px 5px;
            width: 17px;
            opacity: 1;
            transition: width .5s, margin .5s, opacity .5s, background .5s;
        }
    `;

    PJSMP_mmc__mainContainer.appendChild(PJSMP_mmc__CSS);

    //PROGRAM WINDOW
    var PJSMP_mmc__window = document.createElement("div");
    PJSMP_mmc__window.id = "PJSMP_mmc__window";
    PJSMP_mmc__window.className = "PJSMP_mmc__window";
    PJSMP_mmc__window.style.background = PJSMP_mmc__colors.bgColor;


    //DEVICE SWITCHERS
    var PJSMP_mmc__toDeviceContainer = document.createElement("div");
    PJSMP_mmc__toDeviceContainer.id = "PJSMP_mmc__toDeviceContainer";

        //TO ALL
        var PJSMP_mmc__toDeviceContainer_allBtn = document.createElement("button");
        PJSMP_mmc__toDeviceContainer_allBtn.className = "PJSMP_mmc__buttonClass";
        PJSMP_mmc__toDeviceContainer_allBtn.innerHTML = PJSMP_mmc__translate("toDevices.all");
        PJSMP_mmc__toDeviceContainer_allBtn.setAttribute("onclick", 'PJSMP_mmc__devicesSwitcherHandler(this, PJSMP_mmc__controllers.toDevices.all)');
        PJSMP_mmc__setBtnTextColor(PJSMP_mmc__toDeviceContainer_allBtn, PJSMP_mmc__controllers.toDevices.all.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off)

        PJSMP_mmc__toDeviceContainer.appendChild(PJSMP_mmc__toDeviceContainer_allBtn);

        //TO MOUSE
        var PJSMP_mmc__toDeviceContainer_mouseBtn = document.createElement("button");
        PJSMP_mmc__toDeviceContainer_mouseBtn.className = "PJSMP_mmc__buttonClass";
        PJSMP_mmc__toDeviceContainer_mouseBtn.innerHTML = PJSMP_mmc__translate("toDevices.mouse");
        PJSMP_mmc__toDeviceContainer_mouseBtn.setAttribute("onclick", 'PJSMP_mmc__devicesSwitcherHandler(this, PJSMP_mmc__controllers.toDevices.mouse)');
        PJSMP_mmc__setBtnTextColor(PJSMP_mmc__toDeviceContainer_mouseBtn, PJSMP_mmc__controllers.toDevices.mouse.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);

        PJSMP_mmc__toDeviceContainer.appendChild(PJSMP_mmc__toDeviceContainer_mouseBtn);

        //TO KEYBOARD   
        var PJSMP_mmc__toDeviceContainer_keyboardBtn = document.createElement("button");
        PJSMP_mmc__toDeviceContainer_keyboardBtn.className = "PJSMP_mmc__buttonClass";
        PJSMP_mmc__toDeviceContainer_keyboardBtn.innerHTML = PJSMP_mmc__translate("toDevices.keyboard");
        PJSMP_mmc__toDeviceContainer_keyboardBtn.setAttribute("onclick", 'PJSMP_mmc__devicesSwitcherHandler(this, PJSMP_mmc__controllers.toDevices.keyboard)');
        PJSMP_mmc__setBtnTextColor(PJSMP_mmc__toDeviceContainer_keyboardBtn, PJSMP_mmc__controllers.toDevices.keyboard.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);

        PJSMP_mmc__toDeviceContainer.appendChild(PJSMP_mmc__toDeviceContainer_keyboardBtn);

        //TO MIDI CONTROLLER   
        var PJSMP_mmc__toDeviceContainer_midiBtn = document.createElement("button");
        PJSMP_mmc__toDeviceContainer_midiBtn.className = "PJSMP_mmc__buttonClass";
        PJSMP_mmc__toDeviceContainer_midiBtn.innerHTML = PJSMP_mmc__translate("toDevices.midiController");
        PJSMP_mmc__toDeviceContainer_midiBtn.setAttribute("onclick", 'PJSMP_mmc__devicesSwitcherHandler(this, PJSMP_mmc__controllers.toDevices.midiController)');
        PJSMP_mmc__setBtnTextColor(PJSMP_mmc__toDeviceContainer_midiBtn, PJSMP_mmc__controllers.toDevices.midiController.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);
        PJSMP_mmc__toDeviceContainer_midiBtn.style.marginRight = "5px";

        PJSMP_mmc__toDeviceContainer.appendChild(PJSMP_mmc__toDeviceContainer_midiBtn);


    PJSMP_mmc__window.appendChild(PJSMP_mmc__toDeviceContainer);



    //SLIDERS
    var PJSMP_mmc__effectsContainer = document.createElement("div");
    PJSMP_mmc__effectsContainer.id = "PJSMP_mmc__effectsContainer";
 
    /*
    SIMPLIEST EFFECTS
    |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
    ##############################################################################################################################################################################
    ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    */
        var PJSMP_mmc__effectsContainer_simplyContainer = document.createElement("div");
        PJSMP_mmc__effectsContainer_simplyContainer.className = "PJSMP_mmc__effectsContainer";

        var PJSMP_mmc__effectsContainer_simplyContainer_switcher = document.createElement("input");
        PJSMP_mmc__effectsContainer_simplyContainer_switcher.type = "checkbox"; 
        PJSMP_mmc__effectsContainer_simplyContainer_switcher.title = PJSMP_mmc__translate("text.enableSection")+PJSMP_mmc__translate("text.sections.simply");
        PJSMP_mmc__effectsContainer_simplyContainer_switcher.style.background = PJSMP_mmc__controllers.containers.simpliest.state? PJSMP_mmc__colors.transOn: PJSMP_mmc__colors.transOff;
        PJSMP_mmc__effectsContainer_simplyContainer_switcher.setAttribute("oninput", 'PJSMP_mmc__checkHandler(this, PJSMP_mmc__controllers.containers.simpliest)');

        PJSMP_mmc__effectsContainer_simplyContainer.appendChild(PJSMP_mmc__effectsContainer_simplyContainer_switcher);

        
        var PJSMP_mmc__effectsContainer_simplyContainer_content = document.createElement("div");
        PJSMP_mmc__effectsContainer_simplyContainer_content.className = "PJSMP_mmc__effectsContainer_content";
 
        /*
        MULTINOTE
        ##############################################################################################################################################################################
        ##############################################################################################################################################################################
        */
            var PJSMP_mmc__sliderContainer_multiNote = document.createElement("div");
            PJSMP_mmc__sliderContainer_multiNote.className = "PJSMP_mmc__effectsContainer_subContainer";
            PJSMP_mmc__sliderContainer_multiNote.title = PJSMP_mmc__translate("sliders.multiNote");


            var PJSMP_mmc__sliderContainer_multiNote_Input = document.createElement("input");
            PJSMP_mmc__sliderContainer_multiNote_Input.type = "range";
            PJSMP_mmc__sliderContainer_multiNote_Input.value = PJSMP_mmc__controllers.sliders.multiNote.value;
            PJSMP_mmc__sliderContainer_multiNote_Input.min = "0";
            PJSMP_mmc__sliderContainer_multiNote_Input.max = "4";
            PJSMP_mmc__sliderContainer_multiNote_Input.step = "1";
            PJSMP_mmc__sliderContainer_multiNote_Input.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.multiNote)');
            PJSMP_mmc__sliderContainer_multiNote_Input.setAttribute("orient", 'vertical');

            PJSMP_mmc__sliderContainer_multiNote.appendChild(PJSMP_mmc__sliderContainer_multiNote_Input);
            

            var PJSMP_mmc__sliderContainer_multiNote_InputNumber = document.createElement("input");
            PJSMP_mmc__sliderContainer_multiNote_InputNumber.type = "number";
            PJSMP_mmc__sliderContainer_multiNote_InputNumber.value = PJSMP_mmc__controllers.sliders.multiNote.value;
            PJSMP_mmc__sliderContainer_multiNote_InputNumber.min = "0";
            PJSMP_mmc__sliderContainer_multiNote_InputNumber.step = "1";
            PJSMP_mmc__sliderContainer_multiNote_InputNumber.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.multiNote)');

            PJSMP_mmc__sliderContainer_multiNote.appendChild(PJSMP_mmc__sliderContainer_multiNote_InputNumber);


            var PJSMP_mmc__sliderContainer_multiNote_fixBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_multiNote_fixBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_multiNote_fixBtn.innerHTML = PJSMP_mmc__translate("fix");
            PJSMP_mmc__sliderContainer_multiNote_fixBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_multiNote_fixBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_multiNote_fixBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_multiNote_fixBtn.style.margin = "0px";
            PJSMP_mmc__sliderContainer_multiNote_fixBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.multiNote)');
            
            PJSMP_mmc__sliderContainer_multiNote.appendChild(PJSMP_mmc__sliderContainer_multiNote_fixBtn);


            var PJSMP_mmc__sliderContainer_multiNote_switchBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_multiNote_switchBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_multiNote_switchBtn.innerHTML = "MN";
            PJSMP_mmc__setBtnTextColor(PJSMP_mmc__sliderContainer_multiNote_switchBtn, PJSMP_mmc__controllers.sliders.multiNote.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);
            PJSMP_mmc__sliderContainer_multiNote_switchBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_multiNote_switchBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_multiNote_switchBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_multiNote_switchBtn.style.margin = "0px";
            PJSMP_mmc__sliderContainer_multiNote_switchBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.multiNote)');

            PJSMP_mmc__sliderContainer_multiNote.appendChild(PJSMP_mmc__sliderContainer_multiNote_switchBtn);

            PJSMP_mmc__effectsContainer_simplyContainer_content.appendChild(PJSMP_mmc__sliderContainer_multiNote);

 
        /*
        MORE OCTAVES
        ##############################################################################################################################################################################
        ##############################################################################################################################################################################
        */
            var PJSMP_mmc__sliderContainer_moreOctave = document.createElement("div");
            PJSMP_mmc__sliderContainer_moreOctave.className = "PJSMP_mmc__effectsContainer_subContainer";
            PJSMP_mmc__sliderContainer_moreOctave.title = PJSMP_mmc__translate("sliders.moreOctave");


            var PJSMP_mmc__sliderContainer_moreOctave_Input = document.createElement("input");
            PJSMP_mmc__sliderContainer_moreOctave_Input.type = "range";
            PJSMP_mmc__sliderContainer_moreOctave_Input.value = PJSMP_mmc__controllers.sliders.moreOctave.value;
            PJSMP_mmc__sliderContainer_moreOctave_Input.min = "-4";
            PJSMP_mmc__sliderContainer_moreOctave_Input.max = "4";
            PJSMP_mmc__sliderContainer_moreOctave_Input.step = "1";
            PJSMP_mmc__sliderContainer_moreOctave_Input.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.moreOctave)');
            PJSMP_mmc__sliderContainer_moreOctave_Input.setAttribute("orient", 'vertical');

            PJSMP_mmc__sliderContainer_moreOctave.appendChild(PJSMP_mmc__sliderContainer_moreOctave_Input);
            

            var PJSMP_mmc__sliderContainer_moreOctave_InputNumber = document.createElement("input");
            PJSMP_mmc__sliderContainer_moreOctave_InputNumber.type = "number";
            PJSMP_mmc__sliderContainer_moreOctave_InputNumber.value = PJSMP_mmc__controllers.sliders.moreOctave.value; 
            PJSMP_mmc__sliderContainer_moreOctave_InputNumber.step = "1";
            PJSMP_mmc__sliderContainer_moreOctave_InputNumber.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.moreOctave)');

            PJSMP_mmc__sliderContainer_moreOctave.appendChild(PJSMP_mmc__sliderContainer_moreOctave_InputNumber);


            var PJSMP_mmc__sliderContainer_moreOctave_fixBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_moreOctave_fixBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_moreOctave_fixBtn.innerHTML = PJSMP_mmc__translate("fix");
            PJSMP_mmc__sliderContainer_moreOctave_fixBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_moreOctave_fixBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_moreOctave_fixBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_moreOctave_fixBtn.style.margin = "0px";
            PJSMP_mmc__sliderContainer_moreOctave_fixBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.moreOctave)');
            
            PJSMP_mmc__sliderContainer_moreOctave.appendChild(PJSMP_mmc__sliderContainer_moreOctave_fixBtn);


            var PJSMP_mmc__sliderContainer_moreOctave_switchBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_moreOctave_switchBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_moreOctave_switchBtn.innerHTML = "MO";
            PJSMP_mmc__setBtnTextColor(PJSMP_mmc__sliderContainer_moreOctave_switchBtn, PJSMP_mmc__controllers.sliders.moreOctave.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);
            PJSMP_mmc__sliderContainer_moreOctave_switchBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_moreOctave_switchBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_moreOctave_switchBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_moreOctave_switchBtn.style.margin = "0px";
            PJSMP_mmc__sliderContainer_moreOctave_switchBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.moreOctave)');

            PJSMP_mmc__sliderContainer_moreOctave.appendChild(PJSMP_mmc__sliderContainer_moreOctave_switchBtn);

            PJSMP_mmc__effectsContainer_simplyContainer_content.appendChild(PJSMP_mmc__sliderContainer_moreOctave);
            

        /*
        OVERRIDE VELOCITY
        ##############################################################################################################################################################################
        ##############################################################################################################################################################################
        */
            var PJSMP_mmc__sliderContainer_overrideVelocity = document.createElement("div");
            PJSMP_mmc__sliderContainer_overrideVelocity.className = "PJSMP_mmc__effectsContainer_subContainer";
            PJSMP_mmc__sliderContainer_overrideVelocity.title = PJSMP_mmc__translate("sliders.velocityOverride");


            var PJSMP_mmc__sliderContainer_overrideVelocity_Input = document.createElement("input");
            PJSMP_mmc__sliderContainer_overrideVelocity_Input.type = "range";
            PJSMP_mmc__sliderContainer_overrideVelocity_Input.value = PJSMP_mmc__controllers.sliders.velocityOverride.value;
            PJSMP_mmc__sliderContainer_overrideVelocity_Input.min = "-2";
            PJSMP_mmc__sliderContainer_overrideVelocity_Input.max = "4";
            PJSMP_mmc__sliderContainer_overrideVelocity_Input.step = ".01";
            PJSMP_mmc__sliderContainer_overrideVelocity_Input.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.velocityOverride)');
            PJSMP_mmc__sliderContainer_overrideVelocity_Input.setAttribute("orient", 'vertical');

            PJSMP_mmc__sliderContainer_overrideVelocity.appendChild(PJSMP_mmc__sliderContainer_overrideVelocity_Input);
            

            var PJSMP_mmc__sliderContainer_overrideVelocity_InputNumber = document.createElement("input");
            PJSMP_mmc__sliderContainer_overrideVelocity_InputNumber.type = "number";
            PJSMP_mmc__sliderContainer_overrideVelocity_InputNumber.value = PJSMP_mmc__controllers.sliders.velocityOverride.value; 
            PJSMP_mmc__sliderContainer_overrideVelocity_InputNumber.step = ".1";
            PJSMP_mmc__sliderContainer_overrideVelocity_InputNumber.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.velocityOverride)');

            PJSMP_mmc__sliderContainer_overrideVelocity.appendChild(PJSMP_mmc__sliderContainer_overrideVelocity_InputNumber);


            var PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn.innerHTML = PJSMP_mmc__translate("fix");
            PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn.style.margin = "0px";
            PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.velocityOverride)');
            
            PJSMP_mmc__sliderContainer_overrideVelocity.appendChild(PJSMP_mmc__sliderContainer_overrideVelocity_fixBtn);


            var PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn.innerHTML = "VO";
            PJSMP_mmc__setBtnTextColor(PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn, PJSMP_mmc__controllers.sliders.velocityOverride.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);
            PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn.style.margin = "0px";
            PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.velocityOverride)');

            PJSMP_mmc__sliderContainer_overrideVelocity.appendChild(PJSMP_mmc__sliderContainer_overrideVelocity_switchBtn);

            PJSMP_mmc__effectsContainer_simplyContainer_content.appendChild(PJSMP_mmc__sliderContainer_overrideVelocity);

        PJSMP_mmc__effectsContainer_simplyContainer.appendChild(PJSMP_mmc__effectsContainer_simplyContainer_content); 
        PJSMP_mmc__effectsContainer.appendChild(PJSMP_mmc__effectsContainer_simplyContainer);

    /*
    SIMPLIEST EFFECTS
    |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
    ##############################################################################################################################################################################
    ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    */
        var PJSMP_mmc__effectsContainer_echo = document.createElement("div");
        PJSMP_mmc__effectsContainer_echo.className = "PJSMP_mmc__effectsContainer";

        var PJSMP_mmc__effectsContainer_echo_switcher = document.createElement("input");
        PJSMP_mmc__effectsContainer_echo_switcher.type = "checkbox"; 
        PJSMP_mmc__effectsContainer_echo_switcher.title = PJSMP_mmc__translate("text.enableSection")+PJSMP_mmc__translate("text.sections.echo");
        PJSMP_mmc__effectsContainer_echo_switcher.style.background = PJSMP_mmc__controllers.containers.echo.state? PJSMP_mmc__colors.transOn: PJSMP_mmc__colors.transOff;
        PJSMP_mmc__effectsContainer_echo_switcher.setAttribute("oninput", 'PJSMP_mmc__checkHandler(this, PJSMP_mmc__controllers.containers.echo)');

        PJSMP_mmc__effectsContainer_echo.appendChild(PJSMP_mmc__effectsContainer_echo_switcher);

        
        var PJSMP_mmc__effectsContainer_echo_content = document.createElement("div");
        PJSMP_mmc__effectsContainer_echo_content.className = "PJSMP_mmc__effectsContainer_content";
        /*
        ECHO AMOUNT
        ##############################################################################################################################################################################
        ##############################################################################################################################################################################
        */
            var PJSMP_mmc__sliderContainer_echoAmount = document.createElement("div");
            PJSMP_mmc__sliderContainer_echoAmount.className = "PJSMP_mmc__effectsContainer_subContainer";
            PJSMP_mmc__sliderContainer_echoAmount.title = PJSMP_mmc__translate("sliders.echoLoops");


            var PJSMP_mmc__sliderContainer_echoAmount_Input = document.createElement("input");
            PJSMP_mmc__sliderContainer_echoAmount_Input.type = "range";
            PJSMP_mmc__sliderContainer_echoAmount_Input.value = PJSMP_mmc__controllers.sliders.echoLoops.value;
            PJSMP_mmc__sliderContainer_echoAmount_Input.min = "2";
            PJSMP_mmc__sliderContainer_echoAmount_Input.max = "20";
            PJSMP_mmc__sliderContainer_echoAmount_Input.step = "1";
            PJSMP_mmc__sliderContainer_echoAmount_Input.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoLoops)');
            PJSMP_mmc__sliderContainer_echoAmount_Input.setAttribute("orient", 'vertical');

            PJSMP_mmc__sliderContainer_echoAmount.appendChild(PJSMP_mmc__sliderContainer_echoAmount_Input);
            

            var PJSMP_mmc__sliderContainer_echoAmount_InputNumber = document.createElement("input");
            PJSMP_mmc__sliderContainer_echoAmount_InputNumber.type = "number";
            PJSMP_mmc__sliderContainer_echoAmount_InputNumber.value = PJSMP_mmc__controllers.sliders.echoLoops.value;
            PJSMP_mmc__sliderContainer_echoAmount_InputNumber.min = "2";
            PJSMP_mmc__sliderContainer_echoAmount_InputNumber.max = "35";
            PJSMP_mmc__sliderContainer_echoAmount_InputNumber.step = "1";
            PJSMP_mmc__sliderContainer_echoAmount_InputNumber.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoLoops)');

            PJSMP_mmc__sliderContainer_echoAmount.appendChild(PJSMP_mmc__sliderContainer_echoAmount_InputNumber);


            var PJSMP_mmc__sliderContainer_echoAmount_fixBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_echoAmount_fixBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_echoAmount_fixBtn.innerHTML = PJSMP_mmc__translate("fix");
            PJSMP_mmc__sliderContainer_echoAmount_fixBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_echoAmount_fixBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_echoAmount_fixBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_echoAmount_fixBtn.style.margin = "0px";
            PJSMP_mmc__sliderContainer_echoAmount_fixBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoLoops)');
            
            PJSMP_mmc__sliderContainer_echoAmount.appendChild(PJSMP_mmc__sliderContainer_echoAmount_fixBtn);


            var PJSMP_mmc__sliderContainer_echoAmount_switchBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_echoAmount_switchBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_echoAmount_switchBtn.innerHTML = "EA"; 
            PJSMP_mmc__sliderContainer_echoAmount_switchBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_echoAmount_switchBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_echoAmount_switchBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_echoAmount_switchBtn.style.margin = "0px"; 

            PJSMP_mmc__sliderContainer_echoAmount.appendChild(PJSMP_mmc__sliderContainer_echoAmount_switchBtn);

            PJSMP_mmc__effectsContainer_echo_content.appendChild(PJSMP_mmc__sliderContainer_echoAmount);

        /*
        ECHO DELAY
        ##############################################################################################################################################################################
        ##############################################################################################################################################################################
        */
            var PJSMP_mmc__sliderContainer_echoDelay = document.createElement("div");
            PJSMP_mmc__sliderContainer_echoDelay.className = "PJSMP_mmc__effectsContainer_subContainer";
            PJSMP_mmc__sliderContainer_echoDelay.title = PJSMP_mmc__translate("sliders.echoDelay");


            var PJSMP_mmc__sliderContainer_echoDelay_Input = document.createElement("input");
            PJSMP_mmc__sliderContainer_echoDelay_Input.type = "range";
            PJSMP_mmc__sliderContainer_echoDelay_Input.value = PJSMP_mmc__controllers.sliders.echoDelay.value;
            PJSMP_mmc__sliderContainer_echoDelay_Input.min = "5";
            PJSMP_mmc__sliderContainer_echoDelay_Input.max = "450";
            PJSMP_mmc__sliderContainer_echoDelay_Input.step = "1";
            PJSMP_mmc__sliderContainer_echoDelay_Input.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoDelay)');
            PJSMP_mmc__sliderContainer_echoDelay_Input.setAttribute("orient", 'vertical');

            PJSMP_mmc__sliderContainer_echoDelay.appendChild(PJSMP_mmc__sliderContainer_echoDelay_Input);
            

            var PJSMP_mmc__sliderContainer_echoDelay_InputNumber = document.createElement("input");
            PJSMP_mmc__sliderContainer_echoDelay_InputNumber.type = "number";
            PJSMP_mmc__sliderContainer_echoDelay_InputNumber.value = PJSMP_mmc__controllers.sliders.echoDelay.value;
            PJSMP_mmc__sliderContainer_echoDelay_InputNumber.min = "2";
            PJSMP_mmc__sliderContainer_echoDelay_InputNumber.max = "500";
            PJSMP_mmc__sliderContainer_echoDelay_InputNumber.step = "1";
            PJSMP_mmc__sliderContainer_echoDelay_InputNumber.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoDelay)');

            PJSMP_mmc__sliderContainer_echoDelay.appendChild(PJSMP_mmc__sliderContainer_echoDelay_InputNumber);


            var PJSMP_mmc__sliderContainer_echoDelay_fixBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_echoDelay_fixBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_echoDelay_fixBtn.innerHTML = PJSMP_mmc__translate("fix");
            PJSMP_mmc__sliderContainer_echoDelay_fixBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_echoDelay_fixBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_echoDelay_fixBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_echoDelay_fixBtn.style.margin = "0px";
            PJSMP_mmc__sliderContainer_echoDelay_fixBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoDelay)');
            
            PJSMP_mmc__sliderContainer_echoDelay.appendChild(PJSMP_mmc__sliderContainer_echoDelay_fixBtn);


            var PJSMP_mmc__sliderContainer_echoDelay_switchBtn = document.createElement("button");
            PJSMP_mmc__sliderContainer_echoDelay_switchBtn.className = "PJSMP_mmc__buttonClass";
            PJSMP_mmc__sliderContainer_echoDelay_switchBtn.innerHTML = "ED"; 
            PJSMP_mmc__sliderContainer_echoDelay_switchBtn.style.height = "20px";
            PJSMP_mmc__sliderContainer_echoDelay_switchBtn.style.width = "100%";
            PJSMP_mmc__sliderContainer_echoDelay_switchBtn.style.padding = "0px";
            PJSMP_mmc__sliderContainer_echoDelay_switchBtn.style.margin = "0px"; 

            PJSMP_mmc__sliderContainer_echoDelay.appendChild(PJSMP_mmc__sliderContainer_echoDelay_switchBtn);

            PJSMP_mmc__effectsContainer_echo_content.appendChild(PJSMP_mmc__sliderContainer_echoDelay);

            /*
            ECHO RELEASE DELAY 
            ##############################################################################################################################################################################
            ##############################################################################################################################################################################
            */
                var PJSMP_mmc__sliderContainer_echoDelayRelease = document.createElement("div");
                PJSMP_mmc__sliderContainer_echoDelayRelease.className = "PJSMP_mmc__effectsContainer_subContainer";
                PJSMP_mmc__sliderContainer_echoDelayRelease.title = PJSMP_mmc__translate("sliders.echoDelayRelease");
    
    
                var PJSMP_mmc__sliderContainer_echoDelayRelease_Input = document.createElement("input");
                PJSMP_mmc__sliderContainer_echoDelayRelease_Input.type = "range";
                PJSMP_mmc__sliderContainer_echoDelayRelease_Input.value = PJSMP_mmc__controllers.sliders.echoDelayRelease.value;
                PJSMP_mmc__sliderContainer_echoDelayRelease_Input.min = "5";
                PJSMP_mmc__sliderContainer_echoDelayRelease_Input.max = "700";
                PJSMP_mmc__sliderContainer_echoDelayRelease_Input.step = "1";
                PJSMP_mmc__sliderContainer_echoDelayRelease_Input.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoDelayRelease)');
                PJSMP_mmc__sliderContainer_echoDelayRelease_Input.setAttribute("orient", 'vertical');
    
                PJSMP_mmc__sliderContainer_echoDelayRelease.appendChild(PJSMP_mmc__sliderContainer_echoDelayRelease_Input);
                
    
                var PJSMP_mmc__sliderContainer_echoDelayRelease_InputNumber = document.createElement("input");
                PJSMP_mmc__sliderContainer_echoDelayRelease_InputNumber.type = "number";
                PJSMP_mmc__sliderContainer_echoDelayRelease_InputNumber.value = PJSMP_mmc__controllers.sliders.echoDelayRelease.value;
                PJSMP_mmc__sliderContainer_echoDelayRelease_InputNumber.min = "1";
                PJSMP_mmc__sliderContainer_echoDelayRelease_InputNumber.max = "1000";
                PJSMP_mmc__sliderContainer_echoDelayRelease_InputNumber.step = "1";
                PJSMP_mmc__sliderContainer_echoDelayRelease_InputNumber.setAttribute("oninput", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoDelayRelease)');
    
                PJSMP_mmc__sliderContainer_echoDelayRelease.appendChild(PJSMP_mmc__sliderContainer_echoDelayRelease_InputNumber);
    
    
                var PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn = document.createElement("button");
                PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn.className = "PJSMP_mmc__buttonClass";
                PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn.innerHTML = PJSMP_mmc__translate("fix");
                PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn.style.height = "20px";
                PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn.style.width = "100%";
                PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn.style.padding = "0px";
                PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn.style.margin = "0px";
                PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoDelayRelease)');
                
                PJSMP_mmc__sliderContainer_echoDelayRelease.appendChild(PJSMP_mmc__sliderContainer_echoDelayRelease_fixBtn);
    
    
                var PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn = document.createElement("button");
                PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn.className = "PJSMP_mmc__buttonClass";
                PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn.innerHTML = "ER"; 
                PJSMP_mmc__setBtnTextColor(PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn, PJSMP_mmc__controllers.sliders.echoDelayRelease.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);
                PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn.style.height = "20px";
                PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn.style.width = "100%";
                PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn.style.padding = "0px";
                PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn.style.margin = "0px"; 
                PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn.setAttribute("onclick", 'PJSMP_mmc__sliderHandler(this, PJSMP_mmc__controllers.sliders.echoDelayRelease)');
    
                PJSMP_mmc__sliderContainer_echoDelayRelease.appendChild(PJSMP_mmc__sliderContainer_echoDelayRelease_switchBtn);
    
                PJSMP_mmc__effectsContainer_echo_content.appendChild(PJSMP_mmc__sliderContainer_echoDelayRelease);

            
            PJSMP_mmc__effectsContainer_echo.appendChild(PJSMP_mmc__effectsContainer_echo_content);
            PJSMP_mmc__effectsContainer.appendChild(PJSMP_mmc__effectsContainer_echo);


    PJSMP_mmc__window.appendChild(PJSMP_mmc__effectsContainer);


    
    //BOTTOM NAME
    var PJSMP_mmc__bottomName = document.createElement("div");
    PJSMP_mmc__bottomName.id = "PJSMP_mmc__bottomName";
    PJSMP_mmc__bottomName.title = PJSMP_mmc__moduleName+" - v"+PJSMP_mmc__version;
    PJSMP_mmc__bottomName.setAttribute("onclick", "PJSMP_mmc__openChangelog()");

    var PJSMP_mmc__bottomName_text = document.createElement("span");
    PJSMP_mmc__bottomName_text.id = "PJSMP_mmc__bottomName_text";
    PJSMP_mmc__bottomName_text.innerHTML = "MADE BY: ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)";

    PJSMP_mmc__bottomName.appendChild(PJSMP_mmc__bottomName_text);

    PJSMP_mmc__window.appendChild(PJSMP_mmc__bottomName);


    //DRAG AND DROP
    var PJSMP_mmc__dragAndDrop = document.createElement("div");
    PJSMP_mmc__dragAndDrop.id = "PJSMP_mmc__dragAndDrop";
    PJSMP_mmc__dragAndDrop.title = PJSMP_mmc__moduleFullName;

    var PJSMP_mmc__dragAndDrop_text = document.createElement("span");
    PJSMP_mmc__dragAndDrop_text.id = "PJSMP_mmc__dragAndDrop_text";
    PJSMP_mmc__dragAndDrop_text.innerHTML = PJSMP_mmc__moduleName;

    var PJSMP_mmc__dragAndDrop_ocBtn = document.createElement("button");
    PJSMP_mmc__dragAndDrop_ocBtn.id = "PJSMP_mmc__dragAndDrop_ocBtn";
    PJSMP_mmc__dragAndDrop_ocBtn.innerHTML = PJSMP_mmc__windowMinimized? "O": "X";
    PJSMP_mmc__dragAndDrop_ocBtn.title = PJSMP_mmc__windowMinimized? PJSMP_mmc__translate("text.openWindow"): PJSMP_mmc__translate("text.closeWindow");
    PJSMP_mmc__setBtnTextColor(PJSMP_mmc__dragAndDrop_ocBtn, PJSMP_mmc__windowMinimized? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);
    PJSMP_mmc__dragAndDrop_ocBtn.style.background = "linear-gradient(to right, transparent 5%, "+(PJSMP_mmc__windowMinimized? PJSMP_mmc__colors.darkerOn: PJSMP_mmc__colors.darkerOff)+")";
    PJSMP_mmc__dragAndDrop_ocBtn.setAttribute("onclick", "PJSMP_mmc__minimizeWindow(this)");
 
    PJSMP_mmc__dragAndDrop.appendChild(PJSMP_mmc__dragAndDrop_text);

    PJSMP_mmc__dragAndDrop.appendChild(PJSMP_mmc__dragAndDrop_ocBtn);


    PJSMP_mmc__mainContainer.appendChild(PJSMP_mmc__dragAndDrop);
    PJSMP_mmc__mainContainer.appendChild(PJSMP_mmc__window);

    document.querySelector("#bottom").appendChild(PJSMP_mmc__mainContainer);
}
















//HTML ELEMENTS FUNCITONS
window.PJSMP_mmc__dragElement = (elmnt) => { //DRAG AND DROP PROGRAM WINDOW
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.getElementById("PJSMP_mmc__dragAndDrop").onmousedown = PJSMP_mmc__dragMouseDown;

    function PJSMP_mmc__dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = PJSMP_mmc__closeDragElement;
    document.onmousemove = PJSMP_mmc__elementDrag;
    }

    function PJSMP_mmc__elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function PJSMP_mmc__closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    }
}
PJSMP_mmc__dragElement(document.querySelector("#PJSMP_mmc__mainContainer"));

window.PJSMP_mmc__minimizeWindow = (e) => { //MINIMIZE WINDOW
    PJSMP_mmc__windowMinimized = !PJSMP_mmc__windowMinimized;
    e.innerHTML = PJSMP_mmc__windowMinimized? "O": "X";
    e.title = PJSMP_mmc__windowMinimized? PJSMP_mmc__translate("text.openWindow"): PJSMP_mmc__translate("text.closeWindow");
    PJSMP_mmc__setBtnTextColor(e, PJSMP_mmc__windowMinimized? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);

    e.style.background = "linear-gradient(to right, transparent 5%, "+(PJSMP_mmc__windowMinimized? PJSMP_mmc__colors.darkerOn: PJSMP_mmc__colors.darkerOff)+")";
    
    var pWindow = document.querySelector("#PJSMP_mmc__window").style;
    document.querySelector("#PJSMP_mmc__dragAndDrop").style.transition = ".5s";
    var pContainer = document.querySelector("#PJSMP_mmc__mainContainer").style;
    if(PJSMP_mmc__windowMinimized){
        pWindow.pointerEvents = "none";
        pWindow.overflow = "hidden";
        pWindow.height = "0px"; 
        pWindow.opacity = "0"; 
        pContainer.backdropFilter = "";

        document.querySelector("#PJSMP_mmc__dragAndDrop").style.borderRadius = "10px 10px 10px 10px";
    } else {
        pWindow.pointerEvents = "auto";
        pWindow.overflow = "";
        pWindow.height = ""; 
        pWindow.opacity = "1";
        pContainer.backdropFilter = "blur(1.5px)";
        
        document.querySelector("#PJSMP_mmc__dragAndDrop").style.borderRadius = "10px 10px 0px 0px";
    }
}

window.PJSMP_mmc__devicesSwitcherHandler = (e, control) => { //SWITCH STATE DEVICE BUTTONS 
    control.state = !control.state;
    
    PJSMP_mmc__setBtnTextColor(e, control.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off); 
}

window.PJSMP_mmc__sliderHandler = (e, control) => {
    if(e.tagName == "BUTTON"){
        if(e.innerHTML == PJSMP_mmc__translate("fix")){
            e.parentElement.children[0].value = e.parentElement.children[1].value = control.value = control.default;
        } else {
            control.state = !control.state;

            PJSMP_mmc__setBtnTextColor(e, control.state? PJSMP_mmc__colors.on: PJSMP_mmc__colors.off);
        }
    } else {
        if(e.type == "range"){
            control.value = parseFloat(e.value);
            e.parentElement.children[1].value = e.value;

        } else if(e.type == "number"){
            control.value = parseFloat(e.value); 

            var range = e.parentElement.children[0];
            range.value = control.value < range.min? range.min:
                                control.value > range.max? range.max:
                                    control.value;

        }
    }
}

window.PJSMP_mmc__checkHandler = (e, control) => {
    control.state = !control.state;
    
    e.style.background = control.state? PJSMP_mmc__colors.transOn: PJSMP_mmc__colors.transOff; 
}




//PROGRAM FUNCTIONS 
window.PJSMP_mmc__NPS = 0;


window.PJSMP_mmc__keyNames = ["a-1", "as-1", "b-1", "c0", "cs0", "d0", "ds0", "e0", "f0", "fs0", "g0", "gs0", "a0", "as0", "b0", "c1", "cs1", "d1", "ds1", "e1", "f1", "fs1", "g1", "gs1", "a1", "as1", "b1", "c2", "cs2", "d2", "ds2", "e2", "f2", "fs2", "g2", "gs2", "a2", "as2", "b2", "c3", "cs3", "d3", "ds3", "e3", "f3", "fs3", "g3", "gs3", "a3", "as3", "b3", "c4", "cs4", "d4", "ds4", "e4", "f4", "fs4", "g4", "gs4", "a4", "as4", "b4", "c5", "cs5", "d5", "ds5", "e5", "f5", "fs5", "g5", "gs5", "a5", "as5", "b5", "c6", "cs6", "d6", "ds6", "e6", "f6", "fs6", "g6", "gs6", "a6", "as6", "b6", "c7"];
window.PJSMP_mmc__endKeyPress = (key, vel) => { //OVERRIDE MPP.PRESS FUNCTION
    if(PJSMP_mmc__keyNames.includes(key)){
        MPP.press(key, vel);
        //PJSMP_mmc__NPS++;
    } 
} 
window.PJSMP_mmc__applyEffects = (key, velocity) => { //APPLY EFFECTS
    if(PJSMP_mmc__controllers.containers.echo.state){   
        var mill = PJSMP_mmc__controllers.sliders.echoDelay.value; 
        var loops = PJSMP_mmc__controllers.sliders.echoLoops.value; 

        velocity==1? velocity / 1.5: velocity;  
        for(t=0; t<loops; t++){   
            ((note, vel, exp, mil)=>{
                setTimeout(()=>{
                    var endvel = vel>=1? -exp: exp;
                    var expo = parseFloat(Math.pow(vel, endvel).toFixed(5)); 

                    PJSMP_mmc__endKeyPress(note, expo);
                    if(PJSMP_mmc__controllers.sliders.echoDelayRelease.state){ 
                        setTimeout(()=>{MPP.release(note)}, PJSMP_mmc__controllers.sliders.echoDelayRelease.value);
                    }
                }, mil);
            })(key, velocity, t, mill*t+1);
        }  
    } else {
        PJSMP_mmc__endKeyPress(key, velocity);
    }
}
window.PJSMP_mmc__applayEffectsBool = false;
window.PJSMP_mmc__keyPress = (note, release, isDevice, deviceRelease) => { //ADD EFFECTS
    if(PJSMP_mmc__keyNames.includes(note.key)){
        var key = note.key.replace("#", "s").toLowerCase().slice(0, note.key.replace("#", "s").toLowerCase().length-1);
        var octave = parseFloat(note.key.replace("#", "s").toLowerCase().slice(note.key.replace("#", "s").toLowerCase().length-1));
        var velocity = note.velocity;
        
        var isDevice = typeof isDevice == "string"; 
        Object.values(PJSMP_mmc__controllers.containers).forEach(e=>PJSMP_mmc__applayEffectsBool=PJSMP_mmc__applayEffectsBool||e.state)

        if(PJSMP_mmc__controllers.containers.simpliest.state){ //SIMPLE MODIFIERS SECTION
            var moreOctave = PJSMP_mmc__controllers.sliders.moreOctave.state?
                                PJSMP_mmc__controllers.sliders.moreOctave.value>=0?
                                    PJSMP_mmc__controllers.sliders.moreOctave.value+1: PJSMP_mmc__controllers.sliders.moreOctave.value-1: 1; 
            var multiNoteAmount = (PJSMP_mmc__controllers.sliders.multiNote.state? PJSMP_mmc__controllers.sliders.multiNote.value: 0) + 1;
            var velocityOverride = (PJSMP_mmc__controllers.sliders.velocityOverride.state? PJSMP_mmc__controllers.sliders.velocityOverride.value: velocity)

            for(mo = 0; mo != moreOctave; mo += (moreOctave > 0? 1: -1)){ 
                for(mn = 0; mn < multiNoteAmount; mn++){  
                    var endKey = key + (octave + mo);  

                    //check if isDevice is true and its the first notes of the effects or if isDevice is false or if any effects is 
                    if((isDevice && (mn || mo)) || !isDevice || PJSMP_mmc__applayEffectsBool){ 
                        (typeof deviceRelease == "undefined"? PJSMP_mmc__applyEffects: MPP.release)(endKey, velocityOverride); 
                    }

                    if(typeof release == "number"){
                        ((releaseKey) => {
                            setTimeout(()=>{   
                                MPP.release(releaseKey);  
                            }, release)
                        })(endKey); 
                    }
                }
            } 
        } else {
            if(PJSMP_mmc__applayEffectsBool){ 
                (typeof deviceRelease == "undefined"? PJSMP_mmc__applyEffects: MPP.release)(key + octave, velocity); 

                if(typeof release == "number"){
                    ((releaseKey) => {
                        setTimeout(()=>{   
                            MPP.release(releaseKey);  
                        }, release)
                    })(endKey); 
                }
            }
        }
    }
} 

 


//ADDING CODE TO MOUSE, KEYBOARD AND MIDI KEYBOARD
window.PJSMP_mmc__rawNoteToObj = (note, vel, deviceRelease) => { //PARSE NOTE TO MOLUDE MIDI CONTROLLER KEY PRESS
    PJSMP_mmc__keyPress({
        key: note,
        velocity: vel
    }, undefined, "device", deviceRelease);
}

//MIDI KEYBOARD 
(function() {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(
            function(midi) {
                function midimessagehandler(evt) {
                    if(PJSMP_mmc__controllers.toDevices.all){
                        if(!evt.target.enabled) return;
                        var channel = evt.data[0] & 0xf;
                        var cmd = evt.data[0] >> 4;
                        var note_number = evt.data[1] - 21;
                        var vel = evt.data[2];
                        var key = PJSMP_mmc__keyNames[note_number].replace("#", "s").toLowerCase().slice(0, PJSMP_mmc__keyNames[note_number].replace("#", "s").toLowerCase().length-1);
                        var octave = parseFloat(PJSMP_mmc__keyNames[note_number].replace("#", "s").toLowerCase().slice(PJSMP_mmc__keyNames[note_number].replace("#", "s").toLowerCase().length-1));
    
                        if(PJSMP_mmc__controllers.toDevices.all.state && PJSMP_mmc__controllers.toDevices.midiController.state){
                            if(cmd == 8 || (cmd == 9 && vel == 0)) { //release key
                                PJSMP_mmc__rawNoteToObj(key+octave, undefined, true); 
                                
                            } else if(cmd == 9) { //press key 
                                if(evt.target.volume !== undefined)
                                    vel *= evt.target.volume/100;

                                PJSMP_mmc__rawNoteToObj(key+octave, vel);
                            }
                        }
                    }
                }

            function plug() {
                if(midi.inputs.size > 0) {
                    var inputs = midi.inputs.values();
                    for(var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
                        var input = input_it.value;
                        input.onmidimessage = midimessagehandler;
                        if(input.enabled !== false) {
                            input.enabled = true;
                        }
                        if(typeof input.volume === "undefined") {
                            input.volume = 1.0;
                        }
                    }
                }
                if(midi.outputs.size > 0) {
                    var outputs = midi.outputs.values();
                    for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                        var output = output_it.value;
                        if(typeof output.volume === "undefined") {
                            output.volume = 1.0;
                        }
                    }
                }
            }
            midi.addEventListener("statechange", function(evt) {
                if(evt instanceof MIDIConnectionEvent) {
                    plug();
                }
            }); 
            plug();
        },
        function(err){
            console.log(err);
        } );
    }
})();

//KEYBOARD
window.PJSMP_mmc__MPPDefault_noteClass = function(note, octave) {
    this.note = note;
    this.octave = octave || 0;
};
window.PJSMP_mmc__MPPDefault_noteObj = function(a, b) { return {note: new PJSMP_mmc__MPPDefault_noteClass(a, b), held: false}; };
window.PJSMP_mmc__MPPDefault_keyBinding = {
    65: PJSMP_mmc__MPPDefault_noteObj("gs"),
    90: PJSMP_mmc__MPPDefault_noteObj("a"),
    83: PJSMP_mmc__MPPDefault_noteObj("as"),
    88: PJSMP_mmc__MPPDefault_noteObj("b"),
    67: PJSMP_mmc__MPPDefault_noteObj("c", 1),
    70: PJSMP_mmc__MPPDefault_noteObj("cs", 1),
    86: PJSMP_mmc__MPPDefault_noteObj("d", 1),
    71: PJSMP_mmc__MPPDefault_noteObj("ds", 1),
    66: PJSMP_mmc__MPPDefault_noteObj("e", 1),
    78: PJSMP_mmc__MPPDefault_noteObj("f", 1),
    74: PJSMP_mmc__MPPDefault_noteObj("fs", 1),
    77: PJSMP_mmc__MPPDefault_noteObj("g", 1),
    75: PJSMP_mmc__MPPDefault_noteObj("gs", 1),
    188: PJSMP_mmc__MPPDefault_noteObj("a", 1),
    76: PJSMP_mmc__MPPDefault_noteObj("as", 1),
    190: PJSMP_mmc__MPPDefault_noteObj("b", 1),
    191: PJSMP_mmc__MPPDefault_noteObj("c", 2),
    222: PJSMP_mmc__MPPDefault_noteObj("cs", 2),

    49: PJSMP_mmc__MPPDefault_noteObj("gs", 1),
    81: PJSMP_mmc__MPPDefault_noteObj("a", 1),
    50: PJSMP_mmc__MPPDefault_noteObj("as", 1),
    87: PJSMP_mmc__MPPDefault_noteObj("b", 1),
    69: PJSMP_mmc__MPPDefault_noteObj("c", 2),
    52: PJSMP_mmc__MPPDefault_noteObj("cs", 2),
    82: PJSMP_mmc__MPPDefault_noteObj("d", 2),
    53: PJSMP_mmc__MPPDefault_noteObj("ds", 2),
    84: PJSMP_mmc__MPPDefault_noteObj("e", 2),
    89: PJSMP_mmc__MPPDefault_noteObj("f", 2),
    55: PJSMP_mmc__MPPDefault_noteObj("fs", 2),
    85: PJSMP_mmc__MPPDefault_noteObj("g", 2),
    56: PJSMP_mmc__MPPDefault_noteObj("gs", 2),
    73: PJSMP_mmc__MPPDefault_noteObj("a", 2),
    57: PJSMP_mmc__MPPDefault_noteObj("as", 2),
    79: PJSMP_mmc__MPPDefault_noteObj("b", 2),
    80: PJSMP_mmc__MPPDefault_noteObj("c", 3),
    189: PJSMP_mmc__MPPDefault_noteObj("cs", 3),
    173: PJSMP_mmc__MPPDefault_noteObj("cs", 3), // firefox why
    219: PJSMP_mmc__MPPDefault_noteObj("d", 3),
    187: PJSMP_mmc__MPPDefault_noteObj("ds", 3),
    61: PJSMP_mmc__MPPDefault_noteObj("ds", 3), // firefox why
    221: PJSMP_mmc__MPPDefault_noteObj("e", 3)
};
window.PJSMP_mmc__MPPDefault_transposeOctave = 0;
window.PJSMP_mmc__MPPDefault_capsLockKey = false; 
window.PJSMP_mmc__MPPDefault_mouseYPos = 0;
document.addEventListener("mousemove", (function(event){PJSMP_mmc__MPPDefault_mouseYPos = ((event.pageY / $(window).height()) * 100).toFixed(2);}));
window.PJSMP_mmc__MPPDefault_handleKeyDown = (evt) => { //key down
    if(!document.querySelector("#chat").classList.contains("chatting") && PJSMP_mmc__controllers.toDevices.all.state && PJSMP_mmc__controllers.toDevices.keyboard.state){
        var code = parseInt(evt.keyCode);
        if(PJSMP_mmc__MPPDefault_keyBinding[code] !== undefined) {
            var binding = PJSMP_mmc__MPPDefault_keyBinding[code];
            if(!binding.held) {
                if(!PJSMP_mmc__keyboardHoldRepeat){
                    binding.held = true;
                }

                var note = binding.note;
                var octave = 1 + note.octave + PJSMP_mmc__MPPDefault_transposeOctave;
                if(evt.shiftKey) ++octave;
                else if(PJSMP_mmc__MPPDefault_capsLockKey || evt.ctrlKey) --octave;
                note = note.note + octave;
                var vol = 0.1 + (PJSMP_mmc__MPPDefault_mouseYPos / 100) * 0.6;
                PJSMP_mmc__rawNoteToObj(note, vol);
            }

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if(code == 20) { // Caps Lock
            PJSMP_mmc__MPPDefault_capsLockKey = true;
            evt.preventDefault();
        } else if(code === 0x20) { // Space Bar
            evt.preventDefault();
        } else if((code === 38 || code === 39) && PJSMP_mmc__MPPDefault_transposeOctave < 3) {
            ++PJSMP_mmc__MPPDefault_transposeOctave;
        } else if((code === 40 || code === 37) && PJSMP_mmc__MPPDefault_transposeOctave > -2) {
            --PJSMP_mmc__MPPDefault_transposeOctave;
        } else if(code == 9) { // Tab (don't tab away from the piano)
            evt.preventDefault();
        } else if(code == 8) { // Backspace (don't navigate Back)
            evt.preventDefault();
        }
    }
};
window.PJSMP_mmc__MPPDefault_handleKeyUp = (evt) => { //key up
    if(!document.querySelector("#chat").classList.contains("chatting") && PJSMP_mmc__controllers.toDevices.all.state && PJSMP_mmc__controllers.toDevices.keyboard.state){
        var code = parseInt(evt.keyCode);
        if(PJSMP_mmc__MPPDefault_keyBinding[code] !== undefined) {
            var binding = PJSMP_mmc__MPPDefault_keyBinding[code];
            if(binding.held) {
                binding.held = false;
                
                var note = binding.note;
                var octave = 1 + note.octave + PJSMP_mmc__MPPDefault_transposeOctave;
                if(evt.shiftKey) ++octave;
                else if(PJSMP_mmc__MPPDefault_capsLockKey || evt.ctrlKey) --octave;
                note = note.note + octave; 
                PJSMP_mmc__rawNoteToObj(note, undefined, true);
            }

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if(code == 20) { // Caps Lock
            PJSMP_mmc__MPPDefault_capsLockKey = false;
            evt.preventDefault();
        } else if(code === 0x20) { // Space Bar
            evt.preventDefault();
        }
    }
};
window.PJSMP_mmc__MPPDefault_handleKeyPress = (evt) => { //key press
    if(!document.querySelector("#chat").classList.contains("chatting") && PJSMP_mmc__controllers.toDevices.all.state && PJSMP_mmc__controllers.toDevices.keyboard.state){
        evt.preventDefault();
        evt.stopPropagation();
        return false;
    }
};

//MOUSE
MPP.piano.renderer.translateMouseEvent = function(evt) {
    var element = evt.target;
    var offx = 0;
    var offy = 0;
    do {
        if(!element) break; // wtf, wtf?
        offx += element.offsetLeft;
        offy += element.offsetTop;
    } while(element = element.offsetParent);
    return {
        x: (evt.pageX - offx) * window.devicePixelRatio,
        y: (evt.pageY - offy) * window.devicePixelRatio
    }
};
window.PJSMP_mmc__MPPDefault_lastKey = undefined;
window.PJSMP_mmc__MPPDefault_mouseDown = undefined;
document.querySelector("#piano").addEventListener("mousedown", function(event) { //mouse down
    if(PJSMP_mmc__controllers.toDevices.all.state && PJSMP_mmc__controllers.toDevices.mouse.state){
        PJSMP_mmc__MPPDefault_mouseDown = true; 
        event.preventDefault();

        var pos = MPP.piano.renderer.translateMouseEvent(event);
        var hit = MPP.piano.renderer.getHit(pos.x, pos.y);
        if(hit) {
            PJSMP_mmc__rawNoteToObj(hit.key.note, hit.v);
            PJSMP_mmc__MPPDefault_lastKey = hit.key;
        }
    }
});
document.addEventListener("mouseup", function(event) { //mouse up
    if(PJSMP_mmc__MPPDefault_lastKey) {
            PJSMP_mmc__rawNoteToObj(PJSMP_mmc__MPPDefault_lastKey.note, undefined, true);
    }
    PJSMP_mmc__MPPDefault_mouseDown = false;
    PJSMP_mmc__MPPDefault_lastKey = null;
});

//SETTING LISTENERS TO HTML ELEMENTS
document.addEventListener("keydown", PJSMP_mmc__MPPDefault_handleKeyDown);
document.addEventListener("keyup", PJSMP_mmc__MPPDefault_handleKeyUp);
document.addEventListener("keypress", PJSMP_mmc__MPPDefault_handleKeyPress);



 

//OTHERS FUNCTIONS
window.PJSMP_mmc__openChangelog = () => {
    window.open("").document.write("<html><head><title>"+PJSMP_mmc__moduleName+" - v"+PJSMP_mmc__version+" ChangeLog</title></head><body><h1 align='center'>"+PJSMP_mmc__moduleName+" - v"+PJSMP_mmc__version+"</h1><textarea readonly style='font-size: 20px;height: 100%; width: 100%;' rows='4' cols='50'>"+PJSMP_mmc__changeLog+"</textarea></body><script>document.close();</script></html>");
} 

