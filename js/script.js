const pokemonSelect = document.getElementById('pokemon-select')
const button = document.getElementById('get-pokemon')
const contenedor = document.querySelector(".container");
const pokemonInfo = document.createElement("div");
pokemonInfo.classList.add("pokemonInfo");
contenedor.appendChild(pokemonInfo);

button.addEventListener ("click", () => {
    const pokemonSelectValue = document.getElementById('pokemon-select').value

    function PokemonResult (pokemon){
        fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon)
        .then((response)=>{
            if (!response.ok){
                throw new Error ("La solicitud no fue exitosa");
            }
            return response.json();
        })
        .then((data) =>{
            
                
                
            pokemonInfo.innerHTML = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h3>Nombre:</h3> <p>${data.name}</p>
            <h3>Tipo:</h3> <p>${data.types[0].type.name}</p>
            <h3>Altura:</h3> <p>${data.height}</p>
            <h3>Peso:</h3> <p> ${data.weight}</p>
        `;
    })
        .catch((error)=>{
            pokemonInfo.innerText="Error: " + error
        })
          
    }
    PokemonResult(pokemonSelectValue);
})
