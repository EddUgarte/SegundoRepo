var munieco = document.querySelector(".contenedor-munieco");
var contenedor = document.querySelector(".contenedor-parrafo");

const textArea = document.querySelector(".caja-texto");
const mensaje = document.querySelector(".texto-resultado");


function btnEncriptar() {
    ocultarAdelante();
    const textoEncriptado = encriptar(textArea.value)
    mensaje.textContent = textoEncriptado;
}

function encriptar(cadenaEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (cadenaEncriptar.includes(matrizCodigo[i][0])) {
            cadenaEncriptar = cadenaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }        
    }
    return cadenaEncriptar;
}

function btnDesencriptar() {
    ocultarAdelante();
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.textContent = textoDesencriptado;
}

function desencriptar(cadenaDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (cadenaDesencriptar.includes(matrizCodigo[i][1])) {
            cadenaDesencriptar = cadenaDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }        
    }
    return cadenaDesencriptar;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido);
    })