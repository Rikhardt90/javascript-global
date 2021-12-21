//Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

const input$$ = document.querySelector('input');
input$$.addEventListener('input', consola);

function consola(inputFrase){
    console.log(inputFrase.target.value);
}