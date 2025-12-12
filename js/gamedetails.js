$(document).ready(function(){
//recuperamos el ID del juego de la URL
const urlParams = new URLSearchParams(window.location.search);
const gameID = urlParams.get("id");
const $gameDetailsCont = $("#gameDetails");
const $loading = $("#loading");

fetch("https://zelda.fanapis.com/api/games/" + gameID)
    .then(function (response){
        return response.json();
    })
    .then(function (result){
        console.log(result);

        let gameData = result.data;
        let gameDetailsHTML = `
            <h2>${gameData.name}</h2>
            <img src="img/${gameData.id}.jpg">
            <p>${gameData.description}</p>
            <p>Release date: ${gameData.released_date}</p>
            <p>Publisher: ${gameData.publisher}</p>
        
        `;
        
         $gameDetailsCont.append(gameDetailsHTML);


    })
    .catch(function (){
        console.log("Solicitud fallida" + err);
        
        
    })
    .finally(function (){
        $loading.hide();
        
    });


    

})