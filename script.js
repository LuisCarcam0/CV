let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distancia = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia >= 300) {
        const barras = document.querySelectorAll(".progreso");
        barras.forEach(barra => {
            barra.style.width = barra.dataset.skill;
        });
    }
}

window.addEventListener("scroll", efectoHabilidades);
