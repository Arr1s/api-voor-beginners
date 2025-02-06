// api documentation: https://whois.fdnd.nl/docs/

// 1 persoon: https://fdnd.directus.app/items/person/67
// iedereen: https://fdnd.directus.app/items/person/?fields=id,name,github_handle,avatar&filter={%22squads%22:{%22squad_id%22:{%22name%22:%22Minor%20Web%20Dev%22}}}&sort=name

// De app/website waar ik data vandaan wil halen
const baseURL = 'https://fdnd.directus.app/';

// De data die ik wil hebben van de website
const endpointMe = 'items/person/209';

// Samenvoeging om de URL te krijgen
const urlMe = baseURL + endpointMe;

// console.log(urlMe);

// Haal de data op uit de URL, wanneer je klaar bent pak data van persoon 209
getData(urlMe).then( data209 => {
	// console.log(data209.data.name);
	// console.log(data209.data.birthdate);

	// Haal de naam uit de data set van persoon 209
	let myName = data209.data.name;
	let birthDay = data209.data.birthdate;

	// Selecteer de h1 met de naam "h1" en vergang de tekst met "myName"
	let h1 = document.querySelector('h1');
	h1.textContent = myName;

	// Selecteer de p met de naam "verjaardag" en vergang de tekst met "birthDay"
	let verjaardag = document.querySelector('p');
	verjaardag.textContent = birthDay;
});















/****************/
/* FETCH DATA   */
/* RETURNS JSON */
/****************/

// generieke functie om data aan een API te vragen
// deze kun je keer op keer hergebruiken
// nb. in het echt iets complexer --> bijv ook rekening houden met fouten

// 1. doe een verzoek aan de API om data
// 2. ga verder als de API antwoord geeft
// 3. als het goed gaat krijg je een 'response'-object met data terug
// 3. daarmee kun je nog niet aan de slag
// 4. het 'response'-object zet je om naar JSON
// 4. met JSON kun je aan de slag in jouw JS
// 5. als de response is omgezet naar JSON kun je weer verder
// 6. de naam van de naar JSON omgezette info is 'jsonData'
// 6. Die naam mag je overigens zelf verzinnen
// 7. de JSON ('jsonData') geef je terug aan de 'getData' functie
// 8. de 'getData' functie geeft de 'jsonData' terug aan de functie die om de data vroeg
// 9. async betekent dat terwijl de data wordt opgehaald er andere dingen gedaan kunnen worden
// 9. op het moment dat de data er is geeft de functie een seintje
// 9. dan kun je dan wat met de data gaan doen

async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}



/**************/
/* SPIEKBRIEF */
/**************/

// const h1 = document.querySelector('h1');

// getMyName();

// function getMyName() {
// 	getData(urlMe).then( data => {  

// 		const myData = data.data;
// 		let myName = myData.name;

// 		h1.textContent = myName;
// 	});	
// }