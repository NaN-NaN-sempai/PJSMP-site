// ==UserScript==
// @name         ＰＪＳＭＰ - module: player
// @version      1.0.9
// @description  ＰＪＳＭＰ - Pure JavaScript Midi Player, PJSMP's module that plays MIDI files in Multiplayer Piano
// @author       ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)
// @include      *://www.multiplayerpiano.com/*
// @include      *://piano.ourworldofpixels.com/*
// @include      *://mpp.terrium.net/*
// @grant        none
// ==/UserScript==

window.PJSMP_mp__version = "1.0.9";
window.PJSMP_mp__moduleName = "ＰＪＳＭＰ - module: player";
window.PJSMP_mp__moduleFullName = "Pure JavaScript Midi Player - module: player";
window.PJSMP_mp__changeLog = `
                                    MIDI TO JSON, MADE BY ToneJs: https://tonejs.github.io/
                                    ToneJs's GITHUB: https://github.com/Tonejs
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

THIS IS THE NEW VERSION OF THE ＰＪＳＭＰ - Pure JavaScript Midi Player, ＰＪＳＭＰ - Pure JavaScript Midi Player.
THE OLD VERSION IN BEEING DISCONTINUED AND TRANSLATED TO THIS NEW VERSION.

ＰＪＳＭＰ IS A MIDI PLAYER FOR MULTIPLAYER PIANO, IT IS MODULAR SO EACH MODULE OPERATES A DIFRENT FUNCTION.
THE NEW VERSION ALSO WORKS WITH OUR WORLD OF PIXELS PIANO: https://piano.ourworldofpixels.com/
AND MPP.TERRIUM: https://mpp.terrium.net/


ＰＪＳＭＰ - module: player
    THE MAIN MODULE THAT READ AND PLAY THE MIDI FILES.
    
ＰＪＳＭＰ - module: midi controller (THIS ONE)
    CONTROL AND ADD EFFECTS TO THE NOTES PLAYED BY THE PLAYER (USING MOUSE, KEYBOARD OR MIDI CONTROLLERS) OR NOTES PLAYED BY THE ＰＪＳＭＰ - module: player.


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
    - MINIMIZED CONTROLLERS: A WAY TO OPERATE THE PROGRAM WHEN IT IS MINIMIZED.

FUTURE IDEAS:
    - TRACK CONTROLLER MODULE: CONTROL EACH TRACK SEPARADATELY. 


__________________________________________________________CHANGE LOG_____________________________________________________________

1.0 FEATURE [FINAL VERSION]: 
    - SCRIPT: OVERALL CODE ORGANIZATION.
    - MINIMIZE PROGRAM: IF YOU HOVER THE MOUSE IN THE "ＰＪＳＭＰ - module: player" TEXT A LITTLE BUTTON WILL APPEAR IN THE RIGHT CORNER, BY CLICKNG IT THE PROGRAM WILL MINIMIZE TO A SMALL VERSION. IF YOU HOVER THE MINIMIZED PRGRAM, YOU SEE THE NAME OF THE MIDI FILE AND THE DURATION OF THE SONG.
    - DRAG AND DROP: BY HOLDING THE CLICK IN THE "ＰＪＳＭＰ - module: player" TEXT, IN THE TOP OF THE PROGRAM WINDOW, YOU CAN MOVE THE PROGRAM AND PLACE IR WHATEVER YOU WANT.
    - UI CHANGES: THE PROGRAM WINDOW FINALLY HAVE A BORDER.
    - OPEN CHANGE LOG: BY CLICKING IN THE "MADE BY: ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)" TEXT IN THE BOTTOM OF THE PROGRAM WINDOW, A NEW TAB WILL OPEN CONTAINIG THE CHAGELOG. 
    (1.0.9) => {
        - (ERROR FIX) SLIDERS: FIXED THE ERROR WHEN THE INPUT NUMBER VALUE WAS SET AS BELLOW ZERO AND THE SLIDER VALUE AUTOMATICALLY WAS SET TO THE MINOR VALUE POSSIBLE.
    }
    (1.0.8)[FULL JAPANESE] => {
        - THANKS TO: HOVER THE MOUSE IN THE "MADE BY: ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)" TEXT IN THE BOTTOM OF THE PROGRAM WINDOW TO SEE A SPECIAL THANKS TO WHO MADE THE TRANSLATION.
        - FULL JAPANESE SUPPORT: NOW THE PROGRAM HAVE FULL SUPORT TO JAPANESE. THANKS TO CED.
    }
    (1.0.7) => {
        - (ERROR FIX) NOTES PER SECOND: NOW THE NOTES PER SECONDS CALCULATE ONLY IF THE NOTE EXISTS OR ITS BEENG SENDED TO THE MIDI CONTROLLER MODULE. ALSO REMOVED THE CONSOLE LOG FROM IT.
    }
    (1.0.6) => {
        - (ERROR FIX) TRNASLATION: FIXED THE RUSSIAN "Fix" TRANSLATION FROM "Чинить" TO "Откат".
        - (ERROR FIX) INEXISTING NOTE: NOW NOTES OUT OF THE PJSMP_mp__notesArr WONT BE PLAYED AND WASTE NOTE QUOTA.
    }
    (1.0.5)[FULL RUSSIAN] => {
        - FULL RUSSIAN TRANSLATION: NOW THE PROGRAM HAVE FULL SUPORT TO RUSSIAN. THANKS TO HUSTANDANT AND LOLI AUTIST PRINCESS OF PC KINGDOM.
    }

0.09  FEATURES [NOTES PER SECOND]:
    - NOTE PER SECOND: LITTLE TAB TO SHOW THE NOTES BEEING PLAYED BY THIS SCRIPT.

0.08 FEATURES [TRANSPOSE AND MORE]:
    - ASYNCHRONY BUTTON: NEW BUTTON TO GIVE A RANDOM TIMING TO THE NOTES.
    - NOTEQUOTA BUTTON: NEW BUTTON TO PREVENT THE SONG OF STOPING WHILLE PLAYING A LOT OF NOTES, IT WORKS ONLY FOR THE MIDI PLAYER USER, THE OTHER PLAYERS WILL HEAR IT BEEING CUTTED.
    - FILE INFO: HOVER THE SONG TITLE TO GET SOME INFO FROM THE MIDI FILE, THE AMOUNT OF TRACKS AND NOTES.
    - TRANSPOSE INPUT: NEW INPUT TO CHANGE THE PITCH OF THE SONG.
    - DURATION FEEDBACK: NOW THE DURATION OF THE SON IS VISIBLE IN THE PROGRAM WINDOW.
    (0.08.5) => {
        - (ERROR FIX) => NOTE AMOUNT: NOTE AMOUNT DOES NOT RETURN TO ZERO WHEN PLAYING OR PAUSING THE SONG ANYMORE.
    }

0.07 FEATURES [OCTAVE]: 
    - OCTAVE CHANGE: NEW INPUT TO CHANGE THE OCTAVE FROM THE SONG.
    - mpp.terrium.net: NOW THE SCRIPT WORKS WITH MPP.TERRIUM.
    - SPEED IMPROVEMENT: NOW THE SPEED INPUT CAN GO TO 0 WITHOUT ERRORS.

0.06 FEATURES [LOOPS]:
    - VERSION NAME: NEW VERSION NAMES IN THE FEATURES TO DESCRIBE THE VERSION FOCUS: "VERSION FEATURES [VERSION NAME]:", CAN ALSO BE USED IN SUBVERSIONS: "(VERSION)[VERSION NAME] => {...".
    - SHOW VERSION AND MODULE: DISPLAYS IN THE CHAT THE VERSION BY SENDING THE MESSAGE "PJSMP VERSION".
    - LOOP BUTTON: NEW LOOP SONG FUNCTION, RESTART THE SONG AT IT'S END IF ITS ON.
    - NEW SYNTHAX FOR BUGS AND ISSUES: NEW SYNTHAX FOR ERRORS, GO TO THE BUGS AND ISSUES TO SEE MORE EXAMPLES: 
        [NEW SYNTHAX] => {
            - ERROR NAME:
            [REPORTED IN VERSION] [FIXED IN VERSION]<if its fixed>
            [ATEMPT TO FIX OR TO RELIEVE IT IN VERSION] => ATEMPT DESCRIPTION.<if an atempt was done>
            (! CRITICAL !)<if can stop the script> (ERROR HARM) (SINCE VERSION)
                (VERSION) => DESCRIPITION OR COMMENT ABOUT ERROR IN THIS VERSION.
                ERROR DESCRIPTION IN THE FIRST REPORTED VERSION.  
        }
    - MINNOR UI CHANGE: MOVED SLIDERS A BIT TO THE RIGHT, MORE CLOSER TO THE NEW OPTIONS BUTTONS DIV: "PJSMP_mp__fileDropContainer_textContainer".
    - DEFAULTS IN HTML CREATION: NOW THE HTML ELEMENT IS USING THE CONTROLLERS DEFAULTS AS PARAMETERS. 


0.05 FEATURES [SPEED]:
    - SPEED INPUT: NEW SLIDER TO CHANGE SONGS SPEED.
    - UI CHANGE (GOOGLE CHROME): NOW THE BUTTON OF THE INPUT NUMBERS DOESNT CUT IT'S VALUES ANYMORE, AND REMOVED ANIMATION.
    (0.05.8)[TRANSLATION FIXES] => {
        - UI UPDATES: LESS SPACE BETWEEN SLIDER'S BUTTONS, NEW EFECTS IN BUTTONS HOVER AND CLICK, GLOW IN SWITCHERS BUTTONS, AND BLUR IN THE PROGRAM BODY.
        - CHANGE LOG: NEW "FIXED BUGS & ISSUES" IN THE BUGS AND ISSUES AREA TO SHOW THE ERRORS THAT HAS ALREADY BEEN FIXED.
        - (ERROR FIX) => BACKGROUND COLOR: NOW IF THE COLOR URNS GRAY, THEN IT IS CHANGED TO A RANDOM COLOR.
        - TRANSLATION: NOW ERRORS TEXTS CAN BE TRANSLATED. EXAMPLE: "PJSMP_mp__translate("text.error.midiPlayError")".
        - TRANSLATION: NEW TRANSLATIONS SECTIONS. EXEMPLE: "PJSMP_mp__translate("sliders.speed")".
        - TRANSLATION: NEW DEBUG OPTION FOR TRANSLATIONS: "PJSMP_mp__debugLenguage".
    }
    (0.05.7) => {
        - CHANGE LOG: THE NEW "HOW TO USE" AREA, IN THE CHANGE LOG TEXT, SHOWS HOW TO INSTAL AND USE THE SCRIPT.
    }
    (0.05.6) => {
        - (ERROR FIX) => TAMPERMONKEY/GREASEMONKEY: NOW PJSMP FULLY WORKS WITH TAMPERMONKEY AND GREASYMONKEY.
        - CHANGE LOG: SOME NEW SYNTHAX FOR THE CHANGE LOG TEXT:
            [NEW SYNTHAXES] = {
                HYPHEN BEFORE ITENS: "- ITEN NAME: ITEN TEXT DESCRIPITION".
                MULTI ITENS CANTAINERS: "TEXT: [CONTAINER TITLE] = { ITEN: DESCRIPITION. ANOTHER ITEN: DESCRIPITION. ETC... }".
                FEATURES FOR ERROR FIXES: "- (ERROR FIX) => NAME OF THE ERROR: ERROR TEXT DESCRIPITION".
                BUGS AND ISSUES: "optional->{[FIX STAGE]} optional->{=> FIX DESCRIPTION} - ERROR NAME: optional->{(! CRITICAL !)} (ERROR HARM) (SINCE VERSION) ERROR DESCRIPITION.".
            }
    }
    (0.05.5) => {
        - (ERROR FIX) => TRANSLATION: FIXED THE ERROR WITH THE NON SUPORTED LENGUAGES, NOW THE PROGRAM WILL BE TRANSLATED TO ENGLISH IF THE LENGUAGE IS NOT SUPORTED.
    }

0.04 FEATURES [VELOCITY SLIDER]:
    - VELOCITY INCREMENT: A NEW SLIDER TO INCREMENT THE VELOCITY OF THE NOTES.
        [IN THIS NEW SCRIPT THE SLIDERS WILL HAVE A NEW PATTER] = {
            SLIDER: SLIDER TO CHANGE THE VALUE WITH SOME LIMITS.
            INPUT: INPUT TO CHANGE THE VALUE INFINITELY.
            FIX BUTTON: RETURNS VALUE TO DEFAULT VALUE.
            STATE SWITCHER BUTTON: DISPLAY THE NAME OF THE EFFECT AND TURNS ON OR OFF THE EFFECT.
        }
    - COLOR SET: NEW VARIABLE TO SAVE AND REUSE COLORS FOR THE SCRIPT.
    - COLOR EFFECT: THE BUTTONS THAT ARE ON BECOME GREEN, AND THE ONE THAT ARE OFF TURNS RED.

0.03 FEATURES [PAUSE]:
    - PLAY/PAUSE/STOP: ALL BASIC FUNCTIONS ARE NOW WORKING JUST FINE.
    - ERROR CATCHERS: PREVENT AND CATCH ERRORS AND BUGS.

0.02 FEATURES [PLAY AND STOP]:
    - PLAY/PAUSE/STOP: THE PLAY AND STOP BUTTONS ARE WORKING JUST FINE, THE PAUSE STILL NEED SOME WORK.
    - UI STYLE: STYLIZED THE FILE NAME FIELD. COPYED FROM THE OLD VERSION.

0.01 FEATURES [FIRST WORKING VERSION]:
    - WORKING: THE SCRIPT PLAYS MIDI FILES WHEN THEY ARE LOADED.
    - TRANSLATIONS: THE SCRIPT CAN SUPORT TRANSLATIONS. RIGHT NOW THERE ARE THREE LENGUAGES: ENGLISH, PORTUGUESE AND RUSSIAN 


________________________________________________________BUGS AND ISSUES__________________________________________________________
    
KNOWN BUGS & ISSUES:
    - FREEZE TAB:
    [REPORTED IN 0.06]
    (SLIGHT DANGEROUS) (SINCE 0.01)
        THE PAGE FREEZES WHEN BIG MIDI FILES LOADS, STARTS TO PLAY AND CHANGE SPEED. IT, POSSIBLE, CAN CRASH THE BROWSER.
        TO PREVENT THE FREEZE WHEN THE SPEED IS BEEING CHANGED: PAUSE THE SONG, THEN CHANGE THE SPEED, THEN PLAY IT AGAIN.

    - DESYNCHRONIZATION IN TRACKS:
    [REPORTED IN 0.05.6] 
    (SLIGHT ANNOYING) (SINCE 0.01)
        (0.06) => HAPPENS MORE OFTEN WHEN THE BROWSER DEVELOPER TAB IS OPENED.
        SOMETIMES THE TRACKS GET DESYNCHRONIZED, IT APPEAR TO BE THE LACK OF PROCESSING POWER OR SOMETHING TAKEING MUCH RAM ON THE PC.

    - BACKGROUND COLOR:
    [REPORTED IN 0.05.6]
    [PREVENT ERROR IMPROVISATION IN 0.05.8] => IF THE PROGRAM CATCHS THE GRAY COLOR AS THE PLAYER COLOR, IT TURNS TO A RANDOM COLOR INSTEAD.
    (NOT HARMFUL) (SINCE 0.01)
        SOMETIMES THE BACKGROUND COLOR DOESN'T GET THE PLAYER COLOR AND TURNS TO GRAY.


FIXED BUGS & ISSUES:
    - TAMPERMONKEY/GREASYMONKEY:
    [REPORTED IN 0.05.6] [FIXED IN 0.05.6]
    (! CRITICAL !) (RUNS BUT DOESN'T PLAY) (SINCE 0.01)
        THE CODE DOESN'T REALLY WORKS AS A USERSCRIPT WITH TAMPERMONKEY OR GREASYMONKEY, IT RUNS ONLY BY PASTING IN THE CONSOLE.
    
    - TRANSLATIONS:
    [REPORTED IN 0.05.6] [FIDED IN 0.05.6]
    (! CRITICAL !) (DOESN'T RUN) (SINCE 0.01)
        CODE GET TRANSLATION AS UNDEFINED AND SCRIPT CRASHES.


_________________________________________________________________________________________________________________________________


                                                FEEL FREE TO EDIT THIS CODE.
`;







































//____________________________________________________CODE STARTS HERE___________________________________________________________

window.PJSMP_mp__debugLenguage = undefined; //CHANGE THIS VALUE TO CHANGE THE LENGUAGE OF THE PROGRAM (BEFORE LOADING THE CODE) 
window.PJSMP_mp__translations = {
    en: /* DEFALT LENGUAGE IN CASE OF UNDEFINED TRANSLATIONS */ {
        play: "Play",
        pause: "Pause",
        stop: "Stop",
        fix: "Fix",
        options: {
            sustain: "Sustain",
            sustainTitle: "Keep notes sustained",
            loop: "Loop",
            loopTitle: "Restart the song at it's end",
            asynchrony: "Asynchrony",
            asynchronyTitle: "Add or remove a random asynchrony to the notes",
            notequota: "NoteQuota",
            notequotaTitle: "Remove the Client Side note quota\nBut the Server Side one still there\nYou will not be heard from others playes if it get in its's limit"
        },
        sliders: {
            velocityIncrement: "Velocity Increment",
            speed: "Song Speed"
        },
        origin: {
            octave: "Origin Octave",
            transpose: "Origin Pitch"
        },
        text: {
            noMidiLoad: "No midi file loaded",
            chooseMidi: "Choose a midi file",
            error: {
                midiPlayError: "Unable to play midi file",
                midiLoadError: "Unable to load midi file"
            },
            tracks: "Tracks",
            notes: "Notes",
            notePerSecond: "Amount of notes per second requested by "+PJSMP_mp__moduleName+"\nDisable sustain for less requests",
            openWindow: "Open program window",
            closeWindow: "Minimize program window",
            playing: "Now playing",
            thxTo: "English translation by ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)"
        }
    },
    pt: {
        play: "Tocar",
        pause: "Pausar",
        stop: "Parar",
        fix: "Padrão",
        options: {
            sustain: "Sustentar",
            sustainTitle: "Manter teclas precionadas",
            loop: "Ciclo",
            loopTitle: "Tocar novamente ao fim da música",
            asynchrony: "Assincronia",
            asynchronyTitle: "Adiciona ou remove uma assincronia aleatória nas notas",
            notequota: "Limitador",
            notequotaTitle: "Remove o limitador de notas do site\nMas o limitador do servido continua existindo\nVocê não sera ouvido pelos outros jogadores se o limite for ultrapassado"
        },
        sliders: {
            velocityIncrement: "Acrescentar Velocidade",
            speed: "Velocidade da Música"
        },
        origin: {
            octave: "Origem da Oitava",
            transpose: "Origem do Tom"
        },
        text: {
            noMidiLoad: "Nem um arquivo midi",
            chooseMidi: "Escolha um arquivo",
            error: {
                midiPlayError: "Incapaz de tocar este arquivo",
                midiLoadError: "Incapar de carregar este arquivo"
            },
            tracks: "Trilhas",
            notes: "Notas",
            notePerSecond: "Quantidade de notas sendo enviadas pelo modulo "+PJSMP_mp__moduleName+"\nDesabilite o sustenar para enviar menos notas",
            openWindow: "Abir programa",
            closeWindow: "Minimizar programa",
            thxTo: "Portuguese translation by ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)"
        }
    }, 
    ru: /* thanks to Hustandant and Loli Autist */ {
        play: "Играть",
        pause: "Пауза",
        stop: "Стоп",
        fix: "Откат",
        options: {
            sustain: "Сустейн",
            sustainTitle: "Кнопка, позволяющая существенно изменять звучание инструмента, увеличивая продолжительность звука, или делая его глухим",
            loop: "Повторение", 
            loopTitle: "Заново воспроизводит миди-файл",
            asynchrony: "Асинхрония",
            asynchronyTitle: "Функция изменяющая ритмический рисунок",
            notequota: "Регулятор нот",
            notequotaTitle: "Функция позволяющая задать максимум нот которые могут проигрываться\nВас не будут слышать другие игроки, если будет достигнут лимит нот, заданный в регуляторе нот сервера"
        },
        sliders: {
            velocityIncrement: "Добавление скорости ",
            speed: "Скорость воспроизведения"
        },
        origin: {
            octave: "Транспозиция на полутона",
            transpose: "Транспозиция "
        },
        text: {
            noMidiLoad: "Миди файл не загружен",
            chooseMidi: "Выберите файл",
            error: {
                midiPlayError: "Не удалось загрузить миди файл",
                midiLoadError: "Невозможно загрузить этот миди-файл"
            },
            tracks: "Аудиодорожки",
            notes: "Ноты",
            notePerSecond: "Количество нот в секунду заданное "+PJSMP_mp__moduleName+"\nЗадержка нот выключена для меньшего запроса",
            openWindow: "Открывает программное окно",
            closeWindow: "Сворачивание программного окна",
            playing: "Сейчас играет",
            thxTo: "Russian translation thanks to Hustandant and Loli Autist"
        }
    },
    ja: /* thanks to ced */ {
        play: "再生",
        pause: "一時停止",
        stop: "停止",
        fix: "修正",
        options: {
            sustain: "サスティン",
            sustainTitle: "ノートを持続させる",
            loop: "ループ",
            loopTitle: "曲の最後に再起動する",
            asynchrony: "非同期",
            asynchronyTitle: "ノートにランダムな非同期を追加または削除します。",
            notequota: "ノートクォータ",
            notequotaTitle: "クライアント側のノートを削除されますが、サーバー側のノートは残ります。"
        },
        sliders: {
            velocityIncrement: "速度の増加",
            speed: "曲の速度"
        },
        origin: {
            octave: "音階の起源",
            transpose: "ピッチの起源"
        },
        text: {
            noMidiLoad: "MIDIファイルが読み込まれていません。",
            chooseMidi: "ファイルを選択する",
            error: {
                midiPlayError: "MIDIの再生に失敗しました。",
                midiLoadError: "MIDIの読み込みに失敗しました。"
            },
            tracks: "トラック",
            notes: "ノーツ",
            notePerSecond: `${PJSMP_mp__moduleName}が要求する毎秒のノート量\nリクエスト数が少ない場合はサステインを無効にする`,
            openWindow: "プログラムウィンドウを開く",
            closeWindow: "プログラムウィンドウの最小化",
            playing: "再生中",
            thxTo: "Japanese translation thanks to ced"
        }
    }
};

window.PJSMP_mp__translate = (text) => {
    var userLanguage = window.PJSMP_mp__debugLenguage || navigator.language || navigator.userLanguage;

    var selectedLeng = typeof PJSMP_mp__translations[userLanguage.substr(0,2)] == "undefined"? PJSMP_mp__translations["en"]:
                    typeof leng == "string"? PJSMP_mp__translations[leng]:
                    PJSMP_mp__translations[userLanguage.substr(0,2)];

    var textObj = text.replace(/\./g," ").split(" ");

    var returnTranslation;
    var fixedReturnTranslation;
    textObj.forEach((e)=>{
        returnTranslation = (returnTranslation==undefined?selectedLeng:returnTranslation)[e];
        fixedReturnTranslation = (fixedReturnTranslation==undefined?PJSMP_mp__translations["en"]:fixedReturnTranslation)[e];
    });

    return returnTranslation == undefined? fixedReturnTranslation: returnTranslation;
}

window.PJSMP_mp__playerColor = MPP.client.getOwnParticipant().color=="#777"?Math.floor(Math.random()*16777215).toString(16):MPP.client.getOwnParticipant().color;
window.PJSMP_mp__convertHex = (hex, opacity) => {
    if(hex.length == 4){
        hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    return 'rgba('+r+','+g+','+b+','+(typeof opacity != "number"? 0.5: opacity)+')';
}

window.PJSMP_mp__colors = { //PRESETED COLORS
    on: "rgba(11, 133, 0, 1)",
    off: "rgba(255, 34, 31, 1)",
    darkerOn: "rgba(11, 50, 0, 1)",
    darkerOff: "rgba(90, 14, 11, 1)",
    darkerBg: "rgba(20, 20, 20, .7)",
    secondBg: "rgba(157, 154, 150, 0.35)",

    bgColor: PJSMP_mp__convertHex(PJSMP_mp__playerColor),
    bgColor2: PJSMP_mp__convertHex(PJSMP_mp__playerColor, .9)
};

MPP.client.on("a", function (msg) { //SHOW VERSION COMMAND
    if(["player version", "player v", "pjsmp version", "pjsmp v", "pjsmp module", "pjsmp m"].includes(msg.a.toLowerCase())){
        var chatVHour = String(new Date().getHours()).padStart(2, "0")+":"+String(new Date().getMinutes()).padStart(2, "0");
        var chatV = "("+chatVHour+"): ";
        MPP.chat.send(chatV+"using "+PJSMP_mp__moduleName+" - v"+PJSMP_mp__version);
    }
});

window.PJSMP_mp__setBtnTextColor = (button, color, blur) => { //SET BUTTON COLLOR
    button.style.color = color;
    button.style.textShadow = "0px 0px "+(typeof blur != "number"? "5px": blur+"px")+" "+color;
}

window.PJSMP_mp__controllers = { //PROGRAM CONTROLLERS
    //BUTTONS
    sustain: {
        state: true
    }, 
    loop: {
        state: false
    },
    asynchrony: {
        state: false
    },
    notequota: {
        state: false
    },

    //SLIDERS
    velocityIncrement: {
        state: false,
        value: 0,
        default: 0
    },
    speed: {
        state: false,
        value: 1,
        default: 1
    },

    //ORIGIN CONTROLLERS
    originOctave: {
        state: true,
        value: 0,
        default: 0
    },
    originTranspose: {
        state: true,
        value: 0,
        default: 0
    }
}

window.PJSMP_mp__windowMinimized = false;

window.PJSMP_mp__NPS = 0;
var PJSMP_mp__NPS_interval = setInterval(()=>{ //NOTES PER SECOND
    var retNPS = PJSMP_mp__NPS * (PJSMP_mp__controllers.sustain.state? 2: 1);
    document.querySelector("#PJSMP_mp__NPSContainer_text").innerHTML = retNPS;
    PJSMP_mp__NPS = 0;
}, 1000);

if(!document.querySelector("#PJSMP_mp__mainContainer")){
    //PROGRAM MAIN CONTAINER
    var PJSMP_mp__mainContainer = document.createElement("div");
    PJSMP_mp__mainContainer.id = "PJSMP_mp__mainContainer";
    PJSMP_mp__mainContainer.style.position = "fixed";
    PJSMP_mp__mainContainer.style.top = "30px";
    PJSMP_mp__mainContainer.style.right = "30px";
    PJSMP_mp__mainContainer.style.backdropFilter = "blur(1.5px)";

    //CSS STYLE TAG
    var PJSMP_mp__CSS = document.createElement("style");
    PJSMP_mp__CSS.innerHTML = `
        #PJSMP_mp__window {
            display: inline-block;
            border: solid `+PJSMP_mp__colors.darkerBg+`;
            border-radius: 10px 0px 10px 0px;
            transition: .2s;
        }

        #PJSMP_mp__mainContainer{
            width: fit-content;
        }
        #PJSMP_mp__mainContainer .PJSMP_mp__buttonClass{
            margin: 0px 0px 5px 5px;
            padding: 5px;
        }
        #PJSMP_mp__mainContainer button{ 
            background: rgba(60, 60, 60, 0.7);
            border: 1px solid `+PJSMP_mp__colors.darkerBg+`;
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
        #PJSMP_mp__mainContainer button:hover{
            text-shadow: 0px 0px 2px white;
            background: `+PJSMP_mp__colors.secondBg+`;
        }
        #PJSMP_mp__mainContainer button:active{
            text-shadow: 0px 0px 5px white;
            background: `+PJSMP_mp__colors.darkerBg+`;
        } 
        #PJSMP_mp__mainContainer input[type=file]{
            opacity: 0;
            width: 0px;
            height: 0px;
            position: absolute;
            pointer-events: none;
        }

        #PJSMP_mp__fileDropContainer_textContainer{
            font-size: 15px;
            background: `+PJSMP_mp__colors.darkerBg+`;
            border-radius: 7px 0px 0px 0px;
            max-height: 30px;
            overflow-y: auto;
            width: 350px;
        }
        #PJSMP_mp__fileDropContainer_textContainer_text{
            margin-left: 5px;
            margin-right: 5px;
        }
        #PJSMP_mp__fileDropContainer_textContainer::-webkit-scrollbar-track{
            -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);
            border-radius: 10px;
            background-color: rgba(255, 255, 255, .1);
        }
        #PJSMP_mp__fileDropContainer_textContainer::-webkit-scrollbar{
            width: 5px;
            height: 5px;
        }
        #PJSMP_mp__fileDropContainer_textContainer::-webkit-scrollbar-thumb{
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: `+PJSMP_mp__colors.darkerBg+`;
        }


        #PJSMP_mp__basicControllersContainer_options{
            display: grid;
            grid-template-columns: auto;
            position: relative;
            top: -10px;
        }

        .inputRangeContainer{
            display: grid;
            grid-template-columns: auto auto auto;
        }
        .inputRangeContainer *{
            outline: none;
        }
        .inputRangeSubContainer{
            display: grid;
            grid-gap: 5px;
            position: relative;
            bottom: 35px;
            width: 43px;
            overflow: hidden;
            background-color: `+PJSMP_mp__colors.darkerBg+`;
            border: `+PJSMP_mp__colors.darkerBg+` solid;
            border-radius: 20px;
            margin-left: 5px;
        }
        .inputRangeContainer input[type=range][orient=vertical]{
            writing-mode: bt-lr; /* IE */
            -webkit-appearance: slider-vertical; /* WebKit */
            width: 8px;
            height: 60px;
            position: relative;
            left: 50%;
            bottom: -2px;
            transform: translateX(-50%);
        }
        .inputRangeContainer input[type=number]{
            background: `+PJSMP_mp__colors.darkerBg+`;
            color: white;
            text-align: center;
            width: 92%;
            border: none;
            transition: 1s;
        }
        .inputRangeContainer input[type="number"]::-webkit-inner-spin-button{
            cursor: pointer;
            display: none;
        }
        .inputRangeContainer input[type="number"]:hover::-webkit-inner-spin-button{
            display: inline;
        }

        .oringinController{
            margin-left: 3px;
            margin-bottom: 5px;
            height: fit-content;
            width: fit-content; 
            background-color: `+PJSMP_mp__colors.darkerBg+`;
            border: `+PJSMP_mp__colors.darkerBg+` solid;
            border-radius: 10px;
        }
        .oringinController button{
            position: relative;
            top: -6px;
        }
        .oringinController input[type=number]{
            position: relative;
            top: -6px;
            margin-left: 5px; 
            margin-top: 5px; 
            background: `+PJSMP_mp__colors.darkerBg+`;
            width: 50px;
            color: white;
            text-align: center;
            border: 1px solid `+PJSMP_mp__colors.secondBg+`;
            border-radius: 5px;
            transition: 1s;
            outline: none;
        }

        #PJSMP_mp__infoContainer{
            margin-left: 5px; 
            width: fit-content;
            display: grid;
            grid-template-columns: auto auto auto auto;
        }
        #PJSMP_mp__infoContainer span, #PJSMP_mp__NPSContainer_text{
            font-size: 10px;
            text-align: center;
            padding: 0px 2px 0px 2px;
            margin-bottom: 5px;
            background: `+PJSMP_mp__colors.darkerBg+`;
            border: solid `+PJSMP_mp__colors.darkerBg+`;
            border-radius: 25px;
        }
        #PJSMP_mp__NPSContainer {
            position: absolute;
            bottom: 0px;
            right: 0px;
            margin: 5px 5px 0px 5px;
        }
        #PJSMP_mp__NPSContainer span{ 
            display: inline-block;
            width: 35px;
        }

        #PJSMP_mp__bottomName{
            position: absolute;
            bottom: -22px;
            left: 0px;
            height: 20px;
            background: `+PJSMP_mp__colors.bgColor2+`;
            border: solid `+PJSMP_mp__colors.darkerBg+`;
            border-radius: 0px 0px 10px 10px;
        }
        #PJSMP_mp__bottomName span, #PJSMP_mp__dragAndDrop span{
            font-size: 10px;
            text-align: center;
            padding: 0px 2px 0px 2px;
            position: relative;
            bottom: 65%;
            transform: translateY(50%);
            text-shadow: 0px 0px 2px white;
            transition: 1s;
        }
        #PJSMP_mp__bottomName span:hover, #PJSMP_mp__dragAndDrop span:hover{
            text-shadow: 0px 0px 4px white, 0px 0px 4px white;
        }

        #PJSMP_mp__dragAndDrop{
            position: absolute;
            top: -22px;
            right: 0px;
            height: 20px;
            width: max-content;
            background: `+PJSMP_mp__colors.bgColor2+`;
            border: solid `+PJSMP_mp__colors.darkerBg+`;
            border-radius: 10px 10px 0px 0px;
            cursor: move;
            overflow: hidden;
        }
        #PJSMP_mp__dragAndDrop button{
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
        #PJSMP_mp__dragAndDrop:hover #PJSMP_mp__dragAndDrop_ocBtn{
            margin: 0px 0px 0px 5px;
            width: 17px;
            opacity: 1;
            transition: width .5s, margin .5s, opacity .5s, background .5s;
        }
    `;

    PJSMP_mp__mainContainer.appendChild(PJSMP_mp__CSS);

    //PROGRAM WINDOW
    var PJSMP_mp__window = document.createElement("div");
    PJSMP_mp__window.id = "PJSMP_mp__window";
    PJSMP_mp__window.className = "PJSMP_mp__window";
    PJSMP_mp__window.style.background = PJSMP_mp__colors.bgColor;


    //FILEDROP SECTION START
        var PJSMP_mp__fileDropContainer = document.createElement("div");
        PJSMP_mp__fileDropContainer.id = "PJSMP_mp__fileDropContainer";

        var PJSMP_mp__fileDropContainer_textContainer = document.createElement("div");
        PJSMP_mp__fileDropContainer_textContainer.id = "PJSMP_mp__fileDropContainer_textContainer";
    
        var PJSMP_mp__fileDropContainer_textContainer_text = document.createElement("p");
        PJSMP_mp__fileDropContainer_textContainer_text.id = "PJSMP_mp__fileDropContainer_textContainer_text";
        PJSMP_mp__fileDropContainer_textContainer_text.innerHTML = PJSMP_mp__translate("text.noMidiLoad");

        //input file
        var PJSMP_mp__inputFile = document.createElement("input");
        PJSMP_mp__inputFile.id = "PJSMP_mp__inputFile";
        PJSMP_mp__inputFile.type = "file";
        PJSMP_mp__inputFile.accept = "audio/midi";

        //choose midi button
        var PJSMP_mp__fileDropBtn = document.createElement("button");
        PJSMP_mp__fileDropBtn.id = "PJSMP_mp__fileDropBtn";
        PJSMP_mp__fileDropBtn.className = "PJSMP_mp__buttonClass";
        PJSMP_mp__fileDropBtn.innerHTML = PJSMP_mp__translate("text.chooseMidi");
        PJSMP_mp__fileDropBtn.setAttribute("onclick", 'document.querySelector("#PJSMP_mp__inputFile").click()');

        
        PJSMP_mp__fileDropContainer_textContainer.appendChild(PJSMP_mp__fileDropContainer_textContainer_text);
        PJSMP_mp__fileDropContainer.appendChild(PJSMP_mp__fileDropContainer_textContainer)

        PJSMP_mp__fileDropContainer.appendChild(PJSMP_mp__inputFile);

        PJSMP_mp__window.appendChild(PJSMP_mp__fileDropContainer);
        PJSMP_mp__window.appendChild(PJSMP_mp__fileDropBtn);
        PJSMP_mp__window.appendChild(document.createElement("br"));
    //FILEDROP SECTION END


    //PLAY/PAUSE BUTTON
    var PJSMP_mp__playBtn = document.createElement("button");
    PJSMP_mp__playBtn.id = "PJSMP_mp__playBtn";
    PJSMP_mp__playBtn.className = "PJSMP_mp__buttonClass";
    PJSMP_mp__playBtn.innerHTML = PJSMP_mp__translate("play");
    PJSMP_mp__playBtn.setAttribute("onclick", 'PJSMP_mp__playPauseButtonClick(this)');

    PJSMP_mp__window.appendChild(PJSMP_mp__playBtn)

    //STOP BUTTON
    var PJSMP_mp__stopBtn = document.createElement("button");
    PJSMP_mp__stopBtn.id = "PJSMP_mp__stopBtn";
    PJSMP_mp__stopBtn.className = "PJSMP_mp__buttonClass";
    PJSMP_mp__stopBtn.innerHTML = PJSMP_mp__translate("stop");
    PJSMP_mp__stopBtn.setAttribute("onclick", 'PJSMP_mp__stopButtonClick()');

    PJSMP_mp__window.appendChild(PJSMP_mp__stopBtn);


    //BASIC CONTROLLERS SECTION START
        var PJSMP_mp__basicControllersContainer = document.createElement("div");
        PJSMP_mp__basicControllersContainer.id = "PJSMP_mp__basicControllersContainer";
        PJSMP_mp__basicControllersContainer.style.float = "right";


        var PJSMP_mp__basicControllersContainer_options = document.createElement("div");
        PJSMP_mp__basicControllersContainer_options.id = "PJSMP_mp__basicControllersContainer_options";
        PJSMP_mp__basicControllersContainer_options.style.float = "right";
        PJSMP_mp__basicControllersContainer_options.style.marginRight = "5px";

        var PJSMP_mp__basicControllersContainer_sustainBtn = document.createElement("button");
        PJSMP_mp__basicControllersContainer_sustainBtn.id = "PJSMP_mp__basicControllersContainer_sustainBtn";
        PJSMP_mp__basicControllersContainer_sustainBtn.className = "PJSMP_mp__buttonClass";
        PJSMP_mp__basicControllersContainer_sustainBtn.innerHTML = PJSMP_mp__translate("options.sustain");
        PJSMP_mp__basicControllersContainer_sustainBtn.title = PJSMP_mp__translate("options.sustainTitle");
        PJSMP_mp__setBtnTextColor(PJSMP_mp__basicControllersContainer_sustainBtn, PJSMP_mp__controllers.sustain.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
        PJSMP_mp__basicControllersContainer_sustainBtn.setAttribute("onclick", 'PJSMP_mp__optionsBtnHandler(this, PJSMP_mp__controllers.sustain)');

        PJSMP_mp__basicControllersContainer_options.appendChild(PJSMP_mp__basicControllersContainer_sustainBtn);


        var PJSMP_mp__basicControllersContainer_loopBtn = document.createElement("button");
        PJSMP_mp__basicControllersContainer_loopBtn.className = "PJSMP_mp__buttonClass";
        PJSMP_mp__basicControllersContainer_loopBtn.innerHTML = PJSMP_mp__translate("options.loop");
        PJSMP_mp__basicControllersContainer_loopBtn.title = PJSMP_mp__translate("options.loopTitle");
        PJSMP_mp__setBtnTextColor(PJSMP_mp__basicControllersContainer_loopBtn, PJSMP_mp__controllers.loop.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
        PJSMP_mp__basicControllersContainer_loopBtn.setAttribute("onclick", 'PJSMP_mp__optionsBtnHandler(this, PJSMP_mp__controllers.loop)');

        PJSMP_mp__basicControllersContainer_options.appendChild(PJSMP_mp__basicControllersContainer_loopBtn);


        var PJSMP_mp__basicControllersContainer_asynchronyBtn = document.createElement("button");
        PJSMP_mp__basicControllersContainer_asynchronyBtn.className = "PJSMP_mp__buttonClass";
        PJSMP_mp__basicControllersContainer_asynchronyBtn.innerHTML = PJSMP_mp__translate("options.asynchrony");
        PJSMP_mp__basicControllersContainer_asynchronyBtn.title = PJSMP_mp__translate("options.asynchronyTitle");
        PJSMP_mp__setBtnTextColor(PJSMP_mp__basicControllersContainer_asynchronyBtn, PJSMP_mp__controllers.loop.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
        PJSMP_mp__basicControllersContainer_asynchronyBtn.setAttribute("onclick", 'PJSMP_mp__optionsBtnHandler(this, PJSMP_mp__controllers.asynchrony)');

        PJSMP_mp__basicControllersContainer_options.appendChild(PJSMP_mp__basicControllersContainer_asynchronyBtn);


        var PJSMP_mp__basicControllersContainer_notequotaBtn = document.createElement("button");
        PJSMP_mp__basicControllersContainer_notequotaBtn.className = "PJSMP_mp__buttonClass";
        PJSMP_mp__basicControllersContainer_notequotaBtn.innerHTML = PJSMP_mp__translate("options.notequota");
        PJSMP_mp__basicControllersContainer_notequotaBtn.title = PJSMP_mp__translate("options.notequotaTitle");
        PJSMP_mp__setBtnTextColor(PJSMP_mp__basicControllersContainer_notequotaBtn, PJSMP_mp__controllers.loop.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
        PJSMP_mp__basicControllersContainer_notequotaBtn.setAttribute("onclick", 'PJSMP_mp__optionsBtnHandler(this, PJSMP_mp__controllers.notequota)');

        PJSMP_mp__basicControllersContainer_options.appendChild(PJSMP_mp__basicControllersContainer_notequotaBtn);

        PJSMP_mp__basicControllersContainer.appendChild(PJSMP_mp__basicControllersContainer_options);


        //sliders and inputs
            var PJSMP_mp__basicControllersContainer_inputRangeContainer = document.createElement("div");
            PJSMP_mp__basicControllersContainer_inputRangeContainer.className = "inputRangeContainer";

            //velocity increment
            var PJSMP_mp__basicControllersSubContainer_volumeEncrementContainer = document.createElement("div");
            PJSMP_mp__basicControllersSubContainer_volumeEncrementContainer.className = "inputRangeSubContainer";
            PJSMP_mp__basicControllersSubContainer_volumeEncrementContainer.title = PJSMP_mp__translate("sliders.velocityIncrement");


            var PJSMP_mp__basicControllersContainer_volumeEncrementInput = document.createElement("input");
            PJSMP_mp__basicControllersContainer_volumeEncrementInput.type = "range";
            PJSMP_mp__basicControllersContainer_volumeEncrementInput.value = PJSMP_mp__controllers.velocityIncrement.default;
            PJSMP_mp__basicControllersContainer_volumeEncrementInput.min = "-1";
            PJSMP_mp__basicControllersContainer_volumeEncrementInput.max = "3";
            PJSMP_mp__basicControllersContainer_volumeEncrementInput.step = ".01";
            PJSMP_mp__basicControllersContainer_volumeEncrementInput.setAttribute("oninput", 'PJSMP_mp__sliderHandler(this, PJSMP_mp__controllers.velocityIncrement)');
            PJSMP_mp__basicControllersContainer_volumeEncrementInput.setAttribute("orient", 'vertical');

            PJSMP_mp__basicControllersSubContainer_volumeEncrementContainer.appendChild(PJSMP_mp__basicControllersContainer_volumeEncrementInput);
            

            var PJSMP_mp__basicControllersContainer_volumeEncrementInputNumber = document.createElement("input");
            PJSMP_mp__basicControllersContainer_volumeEncrementInputNumber.type = "number";
            PJSMP_mp__basicControllersContainer_volumeEncrementInputNumber.value = PJSMP_mp__controllers.velocityIncrement.default;
            PJSMP_mp__basicControllersContainer_volumeEncrementInputNumber.step = ".1";
            PJSMP_mp__basicControllersContainer_volumeEncrementInputNumber.setAttribute("oninput", 'PJSMP_mp__sliderHandler(this, PJSMP_mp__controllers.velocityIncrement)');

            PJSMP_mp__basicControllersSubContainer_volumeEncrementContainer.appendChild(PJSMP_mp__basicControllersContainer_volumeEncrementInputNumber);


            var PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn = document.createElement("button");
            PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn.className = "PJSMP_mp__buttonClass";
            PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn.innerHTML = PJSMP_mp__translate("fix");
            PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn.style.height = "20px";
            PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn.style.width = "100%";
            PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn.style.padding = "0px";
            PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn.style.margin = "0px";
            PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn.setAttribute("onclick", 'PJSMP_mp__sliderHandler(this, PJSMP_mp__controllers.velocityIncrement)');
            
            PJSMP_mp__basicControllersSubContainer_volumeEncrementContainer.appendChild(PJSMP_mp__basicControllersContainer_volumeEncrementFixBtn);


            var PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn = document.createElement("button");
            PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn.className = "PJSMP_mp__buttonClass";
            PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn.innerHTML = "V";
            PJSMP_mp__setBtnTextColor(PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn, PJSMP_mp__controllers.velocityIncrement.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
            PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn.style.height = "20px";
            PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn.style.width = "100%";
            PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn.style.padding = "0px";
            PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn.style.margin = "0px";
            PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn.setAttribute("onclick", 'PJSMP_mp__sliderHandler(this, PJSMP_mp__controllers.velocityIncrement)');

            PJSMP_mp__basicControllersSubContainer_volumeEncrementContainer.appendChild(PJSMP_mp__basicControllersContainer_volumeEncrementSwitchBtn);

            PJSMP_mp__basicControllersContainer_inputRangeContainer.appendChild(PJSMP_mp__basicControllersSubContainer_volumeEncrementContainer);



            //speed
            var PJSMP_mp__basicControllersSubContainer_speedContainer = document.createElement("div");
            PJSMP_mp__basicControllersSubContainer_speedContainer.className = "inputRangeSubContainer";
            PJSMP_mp__basicControllersSubContainer_speedContainer.title = PJSMP_mp__translate("sliders.speed");


            var PJSMP_mp__basicControllersContainer_speedInput = document.createElement("input");
            PJSMP_mp__basicControllersContainer_speedInput.type = "range";
            PJSMP_mp__basicControllersContainer_speedInput.value = PJSMP_mp__controllers.speed.default;
            PJSMP_mp__basicControllersContainer_speedInput.min = "0";
            PJSMP_mp__basicControllersContainer_speedInput.max = "4";
            PJSMP_mp__basicControllersContainer_speedInput.step = ".01";
            PJSMP_mp__basicControllersContainer_speedInput.setAttribute("oninput", 'PJSMP_mp__sliderHandler(this, PJSMP_mp__controllers.speed)');
            PJSMP_mp__basicControllersContainer_speedInput.setAttribute("orient", 'vertical');

            PJSMP_mp__basicControllersSubContainer_speedContainer.appendChild(PJSMP_mp__basicControllersContainer_speedInput);


            var PJSMP_mp__basicControllersContainer_speedInputNumber = document.createElement("input");
            PJSMP_mp__basicControllersContainer_speedInputNumber.type = "number";
            PJSMP_mp__basicControllersContainer_speedInputNumber.value = PJSMP_mp__controllers.speed.default;
            PJSMP_mp__basicControllersContainer_speedInputNumber.min = "0";
            PJSMP_mp__basicControllersContainer_speedInputNumber.step = ".1";
            PJSMP_mp__basicControllersContainer_speedInputNumber.setAttribute("oninput", 'PJSMP_mp__sliderHandler(this, PJSMP_mp__controllers.speed)');

            PJSMP_mp__basicControllersSubContainer_speedContainer.appendChild(PJSMP_mp__basicControllersContainer_speedInputNumber);


            var PJSMP_mp__basicControllersContainer_speedFixBtn = document.createElement("button");
            PJSMP_mp__basicControllersContainer_speedFixBtn.className = "PJSMP_mp__buttonClass";
            PJSMP_mp__basicControllersContainer_speedFixBtn.innerHTML = PJSMP_mp__translate("fix");
            PJSMP_mp__basicControllersContainer_speedFixBtn.style.height = "20px";
            PJSMP_mp__basicControllersContainer_speedFixBtn.style.width = "100%";
            PJSMP_mp__basicControllersContainer_speedFixBtn.style.padding = "0px";
            PJSMP_mp__basicControllersContainer_speedFixBtn.style.margin = "0px";
            PJSMP_mp__basicControllersContainer_speedFixBtn.setAttribute("onclick", 'PJSMP_mp__sliderHandler(this, PJSMP_mp__controllers.speed)');
            
            PJSMP_mp__basicControllersSubContainer_speedContainer.appendChild(PJSMP_mp__basicControllersContainer_speedFixBtn);


            var PJSMP_mp__basicControllersContainer_speedSwitchBtn = document.createElement("button");
            PJSMP_mp__basicControllersContainer_speedSwitchBtn.className = "PJSMP_mp__buttonClass";
            PJSMP_mp__basicControllersContainer_speedSwitchBtn.innerHTML = "S";
            PJSMP_mp__setBtnTextColor(PJSMP_mp__basicControllersContainer_speedSwitchBtn, "white");
            PJSMP_mp__basicControllersContainer_speedSwitchBtn.style.height = "20px";
            PJSMP_mp__basicControllersContainer_speedSwitchBtn.style.width = "100%";
            PJSMP_mp__basicControllersContainer_speedSwitchBtn.style.padding = "0px";
            PJSMP_mp__basicControllersContainer_speedSwitchBtn.style.margin = "0px";

            PJSMP_mp__basicControllersSubContainer_speedContainer.appendChild(PJSMP_mp__basicControllersContainer_speedSwitchBtn);


            PJSMP_mp__basicControllersContainer_inputRangeContainer.appendChild(PJSMP_mp__basicControllersSubContainer_speedContainer);
            

            PJSMP_mp__basicControllersContainer.appendChild(PJSMP_mp__basicControllersContainer_inputRangeContainer);

        PJSMP_mp__window.appendChild(PJSMP_mp__basicControllersContainer);
    //BASIC CONTROLLERS SECTION END

    //FILE INFORMATION
    var PJSMP_mp__infoContainer = document.createElement("div");
    PJSMP_mp__infoContainer.id = "PJSMP_mp__infoContainer";
    PJSMP_mp__infoContainer.style.opacity = "0";
    PJSMP_mp__infoContainer.style.transition = "2s";

    var PJSMP_mp__infoContainer_duration = document.createElement("span");
    PJSMP_mp__infoContainer_duration.id = "PJSMP_mp__infoContainer_duration";
    PJSMP_mp__infoContainer_duration.innerHTML = "defalt value";

    PJSMP_mp__infoContainer.appendChild(PJSMP_mp__infoContainer_duration);

    PJSMP_mp__window.appendChild(PJSMP_mp__infoContainer);

    //ORIGIN CONTROLLERS
    var PJSMP_mp__originContainer = document.createElement("div");
    PJSMP_mp__originContainer.id = "PJSMP_mp__originContainer";

        //OCTAVE
        var PJSMP_mp__originContainer_controllerOctave = document.createElement("div");
        PJSMP_mp__originContainer_controllerOctave.className = "oringinController";
        PJSMP_mp__originContainer_controllerOctave.title = PJSMP_mp__translate("origin.octave");
        
        var PJSMP_mp__originContainer_octaveSwitcher = document.createElement("button");
        PJSMP_mp__originContainer_octaveSwitcher.innerHTML = "O";
        PJSMP_mp__setBtnTextColor(PJSMP_mp__originContainer_octaveSwitcher, PJSMP_mp__controllers.originOctave.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
        PJSMP_mp__originContainer_octaveSwitcher.style.padding = "1px";
        PJSMP_mp__originContainer_octaveSwitcher.style.marginRight = "2px";
        PJSMP_mp__originContainer_octaveSwitcher.setAttribute("onclick", 'PJSMP_mp__originControllersHandler(this, PJSMP_mp__controllers.originOctave)');

        PJSMP_mp__originContainer_controllerOctave.appendChild(PJSMP_mp__originContainer_octaveSwitcher);

        
        var PJSMP_mp__originContainer_octaveFix = document.createElement("button"); 
        PJSMP_mp__originContainer_octaveFix.innerHTML = PJSMP_mp__translate("fix");
        PJSMP_mp__originContainer_octaveFix.style.paddingLeft = "0px";
        PJSMP_mp__originContainer_octaveFix.style.paddingRight = "0px";
        PJSMP_mp__originContainer_octaveFix.setAttribute("onclick", 'PJSMP_mp__originControllersHandler(this, PJSMP_mp__controllers.originOctave)');

        PJSMP_mp__originContainer_controllerOctave.appendChild(PJSMP_mp__originContainer_octaveFix);

        var PJSMP_mp__originContainer_octaveInput = document.createElement("input");
        PJSMP_mp__originContainer_octaveInput.type = "number";
        PJSMP_mp__originContainer_octaveInput.value = PJSMP_mp__controllers.originOctave.value;
        PJSMP_mp__originContainer_octaveInput.step = 1;
        PJSMP_mp__originContainer_octaveInput.setAttribute("oninput", 'PJSMP_mp__originControllersHandler(this, PJSMP_mp__controllers.originOctave)');

        PJSMP_mp__originContainer_controllerOctave.appendChild(PJSMP_mp__originContainer_octaveInput);

        PJSMP_mp__originContainer.appendChild(PJSMP_mp__originContainer_controllerOctave);

        PJSMP_mp__window.appendChild(PJSMP_mp__originContainer);

        //TRANSPOSE
        var PJSMP_mp__originContainer_controllerTranspose = document.createElement("div");
        PJSMP_mp__originContainer_controllerTranspose.className = "oringinController";
        PJSMP_mp__originContainer_controllerTranspose.title = PJSMP_mp__translate("origin.transpose");
        
        var PJSMP_mp__originContainer_transposeSwitcher = document.createElement("button");
        PJSMP_mp__originContainer_transposeSwitcher.innerHTML = "T";
        PJSMP_mp__setBtnTextColor(PJSMP_mp__originContainer_transposeSwitcher, PJSMP_mp__controllers.originTranspose.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
        PJSMP_mp__originContainer_transposeSwitcher.style.padding = "1px";
        PJSMP_mp__originContainer_transposeSwitcher.style.marginRight = "2px";
        PJSMP_mp__originContainer_transposeSwitcher.setAttribute("onclick", 'PJSMP_mp__originControllersHandler(this, PJSMP_mp__controllers.originTranspose)');

        PJSMP_mp__originContainer_controllerTranspose.appendChild(PJSMP_mp__originContainer_transposeSwitcher);

        
        var PJSMP_mp__originContainer_transposeFix = document.createElement("button"); 
        PJSMP_mp__originContainer_transposeFix.innerHTML = PJSMP_mp__translate("fix");
        PJSMP_mp__originContainer_transposeFix.style.paddingLeft = "0px";
        PJSMP_mp__originContainer_transposeFix.style.paddingRight = "0px";
        PJSMP_mp__originContainer_transposeFix.setAttribute("onclick", 'PJSMP_mp__originControllersHandler(this, PJSMP_mp__controllers.originTranspose)');

        PJSMP_mp__originContainer_controllerTranspose.appendChild(PJSMP_mp__originContainer_transposeFix);

        var PJSMP_mp__originContainer_transposeInput = document.createElement("input");
        PJSMP_mp__originContainer_transposeInput.type = "number";
        PJSMP_mp__originContainer_transposeInput.value = PJSMP_mp__controllers.originTranspose.value;
        PJSMP_mp__originContainer_transposeInput.step = 1;
        PJSMP_mp__originContainer_transposeInput.setAttribute("oninput", 'PJSMP_mp__originControllersHandler(this, PJSMP_mp__controllers.originTranspose)');

        PJSMP_mp__originContainer_controllerTranspose.appendChild(PJSMP_mp__originContainer_transposeInput);


        PJSMP_mp__originContainer.appendChild(PJSMP_mp__originContainer_controllerTranspose); 

        PJSMP_mp__window.appendChild(PJSMP_mp__originContainer);  

    
    //NOTES PER SECOND
    var PJSMP_mp__NPSContainer = document.createElement("div");
    PJSMP_mp__NPSContainer.id = "PJSMP_mp__NPSContainer";

    var PJSMP_mp__NPSContainer_text = document.createElement("span");
    PJSMP_mp__NPSContainer_text.id = "PJSMP_mp__NPSContainer_text";
    PJSMP_mp__NPSContainer_text.innerHTML = PJSMP_mp__NPS;
    PJSMP_mp__NPSContainer_text.title = PJSMP_mp__translate("text.notePerSecond");

    PJSMP_mp__NPSContainer.appendChild(PJSMP_mp__NPSContainer_text);

    PJSMP_mp__window.appendChild(PJSMP_mp__NPSContainer);

    //BOTTOM NAME
    var PJSMP_mp__bottomName = document.createElement("div");
    PJSMP_mp__bottomName.id = "PJSMP_mp__bottomName";
    PJSMP_mp__bottomName.title = PJSMP_mp__moduleName+" - v"+PJSMP_mp__version+"\n"+PJSMP_mp__translate("text.thxTo");
    PJSMP_mp__bottomName.setAttribute("onclick", "PJSMP_mp__openChangelog()");

    var PJSMP_mp__bottomName_text = document.createElement("span");
    PJSMP_mp__bottomName_text.id = "PJSMP_mp__bottomName_text";
    PJSMP_mp__bottomName_text.innerHTML = "MADE BY: ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)";

    PJSMP_mp__bottomName.appendChild(PJSMP_mp__bottomName_text);

    PJSMP_mp__window.appendChild(PJSMP_mp__bottomName);

    //DRAG AND DROP
    var PJSMP_mp__dragAndDrop = document.createElement("div");
    PJSMP_mp__dragAndDrop.id = "PJSMP_mp__dragAndDrop";
    PJSMP_mp__dragAndDrop.title = PJSMP_mp__moduleFullName;

    var PJSMP_mp__dragAndDrop_text = document.createElement("span");
    PJSMP_mp__dragAndDrop_text.id = "PJSMP_mp__dragAndDrop_text";
    PJSMP_mp__dragAndDrop_text.innerHTML = PJSMP_mp__moduleName;

    var PJSMP_mp__dragAndDrop_ocBtn = document.createElement("button");
    PJSMP_mp__dragAndDrop_ocBtn.id = "PJSMP_mp__dragAndDrop_ocBtn";
    PJSMP_mp__dragAndDrop_ocBtn.innerHTML = PJSMP_mp__windowMinimized? "O": "X";
    PJSMP_mp__dragAndDrop_ocBtn.title = PJSMP_mp__windowMinimized? PJSMP_mp__translate("text.openWindow"): PJSMP_mp__translate("text.closeWindow");
    PJSMP_mp__setBtnTextColor(PJSMP_mp__dragAndDrop_ocBtn, PJSMP_mp__windowMinimized? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
    PJSMP_mp__dragAndDrop_ocBtn.style.background = "linear-gradient(to right, transparent 5%, "+(PJSMP_mp__windowMinimized? PJSMP_mp__colors.darkerOn: PJSMP_mp__colors.darkerOff)+")";
    PJSMP_mp__dragAndDrop_ocBtn.setAttribute("onclick", "PJSMP_mp__minimizeWindow(this)");
 
    PJSMP_mp__dragAndDrop.appendChild(PJSMP_mp__dragAndDrop_text);

    PJSMP_mp__dragAndDrop.appendChild(PJSMP_mp__dragAndDrop_ocBtn);
 

    //APPENDING PROGRAM
    PJSMP_mp__mainContainer.appendChild(PJSMP_mp__dragAndDrop);
    PJSMP_mp__mainContainer.appendChild(PJSMP_mp__window);
    document.querySelector("#bottom").appendChild(PJSMP_mp__mainContainer);
}





























//HTML ELEMENTS FUNCTIONS
window.PJSMP_mp__dragElement = (elmnt) => { //DRAG AND DROP PROGRAM WINDOW
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.getElementById("PJSMP_mp__dragAndDrop").onmousedown = PJSMP_mp__dragMouseDown;

    function PJSMP_mp__dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = PJSMP_mp__closeDragElement;
        document.onmousemove = PJSMP_mp__elementDrag;
    }

    function PJSMP_mp__elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function PJSMP_mp__closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
PJSMP_mp__dragElement(document.querySelector("#PJSMP_mp__mainContainer"));

window.PJSMP_mp__minimizeWindow = (e) => { //MINIMIZE WINDOW
    PJSMP_mp__windowMinimized = !PJSMP_mp__windowMinimized;
    e.innerHTML = PJSMP_mp__windowMinimized? "O": "X";
    e.title = PJSMP_mp__windowMinimized? PJSMP_mp__translate("text.openWindow"): PJSMP_mp__translate("text.closeWindow");
    PJSMP_mp__setBtnTextColor(e, PJSMP_mp__windowMinimized? PJSMP_mp__colors.on: PJSMP_mp__colors.off);

    e.style.background = "linear-gradient(to right, transparent 5%, "+(PJSMP_mp__windowMinimized? PJSMP_mp__colors.darkerOn: PJSMP_mp__colors.darkerOff)+")";
    
    var pWindow = document.querySelector("#PJSMP_mp__window").style;
    document.querySelector("#PJSMP_mp__dragAndDrop").style.transition = ".5s";
    var pContainer = document.querySelector("#PJSMP_mp__mainContainer").style;
    if(PJSMP_mp__windowMinimized){
        pWindow.pointerEvents = "none";
        pWindow.overflow = "hidden";
        pWindow.height = "0px"; 
        pWindow.opacity = "0"; 
        pContainer.backdropFilter = "";

        document.querySelector("#PJSMP_mp__dragAndDrop").style.borderRadius = "10px 10px 10px 10px";
    } else {
        pWindow.pointerEvents = "auto";
        pWindow.overflow = "";
        pWindow.height = ""; 
        pWindow.opacity = "1";
        pContainer.backdropFilter = "blur(1.5px)";
        
        document.querySelector("#PJSMP_mp__dragAndDrop").style.borderRadius = "10px 10px 0px 0px";
    }
}

window.PJSMP_mp__openChangelog = () => { //OPEN CHANGELOG
    window.open("").document.write("<html><head><title>"+PJSMP_mp__moduleName+" - v"+PJSMP_mp__version+" ChangeLog</title></head><body><h1 align='center'>"+PJSMP_mp__moduleName+" - v"+PJSMP_mp__version+"</h1><textarea readonly style='font-size: 20px;height: 100%; width: 100%;' rows='4' cols='50'>"+PJSMP_mp__changeLog+"</textarea></body></html>");
}

window.PJSMP_mp__optionsBtnHandler = (e, control) => { //OPTION CONTROLLERS HANDLER
    control.state = !control.state;

    PJSMP_mp__setBtnTextColor(e, control.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
}

window.PJSMP_mp__originControllersHandler = (e, control) => { //ORIGIN CONTROLLERS HANDLER
    if(e.tagName == "BUTTON"){
        if(e.innerHTML == PJSMP_mp__translate("fix")){
            e.parentElement.children[2].value = control.value = control.default;
        } else {
            control.state = !control.state;

            PJSMP_mp__setBtnTextColor(e, control.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
        }
    } else {
        control.value = parseFloat(e.value);
    }
}

window.PJSMP_mp__sliderHandler = (e, control) => { //SLIDERS HANDLER
    if(e.tagName == "BUTTON"){
        if(e.innerHTML == PJSMP_mp__translate("fix")){
            e.parentElement.children[0].value = e.parentElement.children[1].value = control.value = control.default;
        } else {
            control.state = !control.state;

            PJSMP_mp__setBtnTextColor(e, control.state? PJSMP_mp__colors.on: PJSMP_mp__colors.off);
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

    if(control == PJSMP_mp__controllers.speed){
        if(document.querySelector("#PJSMP_mp__playBtn").innerHTML == PJSMP_mp__translate("pause")){
            PJSMP_mp__playPauseFunction("pause", "play");
            PJSMP_mp__playPauseFunction("play", "play");
        }
        PJSMP_mp__setDurationInfo();
    }
}

window.PJSMP_mp__playPauseButtonClick = (e) => { //PLAY/PAUSE
    if(PJSMP_mp__fileName !== "none"){
        if(e.innerHTML == PJSMP_mp__translate("play")){
            PJSMP_mp__playPauseFunction("play", "play");
            e.innerHTML = PJSMP_mp__translate("pause");
        } else {
            PJSMP_mp__playPauseFunction("pause", "play");
            e.innerHTML = PJSMP_mp__translate("play");
        }
    }
}

window.PJSMP_mp__stopButtonClick = () => { //STOP  
    PJSMP_mp__stopFunction();
    if(document.querySelector("#PJSMP_mp__playBtn").innerHTML == PJSMP_mp__translate("pause")){
        document.querySelector("#PJSMP_mp__playBtn").innerHTML = PJSMP_mp__translate("play");
    }
}













//MIDI READERS AND PLAYERS
window.PJSMP_mp__notesArr = [];
window.PJSMP_mp__actualNote = 0;
window.PJSMP_mp__pauseActualNote = 0;
window.PJSMP_mp__endTime = 0;

window.PJSMP_mp__stopInterval = undefined;

window.PJSMP_mp__fileNameRaw = "none";
window.PJSMP_mp__fileName = "none";

window.PJSMP_mp__trackAmount = 0;
window.PJSMP_mp__noteAmount = 0;


window.PJSMP_mp__renderMidi = (file, qType) => { //RENDER MIDI
    file.tracks.forEach(track => {
        if(typeof PJSMP_mtc__renderTrack == "undefined"){
            PJSMP_mp__renderTrack(track, qType); //RENDER TRACK IN MODULE PLAYER
        } else {
            PJSMP_mtc__renderTrack(track, qType); //RENDE TRACK IN MODULE TRACK CONTROLLER
        }
    }); 
    PJSMP_mp__trackAmount = file.tracks.length;
    document.querySelector("#PJSMP_mp__fileDropContainer_textContainer_text").title = PJSMP_mp__translate("text.tracks")+": "+PJSMP_mp__trackAmount+"\n"+PJSMP_mp__translate("text.notes")+": "+PJSMP_mp__noteAmount;
}

window.PJSMP_mp__playPauseFunction = (action, qType) => { //PLAY/PAUSE
    if(typeof PJSMP_mp__midiJSONobject != "undefined"){
        if(action == "play"){
            PJSMP_mp__renderMidi(PJSMP_mp__midiJSONobject, qType);
            
            PJSMP_mp__stopInterval = setTimeout(()=>{
                PJSMP_mp__stopButtonClick();

                if(PJSMP_mp__controllers.loop.state){
                    PJSMP_mp__playPauseButtonClick(document.querySelector("#PJSMP_mp__playBtn"));
                }
            }, PJSMP_mp__calcSpeed(PJSMP_mp__endTime - PJSMP_mp__pauseActualNote));

        } else if(action == "pause"){
            PJSMP_mp__pauseActualNote = PJSMP_mp__actualNote;
            
            PJSMP_mp__notesArr.forEach(e => {
                clearInterval(e);
            });
            PJSMP_mp__notesArr = [];
            clearInterval(PJSMP_mp__stopInterval);
        }
    }
}

window.PJSMP_mp__stopFunction = (action, qType) => { //STOP
    PJSMP_mp__notesArr.forEach(e => {
        clearInterval(e);
    });
    PJSMP_mp__resetVars();
    PJSMP_mp__setDurationInfo();
}

window.PJSMP_mp__keyNames = ["a-1", "as-1", "b-1", "c0", "cs0", "d0", "ds0", "e0", "f0", "fs0", "g0", "gs0", "a0", "as0", "b0", "c1", "cs1", "d1", "ds1", "e1", "f1", "fs1", "g1", "gs1", "a1", "as1", "b1", "c2", "cs2", "d2", "ds2", "e2", "f2", "fs2", "g2", "gs2", "a2", "as2", "b2", "c3", "cs3", "d3", "ds3", "e3", "f3", "fs3", "g3", "gs3", "a3", "as3", "b3", "c4", "cs4", "d4", "ds4", "e4", "f4", "fs4", "g4", "gs4", "a4", "as4", "b4", "c5", "cs5", "d5", "ds5", "e5", "f5", "fs5", "g5", "gs5", "a5", "as5", "b5", "c6", "cs6", "d6", "ds6", "e6", "f6", "fs6", "g6", "gs6", "a6", "as6", "b6", "c7"]
window.PJSMP_mp__noNoteQuotaObj = {doOnce: true};
window.PJSMP_mp__renderTrack = (track, qType) => { //RENDER TRACKS
    try {
        var endTrack = track.notes.filter(e => e.time >= PJSMP_mp__pauseActualNote / 1000);
        endTrack.forEach(note => {
            var key = note.name.replace("#", "s").toLowerCase().slice(0, note.name.replace("#", "s").toLowerCase().length-1);
            var octave = parseFloat(note.name.replace("#", "s").toLowerCase().slice(note.name.replace("#", "s").toLowerCase().length-1)) - 1;

            var time = note.time * 1000;
            var velocity = note.velocity;
            var duration = note.duration * 1000;

            if(qType == "load"){
                if(PJSMP_mp__endTime <= time){
                    PJSMP_mp__endTime = time + duration;
                }
                PJSMP_mp__noteAmount++;
                PJSMP_mp__setDurationInfo();

            } else if(qType == "play"){
                PJSMP_mp__notesArr.push(setTimeout(()=>{
                    var canSustain = (!PJSMP_mp__controllers.sustain.state? undefined: PJSMP_mp__calcSpeed(duration));

                    var sendNote = PJSMP_mp__keyNames[PJSMP_mp__keyNames.indexOf(key+octave) +
                                                     (PJSMP_mp__controllers.originOctave.state? PJSMP_mp__controllers.originOctave.value * 12: 0) +
                                                     (PJSMP_mp__controllers.originTranspose.state? PJSMP_mp__controllers.originTranspose.value: 0)];

                    PJSMP_mp__keyPress({
                            key: sendNote,
                            velocity: velocity + (PJSMP_mp__controllers.velocityIncrement.state? PJSMP_mp__controllers.velocityIncrement.value: 0)
                        }, canSustain);

                    if(PJSMP_mp__controllers.notequota.state){
                        PJSMP_mp__noNoteQuotaObj.doOnce = true;
                        
                        MPP.noteQuota.points = 1000000000;
                    } else if(PJSMP_mp__noNoteQuotaObj.doOnce){
                        PJSMP_mp__noNoteQuotaObj.doOnce = !PJSMP_mp__noNoteQuotaObj.doOnce;

                        MPP.noteQuota.points = 450;
                    }

                    PJSMP_mp__actualNote = time;

                    PJSMP_mp__setDurationInfo();
                }, PJSMP_mp__calcSpeed(time - PJSMP_mp__pauseActualNote)));
            }
        });
    } catch(e){
        PJSMP_mp__setFileName(PJSMP_mp__translate("text.error.midiPlayError")+": "+PJSMP_mp__fileNameRaw);
        throw e;
    }

    if(qType == "load"){
        PJSMP_mp__setFileName(PJSMP_mp__fileName);
    }
}

window.PJSMP_mp__calcSpeed = (time) => { //CALCULATE SPEED
    return (time + (PJSMP_mp__controllers.asynchrony.state? Math.random() * 175: 0)) / (PJSMP_mp__controllers.speed.value==0? 0.01: PJSMP_mp__controllers.speed.value);
}

window.PJSMP_mp__resetVars = () => { //RESET VARIABLES
    PJSMP_mp__notesArr = [];
    PJSMP_mp__actualNote = PJSMP_mp__pauseActualNote = 0;
    clearInterval(PJSMP_mp__stopInterval);
}

window.PJSMP_mp__setFileName = (name) => { //SET FILE NAME
    document.querySelector("#PJSMP_mp__fileDropContainer #PJSMP_mp__fileDropContainer_textContainer_text").textContent = name;
}

window.PJSMP_mp__keyPress = (note, release) => { //MPP.PRESS FUNCTION OVERIDE
    if(typeof PJSMP_mmc__keyPress != "function"){
        if(PJSMP_mp__keyNames.includes(note.key)){ 
            MPP.press(note.key, note.velocity);
            PJSMP_mp__NPS++;
        }

        if(typeof release == "number"){
            setTimeout(()=>{
                MPP.release(note.key);
            }, release);
        }
    } else {
        PJSMP_mmc__keyPress(note, release);
        PJSMP_mp__NPS++;
    }
}

window.PJSMP_mp__calcDuration = () => { //CALCULATE DURATION
    var pNote = new Date(PJSMP_mp__calcSpeed(PJSMP_mp__actualNote)).toISOString();
    var endNote = new Date(PJSMP_mp__calcSpeed(PJSMP_mp__endTime)).toISOString();
    return (pNote.substr(11, 3) == "00:"?pNote.substr(14, 5):pNote.substr(11, 8))+" | "+(endNote.substr(11, 3) == "00:"?endNote.substr(14, 5):endNote.substr(11, 8)); 
}
window.PJSMP_mp__setDurationInfo = () => { //DISPLAY DURATION
    if(PJSMP_mp__fileName !== "none"){
        document.querySelector("#PJSMP_mp__infoContainer").style.opacity = "1";
    }
    document.querySelector("#PJSMP_mp__infoContainer_duration").innerHTML = PJSMP_mp__calcDuration();
    document.querySelector("#PJSMP_mp__dragAndDrop").title = PJSMP_mp__translate("text.playing") + ": "+PJSMP_mp__fileName+"\n"+PJSMP_mp__calcDuration();
}



//MIDI TO JSON AND FILE READING
if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    PJSMP_mp__setFileName("Sorry, this browser doesnt support PJSMP");
} else {
    document.querySelector("#PJSMP_mp__fileDropContainer input").addEventListener("change", e => {
        const files = e.target.files;
        if (files.length > 0){
            const file = files[0];
            PJSMP_mp__parseMidi(file);
            PJSMP_mp__fileNameRaw = file.name;
            PJSMP_mp__fileName = file.name.replace(/.midi/g, "").replace(/.mid/g, "");
        }
    })
}
window.PJSMP_mp__parseMidi = (file) => {
    const reader = new FileReader()
    reader.onload = function(e){
        try {
            PJSMP_mp__stopButtonClick();
            window.PJSMP_mp__midiJSONobject = new Midi(e.target.result);
            PJSMP_mp__noteAmount = 0;
            PJSMP_mp__endTime = 0;
            PJSMP_mp__renderMidi(PJSMP_mp__midiJSONobject, "load");
        } catch(e){
            PJSMP_mp__setFileName(PJSMP_mp__translate("text.error.midiLoadError")+": "+PJSMP_mp__fileNameRaw);
            throw e;
        }
        
    }
    reader.readAsArrayBuffer(file);
}

//MIDI TO JSON
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){e.parseMidi=r(5),e.writeMidi=r(6)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),i=new WeakMap;e.keySignatureKeys=["Cb","Gb","Db","Ab","Eb","Bb","F","C","G","D","A","E","B","F#","C#"];var a=function(){function t(t){var r=this;this.tempos=[],this.timeSignatures=[],this.keySignatures=[],this.meta=[],this.name="",i.set(this,480),t&&(i.set(this,t.header.ticksPerBeat),t.tracks[0].forEach(function(t){t.meta&&("timeSignature"===t.type?r.timeSignatures.push({ticks:t.absoluteTime,timeSignature:[t.numerator,t.denominator]}):"setTempo"===t.type?r.tempos.push({bpm:6e7/t.microsecondsPerBeat,ticks:t.absoluteTime}):"keySignature"===t.type?r.keySignatures.push({key:e.keySignatureKeys[t.key+7],scale:0===t.scale?"major":"minor",ticks:t.absoluteTime}):"trackName"===t.type?r.name=t.text:"endOfTrack"!==t.type&&r.meta.push({text:t.text,ticks:t.absoluteTime,type:t.type}))}),this.update())}return t.prototype.update=function(){var t=this,e=0,r=0;this.tempos.sort(function(t,e){return t.ticks-e.ticks}),this.tempos.forEach(function(n,i){var a=i>0?t.tempos[i-1].bpm:t.tempos[0].bpm,o=n.ticks/t.ppq-r,s=60/a*o;n.time=s+e,e=n.time,r+=o}),this.timeSignatures.sort(function(t,e){return t.ticks-e.ticks}),this.timeSignatures.forEach(function(e,r){var n=r>0?t.timeSignatures[r-1]:t.timeSignatures[0],i=(e.ticks-n.ticks)/t.ppq/n.timeSignature[0]/(n.timeSignature[1]/4);n.measures=n.measures||0,e.measures=i+n.measures})},t.prototype.ticksToSeconds=function(t){var e=n.search(this.tempos,t);if(-1!==e){var r=this.tempos[e],i=r.time,a=(t-r.ticks)/this.ppq;return i+60/r.bpm*a}return.5*(t/this.ppq)},t.prototype.ticksToMeasures=function(t){var e=n.search(this.timeSignatures,t);if(-1!==e){var r=this.timeSignatures[e],i=(t-r.ticks)/this.ppq;return r.measures+i/(r.timeSignature[0]/r.timeSignature[1])/4}return t/this.ppq/4},Object.defineProperty(t.prototype,"ppq",{get:function(){return i.get(this)},enumerable:!0,configurable:!0}),t.prototype.secondsToTicks=function(t){var e=n.search(this.tempos,t,"time");if(-1!==e){var r=this.tempos[e],i=(t-r.time)/(60/r.bpm);return Math.round(r.ticks+i*this.ppq)}var a=t/.5;return Math.round(a*this.ppq)},t.prototype.toJSON=function(){return{keySignatures:this.keySignatures,meta:this.meta,name:this.name,ppq:this.ppq,tempos:this.tempos.map(function(t){return{bpm:t.bpm,ticks:t.ticks}}),timeSignatures:this.timeSignatures}},t.prototype.fromJSON=function(t){this.name=t.name,this.tempos=t.tempos.map(function(t){return Object.assign({},t)}),this.timeSignatures=t.timeSignatures.map(function(t){return Object.assign({},t)}),this.keySignatures=t.keySignatures.map(function(t){return Object.assign({},t)}),this.meta=t.meta.map(function(t){return Object.assign({},t)}),i.set(this,t.ppq),this.update()},t.prototype.setTempo=function(t){this.tempos=[{bpm:t,ticks:0}],this.update()},t}();e.Header=a},function(t,e,r){"use strict";function n(t,e,r){void 0===r&&(r="ticks");var n=0,i=t.length,a=i;if(i>0&&t[i-1][r]<=e)return i-1;for(;n<a;){var o=Math.floor(n+(a-n)/2),s=t[o],u=t[o+1];if(s[r]===e){for(var c=o;c<t.length;c++){t[c][r]===e&&(o=c)}return o}if(s[r]<e&&u[r]>e)return o;s[r]>e?a=o:s[r]<e&&(n=o+1)}return-1}Object.defineProperty(e,"__esModule",{value:!0}),e.search=n,e.insert=function(t,e,r){if(void 0===r&&(r="ticks"),t.length){var i=n(t,e[r],r);t.splice(i+1,0,e)}else t.push(e)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.controlChangeNames={1:"modulationWheel",2:"breath",4:"footController",5:"portamentoTime",7:"volume",8:"balance",10:"pan",64:"sustain",65:"portamentoTime",66:"sostenuto",67:"softPedal",68:"legatoFootswitch",84:"portamentoControl"},e.controlChangeIds=Object.keys(e.controlChangeNames).reduce(function(t,r){return t[e.controlChangeNames[r]]=r,t},{});var n=new WeakMap,i=new WeakMap,a=function(){function t(t,e){n.set(this,e),i.set(this,t.controllerType),this.ticks=t.absoluteTime,this.value=t.value}return Object.defineProperty(t.prototype,"number",{get:function(){return i.get(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return e.controlChangeNames[this.number]?e.controlChangeNames[this.number]:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"time",{get:function(){return n.get(this).ticksToSeconds(this.ticks)},set:function(t){var e=n.get(this);this.ticks=e.secondsToTicks(t)},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){return{number:this.number,ticks:this.ticks,time:this.time,value:this.value}},t}();e.ControlChange=a},function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(i,a){function o(t){try{u(n.next(t))}catch(t){a(t)}}function s(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(o,s)}u((n=n.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(0),o=r(7),s=r(1),u=r(9),c=function(){function t(t){var e=this,r=null;t&&(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(r=a.parseMidi(t)).tracks.forEach(function(t){var e=0;t.forEach(function(t){e+=t.deltaTime,t.absoluteTime=e})})),this.header=new s.Header(r),this.tracks=[],t&&(this.tracks=r.tracks.map(function(t){return new u.Track(t,e.header)}),1===r.header.format&&0===this.tracks[0].duration&&this.tracks.shift())}return t.fromUrl=function(e){return n(this,void 0,void 0,function(){var r;return i(this,function(n){switch(n.label){case 0:return[4,fetch(e)];case 1:return(r=n.sent()).ok?[4,r.arrayBuffer()]:[3,3];case 2:return[2,new t(n.sent())];case 3:throw new Error("could not load "+e)}})})},Object.defineProperty(t.prototype,"name",{get:function(){return this.header.name},set:function(t){this.header.name=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){var t=this.tracks.map(function(t){return t.duration});return Math.max.apply(Math,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"durationTicks",{get:function(){var t=this.tracks.map(function(t){return t.durationTicks});return Math.max.apply(Math,t)},enumerable:!0,configurable:!0}),t.prototype.addTrack=function(){var t=new u.Track(void 0,this.header);return this.tracks.push(t),t},t.prototype.toArray=function(){return o.encode(this)},t.prototype.toJSON=function(){return{header:this.header.toJSON(),tracks:this.tracks.map(function(t){return t.toJSON()})}},t.prototype.fromJSON=function(t){var e=this;this.header=new s.Header,this.header.fromJSON(t.header),this.tracks=t.tracks.map(function(t){var r=new u.Track(void 0,e.header);return r.fromJSON(t),r})},t.prototype.clone=function(){var e=new t;return e.fromJSON(this.toJSON()),e},t}();e.Midi=c},function(t,e){function r(t){for(var e,r=new n(t),i=[];!r.eof();){var a=o();i.push(a)}return i;function o(){var t={};t.deltaTime=r.readVarInt();var n=r.readUInt8();if(240==(240&n)){if(255!==n){if(240==n){t.type="sysEx";a=r.readVarInt();return t.data=r.readBytes(a),t}if(247==n){t.type="endSysEx";a=r.readVarInt();return t.data=r.readBytes(a),t}throw"Unrecognised MIDI event type byte: "+n}t.meta=!0;var i=r.readUInt8(),a=r.readVarInt();switch(i){case 0:if(t.type="sequenceNumber",2!==a)throw"Expected length for sequenceNumber event is 2, got "+a;return t.number=stream.readUInt16(),t;case 1:return t.type="text",t.text=r.readString(a),t;case 2:return t.type="copyrightNotice",t.text=r.readString(a),t;case 3:return t.type="trackName",t.text=r.readString(a),t;case 4:return t.type="instrumentName",t.text=r.readString(a),t;case 5:return t.type="lyrics",t.text=r.readString(a),t;case 6:return t.type="marker",t.text=r.readString(a),t;case 7:return t.type="cuePoint",t.text=r.readString(a),t;case 32:if(t.type="channelPrefix",1!=a)throw"Expected length for channelPrefix event is 1, got "+a;return t.channel=r.readUInt8(),t;case 33:if(t.type="portPrefix",1!=a)throw"Expected length for portPrefix event is 1, got "+a;return t.port=r.readUInt8(),t;case 47:if(t.type="endOfTrack",0!=a)throw"Expected length for endOfTrack event is 0, got "+a;return t;case 81:if(t.type="setTempo",3!=a)throw"Expected length for setTempo event is 3, got "+a;return t.microsecondsPerBeat=r.readUInt24(),t;case 84:if(t.type="smpteOffset",5!=a)throw"Expected length for smpteOffset event is 5, got "+a;var o=r.readUInt8();return t.frameRate={0:24,32:25,64:29,96:30}[96&o],t.hour=31&o,t.min=r.readUInt8(),t.sec=r.readUInt8(),t.frame=r.readUInt8(),t.subFrame=r.readUInt8(),t;case 88:if(t.type="timeSignature",4!=a)throw"Expected length for timeSignature event is 4, got "+a;return t.numerator=r.readUInt8(),t.denominator=1<<r.readUInt8(),t.metronome=r.readUInt8(),t.thirtyseconds=r.readUInt8(),t;case 89:if(t.type="keySignature",2!=a)throw"Expected length for keySignature event is 2, got "+a;return t.key=r.readInt8(),t.scale=r.readUInt8(),t;case 127:return t.type="sequencerSpecific",t.data=r.readBytes(a),t;default:return t.type="unknownMeta",t.data=r.readBytes(a),t.metatypeByte=i,t}}else{var s;if(0==(128&n)){if(null===e)throw"Running status byte encountered before status byte";s=n,n=e,t.running=!0}else s=r.readUInt8(),e=n;var u=n>>4;switch(t.channel=15&n,u){case 8:return t.type="noteOff",t.noteNumber=s,t.velocity=r.readUInt8(),t;case 9:var c=r.readUInt8();return t.type=0===c?"noteOff":"noteOn",t.noteNumber=s,t.velocity=c,0===c&&(t.byte9=!0),t;case 10:return t.type="noteAftertouch",t.noteNumber=s,t.amount=r.readUInt8(),t;case 11:return t.type="controller",t.controllerType=s,t.value=r.readUInt8(),t;case 12:return t.type="programChange",t.programNumber=s,t;case 13:return t.type="channelAftertouch",t.amount=s,t;case 14:return t.type="pitchBend",t.value=s+(r.readUInt8()<<7)-8192,t;default:throw"Unrecognised MIDI event type: "+u}}}}function n(t){this.buffer=t,this.bufferLen=this.buffer.length,this.pos=0}n.prototype.eof=function(){return this.pos>=this.bufferLen},n.prototype.readUInt8=function(){var t=this.buffer[this.pos];return this.pos+=1,t},n.prototype.readInt8=function(){var t=this.readUInt8();return 128&t?t-256:t},n.prototype.readUInt16=function(){return(this.readUInt8()<<8)+this.readUInt8()},n.prototype.readInt16=function(){var t=this.readUInt16();return 32768&t?t-65536:t},n.prototype.readUInt24=function(){return(this.readUInt8()<<16)+(this.readUInt8()<<8)+this.readUInt8()},n.prototype.readInt24=function(){var t=this.readUInt24();return 8388608&t?t-16777216:t},n.prototype.readUInt32=function(){return(this.readUInt8()<<24)+(this.readUInt8()<<16)+(this.readUInt8()<<8)+this.readUInt8()},n.prototype.readBytes=function(t){var e=this.buffer.slice(this.pos,this.pos+t);return this.pos+=t,e},n.prototype.readString=function(t){var e=this.readBytes(t);return String.fromCharCode.apply(null,e)},n.prototype.readVarInt=function(){for(var t=0;!this.eof();){var e=this.readUInt8();if(!(128&e))return t+e;t+=127&e,t<<=7}return t},n.prototype.readChunk=function(){var t=this.readString(4),e=this.readUInt32();return{id:t,length:e,data:this.readBytes(e)}},t.exports=function(t){var e=new n(t),i=e.readChunk();if("MThd"!=i.id)throw"Bad MIDI file.  Expected 'MHdr', got: '"+i.id+"'";for(var a=function(t){var e=new n(t),r=e.readUInt16(),i=e.readUInt16(),a={format:r,numTracks:i},o=e.readUInt16();return 32768&o?(a.framesPerSecond=256-(o>>8),a.ticksPerFrame=255&o):a.ticksPerBeat=o,a}(i.data),o=[],s=0;!e.eof()&&s<a.numTracks;s++){var u=e.readChunk();if("MTrk"!=u.id)throw"Bad MIDI file.  Expected 'MTrk', got: '"+u.id+"'";var c=r(u.data);o.push(c)}return{header:a,tracks:o}}},function(t,e){function r(t,e,r){var a,o=new i,s=e.length,u=null;for(a=0;a<s;a++)!1!==r.running&&(r.running||e[a].running)||(u=null),u=n(o,e[a],u,r.useByte9ForNoteOff);t.writeChunk("MTrk",o.buffer)}function n(t,e,r,n){var i=e.type,a=e.deltaTime,o=e.text||"",s=e.data||[],u=null;switch(t.writeVarInt(a),i){case"sequenceNumber":t.writeUInt8(255),t.writeUInt8(0),t.writeVarInt(2),t.writeUInt16(e.number);break;case"text":t.writeUInt8(255),t.writeUInt8(1),t.writeVarInt(o.length),t.writeString(o);break;case"copyrightNotice":t.writeUInt8(255),t.writeUInt8(2),t.writeVarInt(o.length),t.writeString(o);break;case"trackName":t.writeUInt8(255),t.writeUInt8(3),t.writeVarInt(o.length),t.writeString(o);break;case"instrumentName":t.writeUInt8(255),t.writeUInt8(4),t.writeVarInt(o.length),t.writeString(o);break;case"lyrics":t.writeUInt8(255),t.writeUInt8(5),t.writeVarInt(o.length),t.writeString(o);break;case"marker":t.writeUInt8(255),t.writeUInt8(6),t.writeVarInt(o.length),t.writeString(o);break;case"cuePoint":t.writeUInt8(255),t.writeUInt8(7),t.writeVarInt(o.length),t.writeString(o);break;case"channelPrefix":t.writeUInt8(255),t.writeUInt8(32),t.writeVarInt(1),t.writeUInt8(e.channel);break;case"portPrefix":t.writeUInt8(255),t.writeUInt8(33),t.writeVarInt(1),t.writeUInt8(e.port);break;case"endOfTrack":t.writeUInt8(255),t.writeUInt8(47),t.writeVarInt(0);break;case"setTempo":t.writeUInt8(255),t.writeUInt8(81),t.writeVarInt(3),t.writeUInt24(e.microsecondsPerBeat);break;case"smpteOffset":t.writeUInt8(255),t.writeUInt8(84),t.writeVarInt(5);var c=31&e.hour|{24:0,25:32,29:64,30:96}[e.frameRate];t.writeUInt8(c),t.writeUInt8(e.min),t.writeUInt8(e.sec),t.writeUInt8(e.frame),t.writeUInt8(e.subFrame);break;case"timeSignature":t.writeUInt8(255),t.writeUInt8(88),t.writeVarInt(4),t.writeUInt8(e.numerator);var h=255&Math.floor(Math.log(e.denominator)/Math.LN2);t.writeUInt8(h),t.writeUInt8(e.metronome),t.writeUInt8(e.thirtyseconds||8);break;case"keySignature":t.writeUInt8(255),t.writeUInt8(89),t.writeVarInt(2),t.writeInt8(e.key),t.writeUInt8(e.scale);break;case"sequencerSpecific":t.writeUInt8(255),t.writeUInt8(127),t.writeVarInt(s.length),t.writeBytes(s);break;case"unknownMeta":null!=e.metatypeByte&&(t.writeUInt8(255),t.writeUInt8(e.metatypeByte),t.writeVarInt(s.length),t.writeBytes(s));break;case"sysEx":t.writeUInt8(240),t.writeVarInt(s.length),t.writeBytes(s);break;case"endSysEx":t.writeUInt8(247),t.writeVarInt(s.length),t.writeBytes(s);break;case"noteOff":(u=(!1!==n&&e.byte9||n&&0==e.velocity?144:128)|e.channel)!==r&&t.writeUInt8(u),t.writeUInt8(e.noteNumber),t.writeUInt8(e.velocity);break;case"noteOn":(u=144|e.channel)!==r&&t.writeUInt8(u),t.writeUInt8(e.noteNumber),t.writeUInt8(e.velocity);break;case"noteAftertouch":(u=160|e.channel)!==r&&t.writeUInt8(u),t.writeUInt8(e.noteNumber),t.writeUInt8(e.amount);break;case"controller":(u=176|e.channel)!==r&&t.writeUInt8(u),t.writeUInt8(e.controllerType),t.writeUInt8(e.value);break;case"programChange":(u=192|e.channel)!==r&&t.writeUInt8(u),t.writeUInt8(e.programNumber);break;case"channelAftertouch":(u=208|e.channel)!==r&&t.writeUInt8(u),t.writeUInt8(e.amount);break;case"pitchBend":(u=224|e.channel)!==r&&t.writeUInt8(u);var f=8192+e.value,p=127&f,l=f>>7&127;t.writeUInt8(p),t.writeUInt8(l);break;default:throw"Unrecognized event type: "+i}return u}function i(){this.buffer=[]}i.prototype.writeUInt8=function(t){this.buffer.push(255&t)},i.prototype.writeInt8=i.prototype.writeUInt8,i.prototype.writeUInt16=function(t){var e=t>>8&255,r=255&t;this.writeUInt8(e),this.writeUInt8(r)},i.prototype.writeInt16=i.prototype.writeUInt16,i.prototype.writeUInt24=function(t){var e=t>>16&255,r=t>>8&255,n=255&t;this.writeUInt8(e),this.writeUInt8(r),this.writeUInt8(n)},i.prototype.writeInt24=i.prototype.writeUInt24,i.prototype.writeUInt32=function(t){var e=t>>24&255,r=t>>16&255,n=t>>8&255,i=255&t;this.writeUInt8(e),this.writeUInt8(r),this.writeUInt8(n),this.writeUInt8(i)},i.prototype.writeInt32=i.prototype.writeUInt32,i.prototype.writeBytes=function(t){this.buffer=this.buffer.concat(Array.prototype.slice.call(t,0))},i.prototype.writeString=function(t){var e,r=t.length,n=[];for(e=0;e<r;e++)n.push(t.codePointAt(e));this.writeBytes(n)},i.prototype.writeVarInt=function(t){if(t<0)throw"Cannot write negative variable-length integer";if(t<=127)this.writeUInt8(t);else{var e=t,r=[];for(r.push(127&e),e>>=7;e;){var n=127&e|128;r.push(n),e>>=7}this.writeBytes(r.reverse())}},i.prototype.writeChunk=function(t,e){this.writeString(t),this.writeUInt32(e.length),this.writeBytes(e)},t.exports=function(t,e){if("object"!=typeof t)throw"Invalid MIDI data";e=e||{};var n,a=t.header||{},o=t.tracks||[],s=o.length,u=new i;for(function(t,e,r){var n=null==e.format?1:e.format,a=128;e.timeDivision?a=e.timeDivision:e.ticksPerFrame&&e.framesPerSecond?a=-(255&e.framesPerSecond)<<8|255&ticksPerFrame:e.ticksPerBeat&&(a=32767&e.ticksPerBeat);var o=new i;o.writeUInt16(n),o.writeUInt16(r),o.writeUInt16(a),t.writeChunk("MThd",o.buffer)}(u,a,s),n=0;n<s;n++)r(u,o[n],e);return u.buffer}},function(t,e,r){"use strict";var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var a=arguments[e],o=0,s=a.length;o<s;o++,i++)n[i]=a[o];return n},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(0),o=r(1),s=i(r(8));function u(t){return s.default(t.notes.map(function(e){return function(t,e){return[{absoluteTime:t.ticks,channel:e,deltaTime:0,noteNumber:t.midi,type:"noteOn",velocity:Math.floor(127*t.velocity)},{absoluteTime:t.ticks+t.durationTicks,channel:e,deltaTime:0,noteNumber:t.midi,type:"noteOff",velocity:Math.floor(127*t.noteOffVelocity)}]}(e,t.channel)}))}function c(t,e){return{absoluteTime:t.ticks,channel:e,controllerType:t.number,deltaTime:0,type:"controller",value:t.value}}function h(t){return{absoluteTime:0,channel:t.channel,deltaTime:0,programNumber:t.instrument.number,type:"programChange"}}e.encode=function(t){var e={header:{format:1,numTracks:t.tracks.length+1,ticksPerBeat:t.header.ppq},tracks:n([n([{absoluteTime:0,deltaTime:0,meta:!0,text:t.header.name,type:"trackName"}],t.header.keySignatures.map(function(t){return function(t){var e=o.keySignatureKeys.indexOf(t.key);return{absoluteTime:t.ticks,deltaTime:0,key:e+7,meta:!0,scale:"major"===t.scale?0:1,type:"keySignature"}}(t)}),t.header.meta.map(function(t){return{absoluteTime:(e=t).ticks,deltaTime:0,meta:!0,text:e.text,type:e.type};var e}),t.header.tempos.map(function(t){return function(t){return{absoluteTime:t.ticks,deltaTime:0,meta:!0,microsecondsPerBeat:Math.floor(6e7/t.bpm),type:"setTempo"}}(t)}),t.header.timeSignatures.map(function(t){return function(t){return{absoluteTime:t.ticks,deltaTime:0,denominator:t.timeSignature[1],meta:!0,metronome:24,numerator:t.timeSignature[0],thirtyseconds:8,type:"timeSignature"}}(t)}))],t.tracks.map(function(t){return n([(e=t.name,{absoluteTime:0,deltaTime:0,meta:!0,text:e,type:"trackName"}),h(t)],u(t),function(t){for(var e=[],r=0;r<127;r++)t.controlChanges.hasOwnProperty(r)&&t.controlChanges[r].forEach(function(r){e.push(c(r,t.channel))});return e}(t),function(t){var e=[];return t.pitchBends.forEach(function(r){e.push(function(t,e){return{absoluteTime:t.ticks,channel:e,deltaTime:0,type:"pitchBend",value:t.value}}(r,t.channel))}),e}(t));var e}))};return e.tracks=e.tracks.map(function(t){t=t.sort(function(t,e){return t.absoluteTime-e.absoluteTime});var e=0;return t.forEach(function(t){t.deltaTime=t.absoluteTime-e,e=t.absoluteTime,delete t.absoluteTime}),t.push({deltaTime:0,meta:!0,type:"endOfTrack"}),t}),new Uint8Array(a.writeMidi(e))}},function(t,e,r){"use strict";function n(t){return function t(e,r){for(var n=0;n<e.length;n++){var i=e[n];Array.isArray(i)?t(i,r):r.push(i)}return r}(t,[])}function i(t,e){if("number"!=typeof e)throw new TypeError("Expected the depth to be a number");return function t(e,r,n){n--;for(var i=0;i<e.length;i++){var a=e[i];n>-1&&Array.isArray(a)?t(a,r,n):r.push(a)}return r}(t,[],e)}t.exports=function(t){if(!Array.isArray(t))throw new TypeError("Expected value to be an array");return n(t)},t.exports.from=n,t.exports.depth=function(t,e){if(!Array.isArray(t))throw new TypeError("Expected value to be an array");return i(t,e)},t.exports.fromDepth=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),i=r(3),a=r(10),o=r(11),s=r(12),u=r(14),c=new WeakMap,h=function(){function t(t,e){var r=this;if(this.name="",this.notes=[],this.controlChanges=a.createControlChanges(),this.pitchBends=[],c.set(this,e),t){var n=t.find(function(t){return"trackName"===t.type});this.name=n?n.text:""}if(this.instrument=new s.Instrument(t,this),this.channel=0,t){for(var i=t.filter(function(t){return"noteOn"===t.type}),o=t.filter(function(t){return"noteOff"===t.type}),u=function(){var t=i.shift();h.channel=t.channel;var e=o.findIndex(function(e){return e.noteNumber===t.noteNumber&&e.absoluteTime>=t.absoluteTime});if(-1!==e){var r=o.splice(e,1)[0];h.addNote({durationTicks:r.absoluteTime-t.absoluteTime,midi:t.noteNumber,noteOffVelocity:r.velocity/127,ticks:t.absoluteTime,velocity:t.velocity/127})}},h=this;i.length;)u();t.filter(function(t){return"controller"===t.type}).forEach(function(t){r.addCC({number:t.controllerType,ticks:t.absoluteTime,value:t.value/127})}),t.filter(function(t){return"pitchBend"===t.type}).forEach(function(t){r.addPitchBend({ticks:t.absoluteTime,value:t.value/Math.pow(2,13)})})}}return t.prototype.addNote=function(t){var e=c.get(this),r=new u.Note({midi:0,ticks:0,velocity:1},{ticks:0,velocity:0},e);return Object.assign(r,t),n.insert(this.notes,r,"ticks"),this},t.prototype.addCC=function(t){var e=c.get(this),r=new i.ControlChange({controllerType:t.number},e);return delete t.number,Object.assign(r,t),Array.isArray(this.controlChanges[r.number])||(this.controlChanges[r.number]=[]),n.insert(this.controlChanges[r.number],r,"ticks"),this},t.prototype.addPitchBend=function(t){var e=c.get(this),r=new o.PitchBend({},e);return Object.assign(r,t),n.insert(this.pitchBends,r,"ticks"),this},Object.defineProperty(t.prototype,"duration",{get:function(){var t=this.notes[this.notes.length-1];return t?t.time+t.duration:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"durationTicks",{get:function(){var t=this.notes[this.notes.length-1];return t?t.ticks+t.durationTicks:0},enumerable:!0,configurable:!0}),t.prototype.fromJSON=function(t){var e=this;for(var r in this.name=t.name,this.channel=t.channel,this.instrument=new s.Instrument(void 0,this),this.instrument.fromJSON(t.instrument),t.controlChanges)t.controlChanges[r]&&t.controlChanges[r].forEach(function(t){e.addCC({number:t.number,ticks:t.ticks,value:t.value})});t.notes.forEach(function(t){e.addNote({durationTicks:t.durationTicks,midi:t.midi,ticks:t.ticks,velocity:t.velocity})})},t.prototype.toJSON=function(){for(var t={},e=0;e<127;e++)this.controlChanges.hasOwnProperty(e)&&(t[e]=this.controlChanges[e].map(function(t){return t.toJSON()}));return{channel:this.channel,controlChanges:t,pitchBends:this.pitchBends.map(function(t){return t.toJSON()}),instrument:this.instrument.toJSON(),name:this.name,notes:this.notes.map(function(t){return t.toJSON()})}},t}();e.Track=h},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3);e.createControlChanges=function(){return new Proxy({},{get:function(t,e){return t[e]?t[e]:n.controlChangeIds.hasOwnProperty(e)?t[n.controlChangeIds[e]]:void 0},set:function(t,e,r){return n.controlChangeIds.hasOwnProperty(e)?t[n.controlChangeIds[e]]=r:t[e]=r,!0}})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new WeakMap,i=function(){function t(t,e){n.set(this,e),this.ticks=t.absoluteTime,this.value=t.value}return Object.defineProperty(t.prototype,"time",{get:function(){return n.get(this).ticksToSeconds(this.ticks)},set:function(t){var e=n.get(this);this.ticks=e.secondsToTicks(t)},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){return{ticks:this.ticks,time:this.time,value:this.value}},t}();e.PitchBend=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(13),i=new WeakMap,a=function(){function t(t,e){if(this.number=0,i.set(this,e),this.number=0,t){var r=t.find(function(t){return"programChange"===t.type});r&&(this.number=r.programNumber)}}return Object.defineProperty(t.prototype,"name",{get:function(){return this.percussion?n.DrumKitByPatchID[this.number]:n.instrumentByPatchID[this.number]},set:function(t){var e=n.instrumentByPatchID.indexOf(t);-1!==e&&(this.number=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"family",{get:function(){return this.percussion?"drums":n.InstrumentFamilyByID[Math.floor(this.number/8)]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"percussion",{get:function(){return 9===i.get(this).channel},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){return{family:this.family,name:this.name,number:this.number}},t.prototype.fromJSON=function(t){this.number=t.number},t}();e.Instrument=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.instrumentByPatchID=["acoustic grand piano","bright acoustic piano","electric grand piano","honky-tonk piano","electric piano 1","electric piano 2","harpsichord","clavi","celesta","glockenspiel","music box","vibraphone","marimba","xylophone","tubular bells","dulcimer","drawbar organ","percussive organ","rock organ","church organ","reed organ","accordion","harmonica","tango accordion","acoustic guitar (nylon)","acoustic guitar (steel)","electric guitar (jazz)","electric guitar (clean)","electric guitar (muted)","overdriven guitar","distortion guitar","guitar harmonics","acoustic bass","electric bass (finger)","electric bass (pick)","fretless bass","slap bass 1","slap bass 2","synth bass 1","synth bass 2","violin","viola","cello","contrabass","tremolo strings","pizzicato strings","orchestral harp","timpani","string ensemble 1","string ensemble 2","synthstrings 1","synthstrings 2","choir aahs","voice oohs","synth voice","orchestra hit","trumpet","trombone","tuba","muted trumpet","french horn","brass section","synthbrass 1","synthbrass 2","soprano sax","alto sax","tenor sax","baritone sax","oboe","english horn","bassoon","clarinet","piccolo","flute","recorder","pan flute","blown bottle","shakuhachi","whistle","ocarina","lead 1 (square)","lead 2 (sawtooth)","lead 3 (calliope)","lead 4 (chiff)","lead 5 (charang)","lead 6 (voice)","lead 7 (fifths)","lead 8 (bass + lead)","pad 1 (new age)","pad 2 (warm)","pad 3 (polysynth)","pad 4 (choir)","pad 5 (bowed)","pad 6 (metallic)","pad 7 (halo)","pad 8 (sweep)","fx 1 (rain)","fx 2 (soundtrack)","fx 3 (crystal)","fx 4 (atmosphere)","fx 5 (brightness)","fx 6 (goblins)","fx 7 (echoes)","fx 8 (sci-fi)","sitar","banjo","shamisen","koto","kalimba","bag pipe","fiddle","shanai","tinkle bell","agogo","steel drums","woodblock","taiko drum","melodic tom","synth drum","reverse cymbal","guitar fret noise","breath noise","seashore","bird tweet","telephone ring","helicopter","applause","gunshot"],e.InstrumentFamilyByID=["piano","chromatic percussion","organ","guitar","bass","strings","ensemble","brass","reed","pipe","synth lead","synth pad","synth effects","world","percussive","sound effects"],e.DrumKitByPatchID={0:"standard kit",8:"room kit",16:"power kit",24:"electronic kit",25:"tr-808 kit",32:"jazz kit",40:"brush kit",48:"orchestra kit",56:"sound fx kit"}},function(t,e,r){"use strict";function n(t){return["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][t%12]}Object.defineProperty(e,"__esModule",{value:!0});var i,a,o=(i=/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,a={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},function(t){var e=i.exec(t),r=e[1],n=e[2];return a[r.toLowerCase()]+12*(parseInt(n,10)+1)}),s=new WeakMap,u=function(){function t(t,e,r){s.set(this,r),this.midi=t.midi,this.velocity=t.velocity,this.noteOffVelocity=e.velocity,this.ticks=t.ticks,this.durationTicks=e.ticks-t.ticks}return Object.defineProperty(t.prototype,"name",{get:function(){return t=this.midi,e=Math.floor(t/12)-1,n(t)+e.toString();var t,e},set:function(t){this.midi=o(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"octave",{get:function(){return Math.floor(this.midi/12)-1},set:function(t){var e=t-this.octave;this.midi+=12*e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pitch",{get:function(){return n(this.midi)},set:function(t){this.midi=12*(this.octave+1)+["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].indexOf(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){var t=s.get(this);return t.ticksToSeconds(this.ticks+this.durationTicks)-t.ticksToSeconds(this.ticks)},set:function(t){var e=s.get(this).secondsToTicks(this.time+t);this.durationTicks=e-this.ticks},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"time",{get:function(){return s.get(this).ticksToSeconds(this.ticks)},set:function(t){var e=s.get(this);this.ticks=e.secondsToTicks(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bars",{get:function(){return s.get(this).ticksToMeasures(this.ticks)},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){return{duration:this.duration,durationTicks:this.durationTicks,midi:this.midi,name:this.name,ticks:this.ticks,time:this.time,velocity:this.velocity}},t}();e.Note=u}])});

