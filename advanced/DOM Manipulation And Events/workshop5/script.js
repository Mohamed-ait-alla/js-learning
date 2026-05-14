/*
 * Workshop: Build a Set of Football Team Cards
 */

const footballTeam = {
  team: "Morocco",
  year: 2026,
  headCoach: "Mohamed Ouahbi",
  players: [
    {
      name: "Yassine Bounou",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Mounir El Mohamadi",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Achraf Hakimi",
      position: "defender",
      isCaptain: true
    },
    {
      name: "Noussair Mazraoui",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Romain Saïss",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nayef Aguerd",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Sofyan Amrabat",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Azzedine Ounahi",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Bilal El Khannouss",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Brahim Díaz",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Hakim Ziyech",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Sofiane Boufal",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Youssef En-Nesyri",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Ayoub El Kaabi",
      position: "forward",
      isCaptain: false
    }
  ]
};

const headCoachElement = document.getElementById("head-coach");
const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const playerCardsElement = document.getElementById("player-cards");
const dropDownMenuElement = document.getElementById("players");

teamElement.innerText = footballTeam.team;
yearElement.innerText = footballTeam.year;
headCoachElement.innerText = footballTeam.headCoach;

function displayPlayerCards(players) {
  playerCardsElement.innerHTML = players.map(player => {
    return `<div class="player-card">
              <h2>${(player.isCaptain) ? "(Captain) " : ""}${player.name}</h2>
              <p>Position: ${player.position}</p>
            </div>`;
  }).join("");
}

function filterPlayers(position) {
  return (position === "all") ? footballTeam.players : footballTeam.players.filter(player => player.position === position);
}

dropDownMenuElement.addEventListener("change", (e) => {
  const filteredResults = filterPlayers(e.currentTarget.value);
  displayPlayerCards(filteredResults);
});

displayPlayerCards(footballTeam.players);