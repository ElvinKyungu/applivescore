let img1 = document.getElementsByClassName('img1');
let img2 = document.getElementsByClassName('img2');
let divcontent = document.getElementsByClassName('lsc_match_stats_row');
let contentequipe = document.getElementById('equipe_content');

function equipe1(logoChampionnat, nombreEquipe) {
    // img1.setAttribute("src", logoChampionnat);
    console.log(contentequipe)
    contentequipe.innerText = '<span class="nomequipe1">' + nombreEquipe +
        '</span> vs ';
    console.log(nombreEquipe);
}

function equipe2(logoChampionnat, nombreEquipe) {
    // img2.setAttribute("src", logoChampionnat);
    nomEquipe2.innerHtml = '<span class="nomequipe2">' + nombreEquipe +
        '</span>';
}
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
                console.log("count");
                console.log(contentequipe)

                text += '<span class="nomequipe1">' + match.event_home_team +
                    '</span> vs <span class="nomequipe2">' + match.event_away_team +
                    '</span><br/>'
                    // equipe1(match.league_logo, match.event_home_team);
                    // equipe2(match.league_logo, match.event_away_team);
            });
            contentequipe.innerHTML = text
        } else {
            // divcontent.style.display = "none";
            divcontent.innerHTML = "<h4>Y a pas de matchs broh !</h4>"
        }

    }).catch((error) => {
        console.error('Error:', error);
    });

// aficheEquipes(equipe1);
// aficheEquipes(equipe2);
// setInterval(function() {
//     location.reload();
// }, 5000);