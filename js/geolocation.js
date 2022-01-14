async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,cca2');
    const mapcountries = await response.json();
    let option = '';
    let x = 1;

    for (const mapcountry of mapcountries) {
        option +=
            `<option value="${mapcountry.cca2}"> ${mapcountry.name.official}
            </option>   `;

        x++;
    }
    const target = document.getElementById('mapcountries');
    target.innerHTML = option;
    target.addEventListener("click", map());
}

window.addEventListener('load', render());

async function map() {
    const response2 = await fetch('https://restcountries.com/v3.1/region/europe?fields=maps');
    const map = await response2.json();
    let mapimg = '';
    for (const country of map) {
        `<img src="${country.maps.googleMaps}" class="card-img-top" alt="no image">`
    }
    const target2 = document.getElementById('map');
    target2.innerHTML = mapimg;
}