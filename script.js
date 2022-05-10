const botaoT = document.getElementById("trocacor");
const pagina = document.querySelectorAll(".pagina");

function trocaTema(){
    if(botaoT.checked){
        pagina[0].classList.add("dark")
    }else{
        pagina[0].classList.remove("dark")
    }
}
