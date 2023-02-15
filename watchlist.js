
fetch(`https://www.omdbapi.com/?t="${JSON.parse(window.localStorage.getItem('addedMovieId'))}"&apikey=ec55d5fb`)
    .then (response => response.json())
    .then (data => {
        console.log(data)
        document.getElementById("results-container").innerHTML += `
        
        <h3>${data.Title} (${data.Year})</h3>
        <img src="${data.Poster}" class = "movie-posters">
        <p> IMDB ID: ${data.imdbID}</p>
    

        <hr />
        
        
        `
    })

    document.getElementById("film-icon").style.visibility = "hidden"
    document.getElementById("icon-subtext").style.visibility = "hidden"

