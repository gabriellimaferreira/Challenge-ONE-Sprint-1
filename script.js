
const inputTexto = document.querySelector(".entrada-texto");
const outputTexto = document.querySelector(".saida-texto");

function btnCriptografar(){
    const textoCriptografado = criptografar(inputTexto.value);
    outputTexto.value = textoCriptografado;
}

function criptografar(stringCriptografada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "obter"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringCriptografada;
}

function btnDescriptografar(){
    const textoDescriptado = descriptografar(inputTexto.value);
    outputTexto.value = textoDescriptado;
}

function descriptografar(stringDecriptrografada){
    var matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "obter"], ["u", "ufat"]];
    stringDecriptrografada = stringDecriptrografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDecriptrografada.includes(matrizCodigo[i][1])){
            stringDecriptrografada = stringDecriptrografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDecriptrografada;
}

function copiar() {
    const msg = document.querySelector(".saida-texto");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
}