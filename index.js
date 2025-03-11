/*
console.log("Hello world")
console.log("SKYREX")

let age = 25;
var temperature = 38.5;
console.log(age)

let name = "Bhagya";
console.log(name)
let isTrue = false;
console.log(isTrue)
let vehicle
//calculating nam
let cal = 13 % 3
console.log(cal)

let num1 = 5
let num2 = 10
let sum = num1+ num2
console.log(sum)

let age1 = 20
let isAdult = age1>18
console.log(isAdult)
if(isAdult){
    console.log("You can access")
} else {
    console.log ("You can't access")
}

for(
    let i=0; i<11; i++
) {
    console.log(i)
}

let namelist = ["john", "jane", "jack", "jimin", "james"]
let sciencemarks =[90,80,70,60,50]
let mathmarks =[100,90,80,70,60]
let Itmarks =[80,70,60,50,40]

let student1 ={
    sname : "john",
    science : 90,
    mths :100,
    it :80
}

let student2 ={
    sname : "jane",
    science : 80,
    mths :90,
    it :70
}

let student3 ={
    sname : "jack",
    science : 70,
    mths :80,
    it :60,
    sAge : 14,
    mom : {
        sname : "jane",
        job : "doctor"
    }
}

console.log(student1["sname"])
console.log(student1.science)

console.log(student3.mom.sname)
console.log(student3.mom.job)

function greet(names){
    console.log("Good Morning "+ names)
}

greet("Bhagya")
greet("Piyumali")
greet("Senevirathna")

function sum1(number1, number2){
    let num = number1+number2
    return num 
}

let v = sum1(10,20)
console.log(v)
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