async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,area,population,capital');
    const countries = await response.json();
    let table = '';
    const formatNumber = new Intl.NumberFormat('en-US');
    for (const country of countries) {
        table =
            table +
            `<tr>  
                <th class="text-nowrap">${country.name.official}</th>
                <td class="text-end">${formatNumber.format(country.area)}</td>
                <td class="text-end">${formatNumber.format(country.population)}</td>
                <td class="text-nowrap">${country.capital[0]}</td>
            </tr>`;
    }

    const target = document.getElementById('countries');
    target.innerHTML = table;
}

window.addEventListener('load', render());