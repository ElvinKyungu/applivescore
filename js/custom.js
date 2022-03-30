let img1 = document.getElementsByClassName('img1');
let img2 = document.getElementsByClassName('img2');
let divcontent = document.getElementsByClassName('lsc_match_stats_row');
let contentequipe = document.getElementById('listmatchs');
let dateplayed = document.getElementById('date');

var date = new Date();
dateplayed.innerText = 'Le '+date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
console.log(date);

let key = "83bdc0d469f5f2d5bfd054b7f2433bd98c351f956ebaf66f9ff946e1027970d3";
let text = '';
fetch(`https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${key}`)

.then(response => response.json())
    .then((matchs) => {
        console.log(matchs);
        console.log(matchs.result);
        if (matchs.result) {
            // let matchs = matchs.result;
            matchs.result.forEach(function(match) {
                console.log(contentequipe)
                
                let home_team = match.event_home_team;
                let away_team =match.event_away_team;
                let final_score = match.event_final_result
                let logoChampionnat = match.league_logo;
                text += `
                <h5 class="text-center h5">
                    <span class="" id="equipe_content">${home_team} vs ${away_team}</span>
                </h5>
                <div class="row lsc_match_stats_row">
                    <div class="col-3 justify-content-center align-self-center">
                        <img src="${logoChampionnat}" class="lsc_team_icon" />
                    </div>
                    <div class="col-6 justify-content-center align-self-center">
                        <span class="lsc_match_stat_desc">
                            <i class="fa"></i>
                            <span class="h4">${final_score}</span>
                        </span>
                    </div>
                    <div class="col-3 justify-content-center align-self-center">
                        <img src="${logoChampionnat}" class="lsc_team_icon" />
                    </div>
                </div>
                `;
            });
            contentequipe.innerHTML = text
        } else {
            divcontent.innerHTML = "<h4>Y a pas de matchs broh !</h4>"
        }

    }).catch((error) => {
        console.error('Error:', error)
    });

setInterval(function() {
    location.reload();
}, 5000);