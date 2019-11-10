function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
var lang = getURLParameter('lang');

var languages = {
    es: {
        bodyparts: ["Mano izquierda", "Mano derecha", "Pie izquierdo", "Pie derecho"],
        colors: [["Rojo", "#c0392b"], ["Azul", "#2980b9"], ["Amarillo", "#f1c40f"], ["Verde", "#009432"]],
        sub: 'Ruleta de Twister inteligente',
        playernumber: 'Número de jugadores',
        confirm: 'Confirmar',
        start: 'Pulsa tirar para comenzar',
        spin: 'Tirar',
        disqualify: 'Descalificar jugador',
        player: 'J',
        playername: 'Jugador',
        end: '¡Se acabó!',
        reload: 'Volver a Jugar',
        lang: 'Idioma',
        madeby: 'Hecho por',
        source: 'Código fuente'
    },
    en: {
        bodyparts: ["Left hand", "Right hand", "Left foot", "Right foot"],
        colors: [["Red", "#c0392b"], ["Blue", "#2980b9"], ["Yellow", "#f1c40f"], ["Green", "#009432"]],
        sub: 'A smart Twister roulette',
        playernumber: 'Number of players',
        confirm: 'Set',
        start: 'Press spin to start<br>&nbsp;',
        spin: 'Spin',
        disqualify: 'Disqualify player',
        player: 'P',
        playername: 'Player',
        end: 'The end',
        reload: 'Play again',
        lang: 'Language',
        madeby: 'Made by',
        source: 'Source code'
    },
    fr: {
        bodyparts: ["Main gauche", "Main droite", "Pied gauche", "Pied gauche", "Pied droit"],
        colors: [["Rouge", "#c0392b"], ["Bleu", "#2980b9"], ["Jaune", "#f1c40f"], ["Vert", "#009432"]],
        sub: 'Une roulette Twister intelligente',
        playernumber: 'Nombre de joueurs',
        confirm: 'Confirmer',
        start: 'Appuyez sur spin pour démarrer <br>&nbsp;',
        spin: 'Spin',
        disqualify: 'Disqualifier le joueur',
        player: 'J',
        playername: 'Joueur',
        end: "C'est fini!",
        reload: 'Jouer à nouveau',
        lang: 'Langue',
        madeby: 'Fabruqué par',
        source: 'Code source'
    }

    //Add your language here
};

if(lang === null || languages[lang] === undefined){
    lang = 'es';
}

function setLanguage(){
    document.getElementById('sub').innerHTML = languages[lang].sub;
    document.getElementById('playernumber').innerHTML = languages[lang].playernumber;
    document.getElementById('set').innerHTML = languages[lang].confirm;
    document.getElementById('bodypart').innerHTML = languages[lang].start;
    document.getElementById('spin').innerHTML = languages[lang].spin;
    document.getElementById('disqualify').innerHTML = languages[lang].disqualify;
    document.getElementById('reload').innerHTML = languages[lang].reload;
    document.getElementById('lang').innerHTML = languages[lang].lang;
    document.getElementById('madeby').innerHTML = languages[lang].madeby;
    document.getElementById('source').innerHTML = languages[lang].source;
}

setLanguage();
