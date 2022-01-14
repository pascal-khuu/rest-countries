async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,maps');
    const mapcountries = await response.json();
    let checkbox = '';
    let x = 1;
    for (const mapcountry of mapcountries) {
        checkbox =
            checkbox +
            `<option value="x"> ${mapcountry.name.official}
            </option>`;
        x++;
    }

    const target = document.getElementById('mapcountries');
    target.innerHTML = checkbox;
}

window.addEventListener('load', render());