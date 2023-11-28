class Characters_class {
  constructor (campi, nome, cognome, immagine, info, risposte) {
    this.id_c = id_c;
    this.campi = campi;
    this.nome = nome;
    this.cognome = cognome;
    this.immagine = immagine;
    this.info = info;
    this.risposte = risposte;
    this.punti = 0;

    charactersList.push(this);
    id_c++;
  }
}


let id_c = 0;
let charactersList = [];
let pointsList = [];

// creo gli oggetti (persone) della classe Characters_class
let Albert_Einstein = new Characters_class(["scienza", "matematica"], "Albert", "Einstein", "img/Albert_Einstein.jpg", "Albert Einstein  Grande fisico del XIX e XX", [true]);
let Marie_Curie = new Characters_class(["scienza"], "Marie", "Curie", "img/Marie_Curie.jpg", "Marie Curie  Prima donna premio insignita del premio Nobel", [false]);
let Charles_Darwin = new Characters_class(["scienza"], "Charles", "Darwin", "img/Charles_Darwin.jpg", "Charles Darwin  Quello dell'evoluzione delle specie", [true]);
let Stephen_Hawking = new Characters_class(["scienza", "matematica"], "Stephen", "Hawking", "img/Stephen_Hawking.jpg", "Stephen Hawking  Astrofisico dei nostri anni", [true]);
let Galileo_Galilei = new Characters_class(["scienza", "matematica"], "Galileo", "Galilei", "img/Galileo_Galilei.jpg", "Galileo Galilei  Sostenitore della teoria eliocentrica", [true]);
let Elon_Musk = new Characters_class(["tecnologia", "ingegneria"], "Elon", "Musk", "img/Elon_Musk.jpg", "Elon Musk  Grande imprenditore e ingegnere. CEO di Tesla e Twitter", [true]);
let Steve_Jobs = new Characters_class(["tecnologia"], "Steve", "Jobs", "img/Steve_Jobs.jpg", "Steve Jobs  Co-fondatore di Apple", [true]);
let Bill_Gates = new Characters_class(["tecnologia"], "Bill", "Gates", "img/Bill_Gates.jpg", "Bill Gates  Co-fondatore di Microsoft", [true]);
let Jeff_Bezos = new Characters_class(["tecnologia"], "Jeff", "Bezos", "img/Jeff_Bezos.jpg", "Jeff Bezos  Fondatore di Amazon, ha contribuito a trasformare il commercio online", [false]);
let Brendan_Eich = new Characters_class(["tecnologia"], "Brendan", "Eich", "img/Brendan_Eich.jpg", "Brendan Eich  Creatore del linguaggio di programmazione JavaScript", [true]);
let Henry_Ford = new Characters_class(["ingegneria", "tecnologia"], "Henry", "Ford", "img/Henry_Ford.jpg", "Henry Ford  Ingengnere e pioniore della tecnologia dell'industria automobilistica", [false]);
let Michelangelo_Buonarroti = new Characters_class(["arte"], "Michelangelo", "Buonarroti", "img/Michelangelo_Buonarroti.jpg", "Michelangelo Buonarroti  Famoso artista italiano del Rinascimento", [true]);
let Donatello = new Characters_class(["arte"], "Donatello", "", "img/Donatello.jpg", "Donatello  Famoso artista italiano del Rinascimento", [true]);
let Raffaello_Sanzio = new Characters_class(["arte"], "Raffaello", "Sanzio", "img/Raffaello_Sanzio.jpeg", "Raffaello Sanzio  Famoso artista italiano del Rinascimento", [true]);
let Vincent_van_Gogh = new Characters_class(["arte"], "Vincent", "van Gogh", "img/Vincent_van_Gogh.jpg", "Vincent van Gogh  maestro post-impressionista, dipinge emozioni ardenti con colori audaci e pennellate caratteristiche", [true]);
let Pablo_Picasso = new Characters_class(["arte"], "Pablo", "Picasso", "img/Pablo_Picasso.jpg", "Pablo Picasso  Artista della corrente del cubismo, influente nel XX secolo", [false]);
let Pitagora = new Characters_class(["matematica", "scienza"], "Pitagora", "", "img/Pitagora.jpg", "Pitagora  Matematico e scienziato greco, ad oggi conosciuto da tutti per il famoso teorema", [])
let Claude_Monet = new Characters_class(["arte"], "Claude", "Monet", "img/Claude_Monet.jpg", "Claude Monet  Nato nel XIX secolo, è considerato uno dei fondatori dell'impressionismo", [true]);
let Banksy = new Characters_class(["arte"], "Banksy", "", "img/Banksy.jpg", "Banksy  Considerato da alcuni un artista e da altri un semplice vandalo. Le sue opere sono spesso a sfondo satirico. La sua identità è ignota", [true]);
let Salvador_Dali = new Characters_class(["arte"], "Salvador", "Dalì", "img/Salvador_Dali.jpg", "Salvador Dali  Pittore, scultore, cineasta ecc. Le sue erano opere del surrealismo", [true]);

function create_characters_grid() {
  delete_characters_grid();
  for (let i=0; i<charactersList.length; i++) {
    // creo la cella del pg
    const characterCell = document.createElement("div");
    // setto un indice per ogni cella dei pg in caso servisse dopo
    characterCell.dataset.index = i.toString();
    characterCell.setAttribute("id", "character-cell");
    // creo l'immagine e le info del pg
    const characterImg = document.createElement("img");
    characterImg.id = "character-img";  // anche setAttribute("id", "character.img")
    characterImg.src = charactersList[i].immagine;
    const characterInfo = document.createElement("span");
    characterInfo.id = "character-info";
    characterInfo.textContent = charactersList[i].info;
    // inserisco img e info nella cella
    characterCell.appendChild(characterImg);
    characterCell.appendChild(characterInfo);
    // inserisco la cella nell'elemento HTML della griglia
    charactersGrid.appendChild(characterCell);
  }
}

function delete_characters_grid() {
  while (charactersGrid.firstChild) {
    charactersGrid.removeChild(charactersGrid.lastChild);
  }
}


const charactersGrid = document.getElementById("characters-grid");
const form = document.getElementById("question-form");
const QUESTIONS = [
  "Il tuo personaggio è vivo?",
  "Il tuo personaggio è vissuto nel XIX secolo?",
  "Il tuo personaggio è noto per aver lavorato in Italia?",
  "Il tuo personaggio ha contribuito al progresso scientifico?", 
  "Il tuo personaggio è nato in Europa?",
  "Il tuo personaggio è mai stato milionario?",
  "Il tuo personaggio ha mai scritto un libro?",
  "Il tuo personaggio è stato premiato con un Nobel?",
  "Il tuo personaggio è famoso per aver fatto delle scoperte?",
  "Il tuo personaggio è l'autore di opere artistiche conosciute in tutto il mondo?"

];
const QUESTIONS_TO_ASK = 20;
// creo una mappa i:domanda per non fare domande già chieste
let newQuest = shuffle(QUESTIONS.slice());
//newQuest = shuffle(newQuest);
let answer;
let questionIndex;
let nOfQuestionsMade = 0;



// MODIFICARE
function shuffle(q) {
  for (let i=q.length-1; i>0; i--) {
    let x = Math.floor(Math.random() * i + 1);
    [q[i], q[x]] = [q[x], q[i]];
  }
  return q;
}

function set_question() {
  delete_form();
  // prendo l'indice di una domanda nuova
  // IN QUESTO MODO POSSONO ESSERCI DOMANDE CON INDICI CHE NON ESISTONO
  questionIndex = QUESTIONS.indexOf(newQuest[0])
  // scrivo la domanda
  document.getElementById("question").innerHTML = newQuest[0];

  // setto i radio button
  value = "Sì";
  for (let j=0; j<2; j++) {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = value;
    radio.id = value;

    const label = document.createElement("label");
    label.innerHTML = value;
    label.htmlFor = value;

    form.appendChild(radio);
    form.appendChild(label);
    value = "No";
  }

  // assegno eventi ai radio button
  // seleziono i radio button
  var radioButtons = document.getElementsByName("answer");
  // assegno la funzione per gestire l'evento change dei radio button
  radioButtons.forEach(function(r) {
    r.addEventListener('change', handle_click);
  });
}

function delete_form() {
  while (form.firstChild) {
    form.removeChild(form.lastChild);
  }
}
// gestisco il click dei bottoni
function handle_click(event) {
  // event.target seleziona l'elemento sottoposto a change
  let btn = event.target;
  // PROVARE a TOGLIERE il blocco IF dopo!!!
  if (btn.checked) {
    answer = btn.value == "Sì";
    check_answer();
  }
}

// assegno punti ai personaggi in base ad answer
function check_answer() {
  for (let i=0; i<charactersList.length; i++) {
    // CAMBIARE INDICE RISPOSTE QUANDO LE AVRò FINITE!!!
    if (charactersList[i].risposte[0] == answer) {
      charactersList[i].punti++;
    }
  }
  newQuest = newQuest.slice(1);
  nOfQuestionsMade++;
  guess();
  set_question();
}

// provo a vedere se posso indovinare
/* provo a indovinare dopo ogni risposta utilizzando 
un'equazione che mi assicuri che il personaggio con più punti 
non possa essere superato entro le domande rimanenti (20 in totale) 
dal secondo personaggio con più punti, neanche nell’ipotesi in cui 
il primo non guadagni più punti e il secondo li guadagni sempre */
function guess() {
  let dr = QUESTIONS_TO_ASK - nOfQuestionsMade;
  let [idx1, idx2] = max2scores();
  if (charactersList[idx1].punti >= charactersList[idx2].punti + dr) {
    // MOSTRARE A SCHERMO IL VINCITORE
    console.log("Il tuo personaggio era... ${charactersList[idx1].nome} ${charactersList[idx1].cognome}!");
    resetGame();
  }
}

// ritorno gli indici dei 2 personaggi con più punti
function max2scores() {
  // indice 1° personaggio x punti
  let idx1 = charactersList[0].punti >= charactersList[1].punti ? 0 : 1;
  // indice 2° personaggio x punti
  let idx2 = idx1 == 0 ? 1 : 0;

  for (let i=3; i<charactersList.length; i++) {
    if (charactersList[i].punti > charactersList[idx1].punti) {
      idx2 = idx1;
      idx1 = i;
    } else if (charactersList[i].punti > charactersList[idx2].punti) {
      idx2 = i;
    }
  }
  console.log(idx1, idx2);
  return [idx1, idx2];
}

// resetto tutte le variabili di gioco
function resetGame() {
  // DA FARE
}




/*
Albert_Einstein.punti = 13;
Marie_Curie.punti = 24;
Elon_Musk.punti = 14;
*/

