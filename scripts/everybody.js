const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const everybodyURL = baseURL + endpointSquad;

getData(everybodyURL).then( dataEverbody => {
    // console.log(dataEverbody);
    let allPeople = dataEverbody.data;
    let allSection = document.querySelector('section:nth-of-type(2)');

    allPeople.forEach( person => { 
       let personName = person.name;
       let personImgSrc = person.avatar;
       let personWebsite = person.website;

      if (personImgSrc) { 
        // do nothing
      } else {
        // gebruik default image
        let randomNr = Math.floor( Math.random() * 5 ) + 1;
        personImgSrc = 'images/placeholder' + randomNr + '.svg';
      }

      if (personWebsite) {
        // do nothing
      } else {
       personWebsite = fallbackWebsite;
      }
        
      let personHTML = `<article>
      <h3>${personName}</h3>
      <img src="${personImgSrc}" alt="${personName}">
      <a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
    </article>`;

    // voeg de HTML toe aan de section vóór het einde
    allSection.insertAdjacentHTML('beforeend', personHTML);
 }) 
});















/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }