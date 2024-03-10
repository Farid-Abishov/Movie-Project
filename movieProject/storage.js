class Storage{
    static addFilmtoStorage(newFilm){
        let films=this.getFilmsFromStorage();
        films.push(newFilm)
        localStorage.setItem("films",JSON.stringify(films))
     }
     static getFilmsFromStorage(){
         let films;
         if(localStorage.getItem("films")===null){
            films=[];
         }
         else{
             films=JSON.parse(localStorage.getItem("films"))
         }
         return films;
     }
}

