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

// creo gli oggetti (persone) della classe Characters_class
let Albert_Einstein = new Characters_class(["scienza", "matematica"], "Albert", "Einstein", "img/Albert_Einstein.jpg", "Albert Einstein  Grande fisico del XIX e XX", [false, true, false, true, true, false, true, true, true, false, true, false, false, true,
  true, false, true, false, false, false]);
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
const questionForm = document.getElementById("question");
const btnForm = document.getElementById("question-form");
const result = document.getElementById("result");
const readyBtn = document.getElementById("ready-btn");
const resetBtn = document.getElementById("reset-btn");
resetBtn.disabled = true;

const QUESTIONS = [
1  "Il tuo personaggio è ancora vivo?",
2  "Il tuo personaggio è vissuto nel XIX secolo?",
3  "Il tuo personaggio è noto per aver lavorato in Italia?",
4  "Il tuo personaggio ha contribuito al progresso scientifico o matematico?", 
5  "Il tuo personaggio è nato in Europa?",
6  "Il tuo personaggio è mai stato miliardario?",
7  "Il tuo personaggio ha mai scritto un libro di qualsiasi tipo?",
8  "Il tuo personaggio è stato premiato con un Nobel?",
9  "Il tuo personaggio è famoso per aver fatto delle scoperte?",
10  "Il tuo personaggio è noto per le sue opere artistiche?",
11  "Il tuo personaggio è un uomo?",
12  "Il tuo personaggio è un pioniere del campo della medicina?",
13  "Il tuo personaggio è nato in Nord America?",
14  "Il tuo personaggio ha ispirato la scrittura di opere letterarie, cinematografiche o simili?",
15  "Il tuo personaggio ha vissuto più di 40 anni? (NO se ignoto)",
16  "Il tuo personaggio è religioso?",
17  "Il tuo personaggio è vissuto dopo la nascita di Cristo?",
18  "Il tuo personaggio ha a che fare con la tecnologia?",
19  "Il tuo personaggio ha mai combattuto guerre?",
20  "Il tuo personaggio è vissuto nel XVI secolo?"
];
const QUESTIONS_TO_ASK = 20;
// creo un array con le domande mischiate
// così da eliminare le domande già poste
let newQuest = shuffle(QUESTIONS.slice());
let questionIndex;
let answer;
let nOfQuestionsMade = 0;

// riportare giù
function reset_game() {
  for (let i=0; i<charactersList.length; i++) {
    charactersList[i].punti = 0;
  }
  newQuest = shuffle(QUESTIONS.slice());
  answer = null;
  nOfQuestionsMade = 0;

  resetBtn.disabled = true;
}

// mischio le domande
function shuffle(q) {
  for (let i=q.length-1; i>0; i--) {
    let x = Math.floor(Math.random() * i + 1);
    [q[i], q[x]] = [q[x], q[i]];
  }
  return q;
}
btnForm
// creo la sezione domande nell'HTML
function set_question() {
  readyBtn.disabled = true;
  delete_form();
  // scrivo la domanda
  questionIndex = QUESTIONS.indexOf(newQuest[0])
  questionForm.innerHTML = newQuest[0];
  // setto i radio button
  value = "Sì";
  for (let i=0; i<2; i++) {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = value;
    radio.id = value;

    const label = document.createElement("label");
    label.innerHTML = value;
    label.htmlFor = value;

    btnForm.appendChild(radio);
    btnForm.appendChild(label);
    value = "No";
  }
  // assegno eventi ai radio button
  // seleziono i radio button
  var radioButtons = document.getElementsByName("answer");
  // assegno la funzione per gestire l'evento change dei radio button
  radioButtons.forEach(function(e) {
    e.addEventListener('change', handle_answer_click);
  });
}

function delete_form() {
  questionForm.innerHTML = "";
  while (btnForm.firstChild) {
    btnForm.removeChild(btnForm.lastChild);
  }
}

// gestisco il click dei bottoni delle risposte
function handle_answer_click(event) {
  // event.target seleziona l'elemento sottoposto a change
  let btn = event.target;
  // PROVARE a TOGLIERE il blocco IF dopo!!!
  if (btn.checked) {
    answer = btn.value === "Sì";
    check_answer();
  }
}

// assegno punti ai personaggi in base ad answer
function check_answer() {
  for (let i=0; i<charactersList.length; i++) {
    // CAMBIARE INDICE RISPOSTE QUANDO LE AVRò FINITE!!!
    if (charactersList[i].risposte[questionIndex] === answer) {
      charactersList[i].punti++;
    }
  }
  newQuest = newQuest.slice(1);
  nOfQuestionsMade++;
  guess();
}

// constorllo se è necessario fare altre domande altrimenti indovino
function guess() {
  let dr = QUESTIONS_TO_ASK - nOfQuestionsMade;
  let [idx1, idx2] = get_max2scores();
  if (charactersList[idx1].punti >= charactersList[idx2].punti + dr) {
    // MOSTRARE A SCHERMO IL RISULTATO
    // show_result()
    result.innerHTML = `Il tuo personaggio era... ${charactersList[idx1].nome} ${charactersList[idx1].cognome}!`;
    delete_form();
    resetBtn.disabled = false;
  } else {
    set_question();
  }
}

// ritorno gli indici dei 2 personaggi con più punti
function get_max2scores() {
  // indice 1° personaggio x punti
  let idx1 = charactersList[0].punti >= charactersList[1].punti ? 0 : 1;
  // indice 2° personaggio x punti
  let idx2 = idx1 === 0 ? 1 : 0;

  for (let i=2; i<charactersList.length; i++) {
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




/*
Albert_Einstein.punti = 13;
Marie_Curie.punti = 24;
Elon_Musk.punti = 14;
*/

