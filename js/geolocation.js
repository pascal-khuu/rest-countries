async function render() {
    // search the informations : name, code Iso 2, latitude and longitude of European countries
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,cca2,capitalInfo');
    const mapCountries = await response.json();
    // search the informations : the latitude and the longitude of the capital of France (Paris) thanks to the code ISO fr
    const response2 = await fetch(`https://restcountries.com/v3.1/alpha/fr?fields=capitalInfo`);
    const france = await response2.json();
    let option = '';
    let mapfr = '';
    for (const mapCountry of mapCountries) {
        // build a drop-down list of European countries 
        if (mapCountry.cca2 == "FR") {
            option += `<option value="${mapCountry.cca2}" selected > ${mapCountry.name.official}</option>`;
        } else {
            option += `<option value="${mapCountry.cca2}"> ${mapCountry.name.official}</option>`;
        }
    }
    // mapfr is an url (src) of an iframe which displays a map centered on Paris of France thanks to its latitude and its longitude with the zoom 10 and the language English.
    mapfr = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${france.capitalInfo.latlng[0]},${france.capitalInfo.latlng[1]}&zoom=10&language=en`;
    //a variable 'target' is a dropdown list of European countries 
    const target = document.getElementById('mapcountries');
    target.innerHTML = option;
    //a variable 'target2' is  an iframe which displays a map centered on the capital of an European country (by defaut France and an other European country selected by the drop-down list of European countries above).
    const target2 = document.getElementById('mapiframe');
    // target2.src is  here an url (src) of an iframe which displays a map centered on Paris of France thanks to its latitude and its longitude with the zoom 10 and the language English.
    target2.src = mapfr;
    // an addEventListener when an user selects an European country in the drop-down list  of European countries.
    target.addEventListener('change', () => displaymap(target, target2));
}

async function displaymap(target, target2) {
    //  thanks to the code ISO of a selected European country in the drop-down list above, we search  the latitude and the longitude of this country's capital.
    const response3 = await fetch(`https://restcountries.com/v3.1/alpha/${target.value}?fields=capitalInfo`);
    const mapDisplay = await response3.json();
    let map = '';
    //  map is an url (src) of an iframe which displays a map centered on a capital of an European country thanks to its latitude and its longitude with the zoom 10 and the language English
    map = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${mapDisplay.capitalInfo.latlng[0]},${mapDisplay.capitalInfo.latlng[1]}&zoom=10&language=en`;
    // target2.src is  here an url (src) of an iframe which displays a map centered on on a capital of an European country  thanks to its latitude and its longitude with the zoom 10 and the language English.
    target2.src = map;
}
window.addEventListener('load', render());