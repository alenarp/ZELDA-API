$(document).ready(function(){

    const $gamesList = $("#resultCont");
    const $loading = $("#loading");

//Parámetro que se envían a la API por URL

const params = new URLSearchParams();
params.append("limit", 9);

fetch("https://zelda.fanapis.com/api/games" + "?" + params)
        .then(function(response){
            return response.json();
            
        })

        .then(function(result) {
            let gamesDataList = result.data;
           
            console.log(gamesDataList);
            
            gamesDataList.forEach(function(game){

                let listItem = `
                    <li>
                        <a href="game.html?id=${game.id}">${game.name}</a>
                        
                        </li>       
                `;

                $gamesList.append(listItem);
            });
        })

        .catch(function(err) {
            console.log("Solicitud fallida" + err);
            
        })

        .finally(function(){
            $loading.hide()
        });

});