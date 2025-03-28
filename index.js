/*

function 
*/

function search(){
    let movieInput = document.getElementById("movie")

    let movieName = movieInput.value

    const htmlRequest = new XMLHttpRequest()

    let url = "https://www.omdbapi.com/?apikey=5e3a42ce&t="+movieName

    htmlRequest.open("GET",url)

    htmlRequest.responseType = "json"

    htmlRequest.send()

    htmlRequest.onload = function(){
        let movieData = htmlRequest.response;


        console.log(htmlRequest.response)

        let imageTag = document.getElementById("poster")
        imageTag.src = htmlRequest.response.Poster

        let rateTag = document.getElementById("rate")
        rateTag.innerHTML = htmlRequest.response.imdbRating

        let detailsContainer = document.getElementById("movie-details"); // Assuming you have a div with id="movie-details"
        detailsContainer.innerHTML = "";

        function createDetailElement(label, value) {
            let detailElement = document.createElement("p");
            detailElement.innerHTML = `<strong>${label}:</strong> ${value}`;
            detailsContainer.appendChild(detailElement);
        }

        createDetailElement("Title", movieData.Title);
        createDetailElement("Year", movieData.Year);
        createDetailElement("Rated", movieData.Rated);
        createDetailElement("Runtime", movieData.Runtime);
        createDetailElement("Actors", movieData.Actors);
        createDetailElement("Awards", movieData.Awards);
        createDetailElement("Box Office", movieData.BoxOffice);
        createDetailElement("Country", movieData.Country);
        createDetailElement("Director", movieData.Director);
        createDetailElement("Genre", movieData.Genre);
        createDetailElement("Language", movieData.Language);
        createDetailElement("Metascore", movieData.Metascore);
        createDetailElement("Plot", movieData.Plot);
        createDetailElement("Production", movieData.Production);
        createDetailElement("Released", movieData.Released);
        createDetailElement("Website", movieData.Website);
        createDetailElement("Writer", movieData.Writer);
        createDetailElement("imdbID", movieData.imdbID);
        createDetailElement("imdbVotes", movieData.imdbVotes);

    }
}
