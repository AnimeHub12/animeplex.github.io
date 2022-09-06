function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");
    
   
fetch(`https://gogoanime.herokuapp.com/search?keyw=${query}`)
  .then((response) => response.json())
  .then(aniiem);
  function aniiem(data) {
       document.getElementById("demo").innerHTML = `
     ${data.map(aniem).join('')}
    `}

}












function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}


window.addEventListener("load", pageLoaded);

  
    






















 <form id="search_form" class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="Placeholder" name="search" id="search" type="text" class="validate">
                            <label for="search">Search</label>
                        </div>
                    </div>
                </form>