const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const epiid = urlParams.get('epid')
const anid = urlParams.get('anid')



fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/${epiid}`)
  .then((response) => response.json())
  .then(result);
    var animename = epiid.replaceAll('-', ' ').toUpperCase();

  function result(stream) {
    var url_string = `${stream.Referer}`; 
    var url = new URL(url_string);
    var dwid = url.searchParams.get("id");

    fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/${epiid}`)
    .then((response) => response.json())
    .then(aniiem);

function aniiem(anime) {
    
       document.getElementById("content").innerHTML = `
    
    <div class="container m-5">
                <h3 class="bg-light"><img src="./img/icon.png" alt="">${animename}</h3>
                <p class="bg-light"><img src="./img/icon.png"  alt=""><strong>Type: </strong>Dub</p>
                <button class="button-30 m-2" role="button"><a class="btn" href="https://goload.io/download?id=${dwid}" role="button">Download</a></button>
            </div>
            <div class="stream">
                <h3 class="bg-light">Stream </h3>
                <div class="card">
                <iframe class="responsive-iframe" src="${anime.headers.Referer}" ></iframe>
            </div>
            </div>
            <nav class="bg-light me-3">
              <div class="fluid">
                <h1 class="navbar-text ps-3">
                    Stream - Links
                </h1>
              </div>
            </nav>
            <div class="container  mt-5" id="container">
            </div>
            <footer>
                <div class="footer-a">
              <div class="fluid">
                <h1 class="footer-text">
                    <p class="text-footer">&copy; Copyright 2022 Animeplex</p>
                </h1>
              </div>
            </div>
            </footer>
        </div>  
`
fetch(`https://gogoanime.herokuapp.com/anime-details/${anid}`)
  .then((response) => response.json())
  .then(result);
  function result(episode) {
    
  document.getElementById("container").innerHTML = `
     ${episode.episodesList.map(function(ep) {
         return ` 
            <button class="button-30 m-2 w-10" role="button"><a href="index3.html?epid=${ep.episodeId}&anid=${anid}">${ep.episodeNum}</a></button>
          `
     }).join('')}
`
}
    }

  }




