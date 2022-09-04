const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const animeid = urlParams.get('anid')

fetch(`https://gogoanime.herokuapp.com/anime-details/${animeid}`)
  .then((response) => response.json())
  .then(aniiem);
  function aniiem(anime) {
       document.getElementById("content").innerHTML = `
    

       <div class="card m-5" style="max-width: 70rem;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${anime.animeImg}" class="img-fluid rounded-start" style="width:1000px;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title">${anime.animeTitle}</h4>
                    <p class="fw-bold">Type:<span class="fw-normal"> ${anime.type}</span></p>

                    <p class="card-text fw-bold">Summary: <span class="fw-normal"> ${anime.synopsis}</span></p>
                    <p class="card-text fw-bold">Genre: <span class="fw-normal"> ${anime.genres}</span></p>
                    <p class="card-text fw-bold">Released: <span class="fw-normal"> ${anime.releasedDate}</span></p>
                    <p class="card-text fw-bold">Status: <span class="fw-normal"> ${anime.status}</span></p>
                    <p class="card-text fw-bold">Other name: <span class="fw-normal"> ${anime.otherNames}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <nav class="bg-light me-3">
              <div class="fluid">
                <h1 class="navbar-text ps-3">
                    Stream - Links
                </h1>
              </div>
            </nav>
            <div class="container mt-5" id="container">
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
`

document.getElementById("container").innerHTML = `
     ${anime.episodesList.map(function(ep) {
         return ` 
            <button class="button-30 m-2 w-10" role="button"><a href="stream.html?epid=${ep.episodeId}&anid=${animeid}">${ep.episodeNum}</a></button>
          `
     }).join('')}
`
    }

