fetch("http://localhost:3000/diary")

  .then((response) => response.json())

  .then((diaryEntries) => {
    for (let i = 0; i < diaryEntries.length; i++) {
      sortDiary(diaryEntries[i]);
    }
  });

const sortDiary = (diaryEntries) => {
  div$$ = document.createElement("div");
  div$$.innerHTML = `<h3>${diaryEntries.date}</h3>
                    <h3>${diaryEntries.id}</h3>
                    <h2>${diaryEntries.title}</h2>
                    <h3>${diaryEntries.description}</h3>`;
  document.body.appendChild(div$$);
};
