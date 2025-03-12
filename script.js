document.getElementById("search-button").addEventListener("click", function () {
    let searchValue = document.getElementById("search-input").value.trim().toLowerCase();
    
    if (!searchValue) {
        alert("Please enter a Pokémon name or ID.");
        return;
    }

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchValue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon not found");
            }
            return response.json();
        })
        .then(data => {
            displayPokemonInfo(data);
        })
        .catch(error => {
            alert("Pokémon not found");
            clearPokemonInfo();
        });
});

function displayPokemonInfo(data) {
    document.getElementById("pokemon-name").innerText = data.name.toUpperCase();
    document.getElementById("pokemon-id").innerText = `#${data.id}`;
    document.getElementById("weight").innerText = `Weight: ${data.weight}`;
    document.getElementById("height").innerText = `Height: ${data.height}`;
    
    document.getElementById("hp").innerText = data.stats[0].base_stat;
    document.getElementById("attack").innerText = data.stats[1].base_stat;
    document.getElementById("defense").innerText = data.stats[2].base_stat;
    document.getElementById("special-attack").innerText = data.stats[3].base_stat;
    document.getElementById("special-defense").innerText = data.stats[4].base_stat;
    document.getElementById("speed").innerText = data.stats[5].base_stat;

    document.getElementById("sprite").src = data.sprites.front_default;
    document.getElementById("sprite").style.visibility = "visible";

    let typesContainer = document.getElementById("types");
    typesContainer.innerHTML = "";
    data.types.forEach(type => {
        let typeElement = document.createElement("span");
        typeElement.innerText = type.type.name.toUpperCase();
        typesContainer.appendChild(typeElement);
    });
}

function clearPokemonInfo() {
    document.getElementById("pokemon-name").innerText = "";
    document.getElementById("pokemon-id").innerText = "";
    document.getElementById("weight").innerText = "";
    document.getElementById("height").innerText = "";
    document.getElementById("hp").innerText = "";
    document.getElementById("attack").innerText = "";
    document.getElementById("defense").innerText = "";
    document.getElementById("special-attack").innerText = "";
    document.getElementById("special-defense").innerText = "";
    document.getElementById("speed").innerText = "";
    document.getElementById("sprite").src = "";
    document.getElementById("sprite").style.visibility = "hidden";
    document.getElementById("types").innerHTML = "";
}

document.getElementById("clear-button").addEventListener("click", function () {
    document.getElementById("search-input").value = "";
    clearPokemonInfo();
});