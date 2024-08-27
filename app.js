/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const textoDelUsuario = document.querySelector(".textAreaUsuario");
const textoDelSistema = document.querySelector(".respuestaPagina");
const botonCopiar = document.querySelector(".copiar");

let llaveDeEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function encriptar(strOrigen){
    let strEncriptado = ""

    //verifica que solo sean minusculas, sin caracteres especiales
    if (!/^[a-z\s]+$/.test(strOrigen)) {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y espacios.");
        return null;
    }
    //convierte al texto deseado
    strEncriptado=strOrigen.toLowerCase(); //fail safe, incluso cuando ya fue revisado all minus
    for(let i1 = 0; i1<llaveDeEncriptacion.length;i1++){
        if(strEncriptado.includes(llaveDeEncriptacion[i1][0])){
            strEncriptado = strEncriptado.replaceAll(llaveDeEncriptacion[i1][0],llaveDeEncriptacion[i1][1]);
        }
    }
    return strEncriptado;
}
function actionClickEncriptar(){
    let strTextoUsuario = encriptar(textoDelUsuario.value);
    if (strTextoUsuario === null){
        textoDelSistema.value = "";
        return;
    }
    textoDelSistema.value = strTextoUsuario;
    textoDelUsuario.value = "";
    textoDelSistema.style.backgroundImage = "none";
}
function desencriptar(strOrigen){
    let strDesencriptado = ""

    //verifica que solo sean minusculas, sin caracteres especiales
    if (!/^[a-z\s]+$/.test(strOrigen)) {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y espacios.");
        return null;
    }
    //convierte al texto deseado
    strDesencriptado=strOrigen.toLowerCase(); //fail safe, incluso cuando ya fue revisado all minus
    for(let i1 = 0; i1<llaveDeEncriptacion.length;i1++){
        if(strDesencriptado.includes(llaveDeEncriptacion[i1][1])){
            strDesencriptado = strDesencriptado.replaceAll(llaveDeEncriptacion[i1][1],llaveDeEncriptacion[i1][0]);
        }
    }
    return strDesencriptado;
}
function actionClickDesencriptar(){
    let strTextoUsuario = desencriptar(textoDelUsuario.value);
    if (strTextoUsuario === null){
        textoDelSistema.value = "";
        return;
    }
    textoDelSistema.value = strTextoUsuario;
    textoDelUsuario.value = "";
    textoDelSistema.style.backgroundImage = "none";
}
function copiarAlPortapapeles() {
    textoDelSistema.select();
    navigator.clipboard.writeText(textoDelSistema.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}
