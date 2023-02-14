
movieArray = []
const searchBar = document.getElementById("search-bar")
const searchButton = document.getElementById("search-button")
const resultsContainer = document.getElementById("results-container")

searchButton.addEventListener("click", function () {
    fetch(`http://www.omdbapi.com/?s=${searchBar.value}&apikey=ec55d5fb`)
        .then(res => res.json())
        .then(data => {
            console.log(data.Search)
            for (let i = 0; i < data.Search.length; i++) {
                movieArray.push(data.Search[i])
            }
            renderResults()

        })
})


function renderResults() {
    let html = ""
    for (let movie of movieArray) {
        html += `
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <img src="${movie.Poster}">
            <hr />
        `
    }
    document.getElementById("film-icon").style.visibility = "hidden"
    document.getElementById("icon-subtext").style.visibility = "hidden"
    document.getElementById("results-container").innerHTML = html
}