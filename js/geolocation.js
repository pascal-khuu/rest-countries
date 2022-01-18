async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,cca2,latlng');
    const mapcountries = await response.json();
    let option = '';
    for (const mapcountry of mapcountries) {
        if (mapcountry.cca2 === "FR") {
            option = `< option  selected > 'French Republic' < /option>`;
        }
        option += `<option value="${mapcountry.cca2}"> ${mapcountry.name.official}
            </option>`;
    }
    const target = document.getElementById('mapcountries');
    target.innerHTML = option;
    const selectElement = document.querySelector('#mapcountries');
    selectElement.addEventListener('change', (event) => {
        const result = document.getElementById('map');
        result.innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&q=${event.capital[0]}+${event.name.official}&center=${event.latlng[0]},${event.latlng[1]}"></iframe>`;
    });

}
window.addEventListener('load', render());