fetch ('http://localhost:3000/diary')
.then ((res) => res.json())
.then ((listDiary) =>{
  console.log(listDiary)
});