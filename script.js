let tops = document.getElementById("top");
let box = document.getElementById("box");
let desc = document.getElementById("desc");
let genre= document.getElementById("genre");
let release = document.getElementById("release");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let awards = document.getElementById("awards");
let Ratings = document.getElementById("ratings");
let writer = document.getElementById("writer");
let image = document.getElementById("image");


function search(){
let Moviename = document.getElementById("input").value
let movie = fetch(`http://www.omdbapi.com/?apikey=61e576a4&t=${Moviename}`)
.then((data)=>data.json())
.then((datas)=>{
    // console.log(datas)
    tops.innerText = datas.Title
    release.innerText = datas.Released;
    genre.innerText = datas.Genre;
    actors.innerText = datas.Actors;
    director.innerText= datas.Director;
    desc.innerText= datas.Plot;
    writer.innerText= datas.Writer;
    awards.innerText= datas.Awards;
    box.innerText= datas.BoxOffice;
    image.src= datas.Poster;
    Ratings.innerText= datas.imdbRating;


console.log(movie)
})
}



// title.innerText = data.Title;
// date.innerText = data.Released;
// director.innerText = data.Director;
// actors.innerText = data.Actors;
// desc.innerText = data.Plot;
// genre.innerText = data.Genre;
// awards.innerText = data.Awards;
// writer.innerText = data.Writer;
// ratings.innerText = data.imdbRating;
// title.innerText = data.Title;
// collection.innerText = data.BoxOffice;
// poster.src = data.Poster;