
function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");
    
   
fetch(`https://gogoanime.herokuapp.com/search?keyw=${query}`)
  .then((response) => response.json())
  .then(searchi);
  function searchi(data) {
       document.getElementById("content").innerHTML = `
     ${data.map(search).join('')}
    `}

}

 function search(sear) {
      return ` 
          <div class="col">
            <div class="card h-100">
              <img src="${sear.animeImg}" class="card-img-top" alt="..." >
              <div class="card-body">
                <h5 class="card-title">${sear.animeTitle}</h5>
                <p class="card-text">${sear.animeId}</p>
                <p class="card-text">${sear.releasedDate}</p>
              </div>
              <div class="card-footer">
                <a href="info.html?anid=${sear.animeId}" class="btn btn-primary " tabindex="-1" role="button" >More info</a>
              </div>
            </div>
          </div>

     `

    }

function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}
window.addEventListener("load", pageLoaded);




