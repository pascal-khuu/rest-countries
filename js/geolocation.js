async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,cca2,latlng');
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

    // map.innerHTML = new google.maps.Map(document.getElementById("mapcountry"), {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8
    // });
    // target.addEventListener('click', map());
}

window.addEventListener('load', render());

// async function map() {
//     const response2 = await fetch('https://restcountries.com/v3.1/region/europe?fields=maps');
//     const map = await response2.json();
//     let mapimg = '';
//     for (const country of map) {
//         `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZm8TLhPjzek0GMmnJtgZDBgyIJXG_EPE&&q=$Paris+France">

//         </iframe>;`;
//     }
//     const target2 = document.getElementById('map');
//     target2.innerHTML = mapimg;
// }