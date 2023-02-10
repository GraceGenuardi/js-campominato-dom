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

 //4. BONUS: cambio background delle celle cal click
 
 cella.addEventListener('click', function () {
    console.log(i + 1)
    cella.classList.toggle("cella-selezionata")
})
   



	}
})

function onClick() {
	console.log(i + 1)
}


//SECONDA PARTE: GENERAZIONE BOMBE

