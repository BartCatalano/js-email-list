
// PRENDO ELEMENTI DA HTML 
const listamail = document.getElementById("lista-mail") 






// GENERO UNA MAIL CON LIBRERIA AXIOS 
// CREO CICLO FOR 
// CREO VAR GENERICA
// UNISCO E FACCIO RIPETERE PER INDEX 10
// STAMPO IN PAGINA SFRUTTANDO IL CICLO FOR E INNEHTML
const casualMail = [];
for (let i = 0; i < 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
        listamail.innerHTML +=`<li>${resp.data.response}</li>`
    });
};

