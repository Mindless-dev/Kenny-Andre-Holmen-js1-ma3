const gamesContainer = document.querySelector(".games");
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames() {
  try {
    const response = await fetch(url);
    const arrayOfObjects = await response.json();
    const games = arrayOfObjects.results;
    gamesContainer.innerHTML = "";

    for (let i = 0; i <= games.length; i++) {
      if (i === 8) {
        break;
      }
      let gameName = games[i].name;
      let gameRating = games[i].rating;
      let amountOfTags = games[i].tags.length;
      gamesContainer.innerHTML += `<div class=game><p>Title: ${gameName}</p>
    <p>Rating: ${gameRating}</p> <p>Tags: ${amountOfTags}</p>`;
    }
  } catch (error) {
    gamesContainer.innerHTML = "<p>An Error Occured<p>";
  }
}

getGames();
