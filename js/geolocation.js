async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,cca2,capitalInfo');
    const mapcountries = await response.json();
    let option = '';
    let map = '';
    for (const mapcountry of mapcountries) {
        if (mapcountry.cca2 === "FR") {
            option = `< option  selected > ${mapcountry.name.official} < /option>`;

            map = `<iframe style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${mapcountry.capitalInfo.latlng[0]},${mapcountry.capitalInfo.latlng[1]}&zoom=10"></iframe>`;
        }
        option += `<option value="${mapcountry.cca2}"> ${mapcountry.name.official}
            </option>`;
    }

    const target = document.getElementById('mapcountries');
    target.innerHTML = option;
    const target2 = document.getElementById('map');
    target2.innerHTML = map;
    // console.log(target.value);
    // const result = document.getElementById('map');
    // target.addEventListener('change', (event) => {
    // console.log(target.value);
    // result.innerHTML = `<iframe style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&center=${mapcountry.capitalInfo.latlng[0]},${mapcountry.capitalInfo.latlng[1]}&zoom=10}"></iframe>`;
    // });

}
window.addEventListener('load', render());