const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorELement=document.querySelector("#director");
const urlELement=document.querySelector("#url");

//UI objectini baslatma
const ui=new UI();

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
        //yeni film yaratmaq
        const newFilm=new Film(title,director,url);

        ui.addFilmToUI(newFilm);
    }
    
    ui.clearInputs(titleElement,urlELement,directorELement);
     
    e.preventDefault()
}
