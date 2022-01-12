async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,population,area');
    const countries = await response.json();
    let table = '';
    const formatNumber = new Intl.NumberFormat('en-US');
    for (const country of countries) {
        table = table + `<tr>  
         <th>  ${ country.name.official }  </th>
         <td>  ${ formatNumber.format(country.area) }  </td>
         <td>  ${ formatNumber.format(country.population) }  </td>
         <td>  ${ country.capital }  </td>
         </tr>`;
    }

    const target = document.getElementById('countries');
    target.innerHTML = table;

}

addEventListener('load', render());