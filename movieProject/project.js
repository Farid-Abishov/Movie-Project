const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorELement=document.querySelector("#director");
const urlELement=document.querySelector("#url");

//UI objectini baslatma
const ui=new UI();


//Storage Objecti yaratma
const storage=new Storage();

//Download all event
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
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
