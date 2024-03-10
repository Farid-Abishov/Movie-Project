const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorELement=document.querySelector("#director");
const urlELement=document.querySelector("#url");
const secondCardBody=document.querySelectorAll(".card-body")[1]

//Download all event
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
      document.addEventListener("DOMContentLoaded",function(){
      let films=Storage.getFilmsFromStorage();
      UI.loadAllFilms(films);


    });
    secondCardBody.addEventListener("click",deletefilm);
}

function addFilm(e){
   const title=titleElement.value;
   const director=directorELement.value;
   const url=urlELement.value;
    
    if(title==="" || director===" " ||url===" " ){
        //hata
    }
    else{
        const newFilm=new Film(title,director,url); //yeni film yaratmaq
        Storage.addFilmtoStorage(newFilm); //Storage'a film add elemek
        UI.addFilmToUI(newFilm);
    }
    
    UI.clearInputs(titleElement,urlELement,directorELement);

    e.preventDefault()
}

function deletefilm(e){
   if(e.target.id==="delete-film"){
    UI.deleteFilmFromUI(e.target);
   }
}