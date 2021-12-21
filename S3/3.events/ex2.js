//Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

const input$$ = document.querySelector('input');
input$$.addEventListener('focus', consola);

function consola(){
    console.log("presionado!")
}