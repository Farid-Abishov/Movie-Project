const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorELement=document.querySelector("#director");
const urlELement=document.querySelector("#url");
const secondCardBody=document.querySelectorAll(".card-body")[1]
//UI objectini baslatma
const ui=new UI();


//Storage Objecti yaratma
const storage=new Storage();

//Download all event
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
      document.addEventListener("DOMContentLoaded",function(){
      let films=storage.getFilmsFromStorage();
      ui.loadAllFilms(films);


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
        storage.addFilmtoStorage(newFilm); //Storage'a film add elemek
        ui.addFilmToUI(newFilm);
    }
    
    ui.clearInputs(titleElement,urlELement,directorELement);
     
    e.preventDefault()
}

function deletefilm(e){
   if(e.target.id==="delete-film"){
    ui.deleteFilmFromUI(e.target);
   }
}