import axios from 'axios';

console.log('Hallo daar!');


// Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?

// koppel index list
const list = document.getElementById("list-of-country`s")


async function fetchCountry() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data[0].name);

        //sort it all
        result.data.sort ((a,b) => (a.population - b.population));

        //map door data
        result.data.map((country) => {

            //maak list element
            const firstCountry = document.createElement('li');
            firstCountry.textContent = country.name;
            list.appendChild(firstCountry);

            //region
            const countryRegion = document.createElement('li');
            countryRegion.textContent = country.region;
            list.appendChild(countryRegion);
            //population
            const popularCountry = document.createElement('li');
            popularCountry.textContent  = `Has a population of ${country.population} people`;
            list.appendChild(popularCountry);
            //flags
            const flagCountry = document.createElement('img');
            flagCountry.setAttribute('src',country.flag);
            flagCountry.setAttribute('class',"flag-country")
            list.appendChild(flagCountry);


            // add colors
            switch (country.region) {
                case 'Africa':
                    firstCountry.style.color = 'blue'
                    break;
                case 'Americas':
                    firstCountry.style.color = 'green'
                    break;
                case 'Asia':
                    firstCountry.style.color = 'red'
                    break;
                case 'Europe':
                    firstCountry.style.color = 'yellow'
                    break;
                case 'Oceania':
                    firstCountry.style.color = 'purple'
                    break;

            }

        })
        //caches the errors
    } catch (e) {
        console.error(e)
    }
}

console.log(fetchCountry())


