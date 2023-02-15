
movieArray = []
const searchBar = document.getElementById("search-bar")
const searchButton = document.getElementById("search-button")
const posterContainer = document.getElementById("poster-container")

searchButton.addEventListener("click", function () {
    fetch(`https://www.omdbapi.com/?s=${searchBar.value}&apikey=ec55d5fb`)
        .then(res => res.json())
        .then(data => {
            
            console.log(data.Search)

            
            for (let i = 0; i < data.Search.length; i++) {
                movieArray.push(data.Search[i])
            }
        
            renderPoster()
            renderDetails()
            clearPlaceholders()
            movieArray = []


        })
})


function renderPoster() {
    let imageHtml = ""
    for (let movie of movieArray) {

        imageHtml += `
            
            <img src="${movie.Poster}" class = "poster-images">
            <hr />
        `
        
    }
    
    document.getElementById("poster-container").innerHTML = imageHtml

}


function renderDetails () {
    let detailsHtml = ""
    for (let movie of movieArray) {

        detailsHtml += `
            
            <p>${movie.Title}</p
        `
        
    }
    
    document.getElementById("movie-details-container").innerHTML = detailsHtml
}


function clearPlaceholders () {
    document.getElementById("film-icon").style.visibility = "hidden"
    document.getElementById("icon-subtext").style.visibility = "hidden"
}