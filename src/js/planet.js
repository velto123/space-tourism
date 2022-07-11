const planetsLinks = document.querySelectorAll(".planets__link")

const getPlanetInfo = async (name) => {
    const response = await fetch("../assets/data.json");
    const data = await response.json();

    const { destinations } = data

    const planetInfo = destinations.find((planet) => planet.name === name)

    return planetInfo
}

const showPlanetInfo = async (e) => {
    e.preventDefault();
    const planetInfo = await getPlanetInfo(e.target.textContent)
    const { description: planetDesc, distance: planetDistance, travel: planetTravel, name: planetName } = planetInfo;

    const planetPictureEl = document.getElementById("picture")
    const source = document.createElement("source")
    source.srcset = planetInfo.images.webp
    const img = document.createElement("img")
    img.className = "planet-picture"
    img.src = planetInfo.images.png
    planetPictureEl.textContent = ""
    planetPictureEl.append(source, img)

    const planetNameEl = document.querySelector(".planet-name")
    planetNameEl.textContent = planetName

    const planetDescEl = document.querySelector(".planet-desc")
    planetDescEl.textContent = planetDesc

    const [planetDistanceEl, planetTravelEl] = document.querySelectorAll(".planet-distance, .planet-travel")
    planetDistanceEl.textContent = planetDistance
    planetTravelEl.textContent = planetTravel
}

planetsLinks.forEach(link => link.addEventListener("click", showPlanetInfo))


