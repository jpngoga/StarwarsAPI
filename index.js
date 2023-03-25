const results = document.querySelector('#results');


async function asyncFetch(value) {

    let url = "https://swapi.dev/api/";
    const res = await fetch(`${url}${value}/`);
    const data = await res.json();
    console.log(data)

    displayResults(data, value)
}

const accordion = document.getElementsByClassName('card-title');



for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');

    });
}

const anywhere = document.getElementsByClassName('card-content');

window.addEventListener('click', function(e) {
    if (e.target === anywhere) {
        this.classList.toggle('active');
    }
})






function displayResults(data, value) {
    let output = "";
    if (value === 'films') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.title}</h4>
                
                    <div class="card-content">
                        <span style="text-decoration:">Producer</span> ${item.producer}<br>
                        <span style="text-decoration:">Director</span> ${item.director}<br>
                        <span style="text-decoration:">Release Date</span> ${item.release_date}<br>
                        <p class="text-center">${item.opening_crawl}</p>
                    </div>
                </div>`
        })
    }
    if (value === 'people') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                
                    <div class="card-content">
                        <span style="text-decoration:">Height</span> ${item.height}<br>
                        <span style="text-decoration:">Mass</span> ${item.mass}<br>
                        <span style="text-decoration:">Gender</span> ${item.gender}<br>
                        <span style="text-decoration:">Birth Year</span> ${item.birth_year}<br>
                        <p class="text-center">${item.homeworld}</p>
                    </div>
                </div>`
        })
    }

    results.innerHTML = output;
}

document.querySelector("#buttons").addEventListener('click', e => {

    asyncFetch(e.target.textContent.trim().toLowerCase())

})