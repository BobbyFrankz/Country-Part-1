import axios from 'axios';

console.log('Hallo daar!');


// Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?

// koppel index list
const list = document.getElementById("country-list")


async function fetchCountrySearch(countryName) {

    const response = await axios.get(`https://restcountries.com/v2/name/${countryName}`);

    try {

        // maak de list leeg
        list.replaceChildren()

        //map door data
        response.data.map((country) => {
            const {flags: {png}, name, capital, subregion, currencies, population, languages} = country;


            //flags
            const flagCountry = document.createElement('img');
            flagCountry.setAttribute('src', country.flag);
            flagCountry.setAttribute('class', "country-flag")
            list.appendChild(flagCountry)


            //maak list element
            const firstCountry = document.createElement('p');
            firstCountry.textContent = country.name;
            list.appendChild(firstCountry);

            //region
            const countryRegion = document.createElement('p');
            countryRegion.textContent = country.region;
            list.appendChild(countryRegion);

            //population
            const popularCountry = document.createElement('p');
            popularCountry.textContent = `Has a population of ${country.population} people`;
            list.appendChild(popularCountry);

            //make array list of needed names.
            let coinString;
            const coinArray = currencies.map((coin) => {
                return coin.name;
            })
            // print strings currencies
            if (currencies.length === 1) {
                coinString = `you can pay with ${coinArray[0]}`;
            } else {
                coinString = `you can pay with ${coinArray[0]} and ${coinArray[1]}`;
            }

            const currencyCountry = document.createElement("p")
            currencyCountry.textContent = coinString;
            list.appendChild(currencyCountry)

            //make array list of needed names.
            let languageString;
            const languageArray = languages.map((speak) => {
                return speak.name;

                // print strings language
                if (languageArray.length === 1) {
                    languageString = `they speak ${languageArray[0]}`;
                } else if (languageArray.length === 2) {
                    languageString = `they speak ${languageArray[0]} and ${languageArray[1]}`;
                } else {
                    languageString = `they speak${languageArray[0]} and ${languageArray[1]} and ${languageArray[2]}`;
                }

                const languageCountry = document.createElement("p")
                languageCountry.textContent = languageString;
                list.appendChild(languageCountry)

            })


        })
        //caches the errors
    } catch (e) {
        console.error(e)
    }
}
///////////////zoek functie//////////////
let value = "";

function textValue(input) {
    value = input.target.value;
}

const userInput = document.getElementById("input-search");
userInput.addEventListener("keyup", textValue);
userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search").click();
        fetchCountrySearch(value);
        userInput.value = "";
    }
});
const button = document.getElementById('search')
button.addEventListener('click', () => {
    fetchCountrySearch(value);
    userInput.value = "";

})


//button vergelijkt de data en geeft data terug

