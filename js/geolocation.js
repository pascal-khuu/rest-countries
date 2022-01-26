async function render() {
    // search the informations : name, code Iso 2, latitude and longitude of European countries
    const responseCountryEurope = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,cca2');
    const mapCountriesEurope = await responseCountryEurope.json();
    // search the informations : the latitude and the longitude of the capital of France (Paris) thanks to the code ISO fr
    const responseCapitalFrance = await fetch(`https://restcountries.com/v3.1/alpha/fr?fields=capitalInfo`);
    const infoCapitalFrance = await responseCapitalFrance.json();
    let option = '';
    let mapCapitalFrance = '';

    for (const mapCountry of mapCountriesEurope) {
        // build a drop-down list of European countries 
        let optionCountry = `<option value="${mapCountry.cca2}"  > ${mapCountry.name.official}</option>`;
        if (mapCountry.cca2 !== "FR") {
            option += optionCountry;
        } else {
            option += !optionCountry;
        }
    }
    // mapCapitalFrance is an url (src) of an iframe which displays a map centered on Paris of France thanks to its latitude and its longitude with the zoom 10 and the language English.
    mapCapitalFrance = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${infoCapitalFrance.capitalInfo.latlng[0]},${infoCapitalFrance.capitalInfo.latlng[1]}&zoom=10&language=en`;
    //a variable 'selectCountry' is a dropdown list of European countries 
    const selectCountry = document.getElementById('mapcountries');
    selectCountry.innerHTML = option;
    //a variable 'iframeMapCountry' is  an iframe which displays a map centered on the capital of an European country (by defaut France and an other European country selected by the drop-down list of European countries above).
    const iframeMapCountry = document.getElementById('mapiframe');
    // iframeMapCountry.src is  here an url (src) of an iframe which displays a map centered on Paris of France thanks to its latitude and its longitude with the zoom 10 and the language English.
    iframeMapCountry.src = mapCapitalFrance;
    // an addEventListener when an user selects an European country in the drop-down list  of European countries.
    selectCountry.addEventListener('change', () => displaymap(selectCountry, iframeMapCountry));
}

async function displaymap(selectCountry, iframeMapCountry) {
    //  thanks to the code ISO of a selected European country in the drop-down list above, we search  the latitude and the longitude of this country's capital.
    const responseCountryEuropeCodeIso = await fetch(`https://restcountries.com/v3.1/alpha/${selectCountry.value}?fields=capitalInfo`);
    const mapDisplay = await responseCountryEuropeCodeIso.json();
    let mapCountryEurope = '';
    //  map is an url (src) of an iframe which displays a map centered on a capital of an European country thanks to its latitude and its longitude with the zoom 10 and the language English
    mapCountryEurope = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${mapDisplay.capitalInfo.latlng[0]},${mapDisplay.capitalInfo.latlng[1]}&zoom=10&language=en`;
    // iframeMapCountry.src is  here an url (src) of an iframe which displays a map centered on on a capital of an European country  thanks to its latitude and its longitude with the zoom 10 and the language English.
    iframeMapCountry.src = mapCountryEurope;
}
window.addEventListener('load', render());