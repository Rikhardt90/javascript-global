const planets$$ = document.querySelector('[data-function="planets"]');
const characters$$ = document.querySelector('[data-function="characters"]');

const baseURL = "http://localhost:3000/";

const createPlanetGallery = async () => {
  const planetsAPI = await fetch(baseURL + "planets");
  const planetsRES = await planetsAPI.json();

  for (const planet of planetsRES) {
    const planetDiv$$ = document.createElement("div");

    planetDiv$$.innerHTML = `
    <h2>${planet.name}</h2>
    <img src="${planet.image}" alt="${planet.name}" max-width="300px" height="300px" />`;

    planetDiv$$.addEventListener("click", () => getCharactersByPlanet(planet.id));

    planets$$.appendChild(planetDiv$$);
  }
};

const getCharactersByPlanet = async (idPlanet) => {
characters$$.innerHTML = "";
  const charactersAPI = await fetch(
    baseURL + "characters?idPlanet=" + idPlanet
  );
  const charactersRES = await charactersAPI.json();
  for (const character of charactersRES) {
    const characterDiv$$ = document.createElement("div");
    characterDiv$$.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.avatar}" alt="${character.name}" max-width="300px" height="300px" />
    <p>${character.description}</p>
    `;
    characters$$.appendChild(characterDiv$$);
  }
};

createPlanetGallery();
