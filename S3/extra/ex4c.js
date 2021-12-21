//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const div$$ = document.createElement("div");
const btn$$ = document.querySelector("button");
const ul$$ = document.createElement("ul");

for (const country of countries) {
  const li$$ = document.createElement("li");
  li$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`;
  ul$$.appendChild(li$$);
}

div$$.appendChild(ul$$);
div$$.appendChild(btn$$);

document.body.appendChild(div$$);
