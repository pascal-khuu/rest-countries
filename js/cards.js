async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=flags,name,capital');
    const cards = await response.json();
    let groupcards = '';



    for (const card of cards) {

        groupcards =
            groupcards +
            `<div class="col"> 
                <div class="card h-100"> 
                    <a href="${card.flags.png}"><img src="${card.flags.png}" class="card-img-top" alt="image non affichée"></a>
                    <div class="card-body">
                        <h3 class="card-title">${card.name.official} </h2> 
                        <p class="card-text"> ${card.capital[0]} </p>
                    </div> 
                </div>
            </div>`;

    }

    const target = document.getElementById('cards');
    target.innerHTML = groupcards;
}

window.addEventListener('load', render());