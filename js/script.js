
// PRENDO ELEMENTI DA HTML 
const listamail = document.getElementById("lista-mail") 
// PRENDO IL BOTTONE PER GENERARE LE MAIL
const btnMail = document.getElementById("btn-mail");
const titoloLista = document.getElementById("titolo");






// GENERO UNA MAIL CON LIBRERIA AXIOS 
// CREO CICLO FOR 
// CREO VAR GENERICA
// UNISCO E FACCIO RIPETERE PER INDEX 10
// STAMPO IN PAGINA SFRUTTANDO IL CICLO FOR E INNEHTML
const casualMail = [];
btnMail.addEventListener('click', function() {
for (let i = 0; i < 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
        listamail.innerHTML +=`<li class="list-group-item">${resp.data.response}</li>`
        btnMail.disabled = true;
        titoloLista.innerHTML = "Lista delle mail generata casualmente";
    });
};
  
  });


