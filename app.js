let claro = true;

function asignarTextoElemento(eLemento, texto){
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
}

asignarTextoElemento('h1','Actualmente estas en modo claro');

function cambiarTema(){
    if (claro){
        document.documentElement.style.setProperty('--color-fondo', '#121212');
        document.documentElement.style.setProperty('--color-letra', '#f0f0f0');
        document.documentElement.style.setProperty('--color-hover', '#808080');
        claro = false;
        asignarTextoElemento('h1','Actualmente estas en modo oscuro');
    }
    else{
        document.documentElement.style.setProperty('--color-fondo', '#f0f0f0');
        document.documentElement.style.setProperty('--color-letra', '#121212');
        document.documentElement.style.setProperty('--color-hover', '#ff0080');
        claro = true
        asignarTextoElemento('h1','Actualmente estas en modo claro');
    }
}
