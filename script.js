movieArray = []
const searchBar = document.getElementById("search-bar")
const searchButton = document.getElementById("search-button")
const resultsContainer = document.getElementById("results-container")
const watchListButton = document.getElementById("add-watchlist-button")



searchButton.addEventListener("click", function () {
    fetch(`https://www.omdbapi.com/?s=${searchBar.value}&apikey=ec55d5fb`)
        .then(res => res.json())
        .then(data => {

            for (let i = 0; i < data.Search.length; i++) {
                movieArray.push(data.Search[i])
            }
            renderResults()
            document.querySelectorAll(".add-watchlist-button").forEach(item => {
                item.addEventListener("click", event => { console.log(item.id) })
            })

        })



})


function renderResults() {
    let html = ""
    for (let movie of movieArray) {
        html += `
            <h3>${movie.Title} (${movie.Year})</h3>
            <button class = "add-watchlist-button" id ="${movie.imdbID}" "data-id = "${movie.imdbID}">Add to watchlist</button>
            <img src="${movie.Poster}" class = "movie-posters">
            <p> IMDB ID: ${movie.imdbID}</p>
        
  
            <hr />
            
        `

    }

    document.getElementById("film-icon").style.visibility = "hidden"
    document.getElementById("icon-subtext").style.visibility = "hidden"
    document.getElementById("results-container").innerHTML = html


    movieArray = []

}




