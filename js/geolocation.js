async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,cca2,capitalInfo');
    const mapCountries = await response.json();
    let option = '';
    let map = '';
    for (const mapCountry of mapCountries) {
        if (mapCountry.cca2 === "FR") {
            option = `< option  selected > ${mapCountry.name.official} < /option>`;

            // map = `<iframe style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${mapCountry.capitalInfo.latlng[0]},${mapCountry.capitalInfo.latlng[1]}&zoom=10&language=en-US"></iframe>`;
        }
        option += `<option value="${mapCountry.cca2}"> ${mapCountry.name.official}
            </option>`;
    }

    const target = document.getElementById('mapcountries');
    target.innerHTML = option;
    // const target2 = document.getElementById('map');
    // target2.innerHTML = map;
    // const result = document.getElementById('map');
    console.log(target.value);
    target.addEventListener('change', () => displaymap(target));
}

async function displaymap(target) {
    console.log(target.value);
    let target2 = target.value.toString();
    const response = await fetch('https://restcountries.com/v3.1/alpha/target2.value');
    const mapDisplay = await response.json();
    map = `<iframe style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${mapDisplay.capitalInfo.latlng[0]},${mapDisplay.capitalInfo.latlng[1]}&zoom=10&language=en-US"></iframe>`;
    const result = document.getElementById('map');
    result.innerHTML = map;
}
window.addEventListener('load', render());