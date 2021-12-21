const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const nuevaUl$$ = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    
  const nuevaLi$$ = document.createElement("li");

  nuevaLi$$.innerHTML = apps[i];

  nuevaUl$$.appendChild(nuevaLi$$);
}

document.body.appendChild(nuevaUl$$);
