async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,cca2,capitalInfo');
    const mapCountries = await response.json();
    let option = '';
    let somme = 0;
    for (const mapCountry of mapCountries) {
        // build a drop-down list of European countries 
        if (mapCountry.cca2 == "FR") {
            option += `<option value="${mapCountry.cca2}" selected > ${mapCountry.name.official}</option>`;
        } else {
            option += `<option value="${mapCountry.cca2}"> ${mapCountry.name.official}</option>`;
        }
    }
    console.log(somme);

    //a variable 'target' is a dropdow list of European countries 
    const target = document.getElementById('mapcountries');
    target.innerHTML = option;
    //a variable 'target 2' display a map centered on the capital of an European country (by defaut France and an other European country selected by the drop-down list of European countries above)
    const target2 = document.getElementById('map');
    // target2.innerHTML = map;
    // an addEventListener when an user selects an European country in the drop-down list  of European countries
    target.addEventListener('change', () => displaymap(target, target2));
}

async function displaymap(target, target2) {
    //  thanks to the code ISO of a selected European country in the drop-down list above, we search  the latitude and the longitude of this country's capital
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${target.value}?fields=capitalInfo`);
    const mapDisplay = await response.json();
    let map = '';
    // Thanks to the information with the fetch, we display a map centered on the capital of an European country with the latitude and the longitude of this capital with the zoom 10 and the language which is english
    map = `src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${mapDisplay.capitalInfo.latlng[0]},${mapDisplay.capitalInfo.latlng[1]}&zoom=10&language=en"`;
    target2.innerHTML = map;
}
window.addEventListener('load', render());