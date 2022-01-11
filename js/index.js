async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name');
    countries = await response.json();
    let list = '';
    for (const country of countries) {
        list = list + '<li>' + country.name.official + '</li>';
    }

    const target = document.getElementById('countries');
    target.innerHTML = list;
}

addEventListener('load', render());