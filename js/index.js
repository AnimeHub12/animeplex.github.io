let name = "recent-release";
button1();
function button1(fname = "recent-release", y) {
  if (y === undefined) {
      name = fname;
  }
      fetch(`https://gogoanime.herokuapp.com/${name}`)
      .then((response) => response.json())
      .then(aniiem);
      function aniiem(data) {
           document.getElementById("content").innerHTML = `
         ${data.map(aniem).join('')}
    `
        }

    function aniem(anime) {
      return ` 
          <div class="col">
            <div class="card h-100">
              <img src="${anime.animeImg}" class="card-img-top" >
              <div class="card-body">
                <h5 class="card-title">${anime.animeTitle}</h5>
                <p class="card-text"><strong>Anime name: </strong>${anime.animeId}</p>
                <p class="card-text"><strong>Type: </strong>${anime.subOrDub}</p>
              </div>
               <div class="card-footer">
                <a href="info.html?anid=${anime.animeId}" class="btn btn-primary " tabindex="-1" role="button" >More info</a>
                </div>
            </div>
          </div>

     `

    }

  }

