
movieArray = []
const searchBar = document.getElementById("search-bar")
const searchButton = document.getElementById("search-button")
const resultsContainer = document.getElementById("results-container")

searchButton.addEventListener("click", function () {
    fetch (`http://www.omdbapi.com/?s=${searchBar.value}&apikey=ec55d5fb`)
    .then(res => res.json())
    .then(data => {
        console.log(data.Search[0])
        movieArray.push(data.Search[0])
        renderResults()
        
    })
})


function renderResults() {
    let html = ""
    for (let movie of movieArray) {
        html += `
            <h3>${movie.Title}</h3>
            <hr />
        `
    }
    document.getElementById("results-container").innerHTML = html
}