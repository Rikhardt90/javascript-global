// En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que 
// visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el 
// endpoint 'https://breakingbadapi.com/api/characters'.

// Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.

fetch('https://breakingbadapi.com/api/characters')

.then(response => response.json())

.then((myJson) => {

  for (let i = 0; i < myJson.length; i++) {
      charCreator(myJson[i]);
    }
    
});

const charCreator = (newValue) => {

    const div$$ = document.createElement("div");

    div$$.innerHTML = `<img src="${newValue.img}"/> <h1>${newValue.name}</h1>`;

    document.body.appendChild(div$$);

}




