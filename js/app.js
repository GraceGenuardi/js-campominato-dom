console.log('Prato fiorito')

//PRIMA PARTE: CREAZIONE GRIGLIA

//1. Dichiariamo le costanti 
const latoGriglia = 10
const numeroCelle = latoGriglia * latoGriglia

console.log(latoGriglia, numeroCelle)

const grigliaElement = document.querySelector('.griglia')
console.log(grigliaElement)

const playButton = document.querySelector('#play-button')

//2.L’utente clicca su un pulsante PLAY  per generare la una griglia quadrata 10 * 10 
playButton.addEventListener('click', function () { //NB Correggi dando nome alla funzione

	 // Azzera la griglia
	 grigliaElement.innerHTML = '';
	 
	for (let i = 0; i < numeroCelle; i++) {
		let num = i + 1
		console.log(num)
		let divString = `<div class="cella" style="width: calc(100% / ${latoGriglia});" >${num}</div>` 
	
		grigliaElement.innerHTML += divString
	}
	
	const celleElements = document.querySelectorAll('.cella')
	// console.log(celleElements)

//3.Ogni casella deve contenere il numero corrispondente a partire da 1 fino a 100

	for (let i = 0; i < celleElements.length; i++) {
		const cella = celleElements[i]
	
		cella.addEventListener('click', function () {
			console.log(i + 1)
		})

 //4. BONUS: cambio background delle celle al click
 
 cella.addEventListener('click', function () {
    console.log(i + 1)
    

    let numeroCella = i + 1;
	
	if (bombe.includes(numeroCella)) {
		// se la cella cliccata è una bomba, comparirà il dipinto dipinto da Van Ghog rappresentante la bomba nucleare
		cella.classList.add("bomba")
		
		// codice per terminare la partita
        alert('Hai cliccato su una bomba, la partita è finita');
        playButton.removeEventListener('click', onClick);
        alert(`La partita è finita! Il tuo punteggio è ${punteggio}`)
	} else {
		// altrimenti colorare col backgroung già dato, rosa trasparente
		cella.classList.toggle("cella-selezionata")
		
		// codice per tenere traccia del punteggio
        punteggio++;
        punteggioElement.innerHTML = `Punteggio: ${punteggio}`;

        
        if (punteggio === numeroCelle - numeroBombe) {
            alert(`Hai vinto! Il tuo punteggio è ${punteggio}`);
            playButton.removeEventListener('click', onClick);
          }
	}
})
   



	}
})

function onClick() {
	console.log(i + 1)
}


//SECONDA PARTE: GENERAZIONE BOMBE

//1. Creare constante per il numero di bombe da inserire e un array vuoto per tenerne traccia
const numeroBombe = 16;
let bombe = [];




//2. Generare 16 numeri casuali unici che rappresentano le posizioni delle bombe (ciclo while)

while (bombe.length < numeroBombe) {
    let numeroCasuale = Math.floor(Math.random() * numeroCelle) + 1


    if (!bombe.includes(numeroCasuale)) {
        bombe.push(numeroCasuale);
    }

}

//3. Modificare l'event listener per il click sulla cella





// TERZA PARTE: FINE PARTITA E PUNTEGGIO

// Dichiariamo una costante per tenere traccia del punteggio
let punteggio = 0;

//Stampo il risultato nella mia pagina web

const punteggioElement = document.querySelector('#punteggio');
punteggioElement.innerHTML = 'Punteggio: 0';
