

const watchListArray = []

let fromStorage = JSON.parse(window.localStorage.getItem("addedMovieId"))

console.log(fromStorage)


fetch(`https://www.omdbapi.com/?i=${fromStorage}&apikey=ec55d5fb`)
    .then (response => response.json())
    .then (data => {
        console.log(data)

        watchListArray.push(fromStorage)
        console.log(watchListArray)
        
        document.getElementById("results-container").innerHTML += `
        
        <h3>${data.Title} (${data.Year})</h3>
        <p> ${data.Plot}</p>
        <img src="${data.Poster}" class = "movie-posters">
        <p> IMDB ID: ${data.imdbID}</p>
    

        <hr />
        
        
        `
    })

    document.getElementById("film-icon").style.visibility = "hidden"
    document.getElementById("icon-subtext").style.visibility = "hidden"

