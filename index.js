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

        console.log(htmlRequest.response)

        let imageTag = document.getElementById("poster")
        imageTag.src = htmlRequest.response.Poster

        let rateTag = document.getElementById("rate")
        rateTag.innerHTML = htmlRequest.response.imdbRating
    }
}
