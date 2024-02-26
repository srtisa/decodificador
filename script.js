function codificarTexto(){
    let textoElemento = document.querySelector("#conteudo__ladoDireito__texto");
    let textoOriginal = textoElemento.value;
    let textoCodificado = "";
    for (let i = 0; i < textoOriginal.length; i++){
        let codigoAscii = textoOriginal.charCodeAt(i);
        let novoCodigoAscii = codigoAscii + 2;
        let caracterCodificado = String.fromCharCode(novoCodigoAscii);
        textoCodificado += caracterCodificado; 
    }
    const divResultado = document.querySelector("#conteudo__ladoEsquerdo__resultado");
    divResultado.textContent = textoCodificado;
    console.log(textoCodificado);
    let textoBotao = document.querySelector("#botao__copiar");
    textoBotao.textContent = "copiar"



}


function descodificarTexto(){
    let textoElemento = document.querySelector("#conteudo__ladoDireito__texto");
    let textoOriginal = textoElemento.value;
    let textoDescodificado = "";
    for (let i = 0; i < textoOriginal.length; i++){
        let codigoAscii = textoOriginal.charCodeAt(i);
        let novoCodigoAscii = codigoAscii - 2;
        let caracterCodificado = String.fromCharCode(novoCodigoAscii);
        textoDescodificado += caracterCodificado; 
    }
    const divResultado = document.querySelector("#conteudo__ladoEsquerdo__resultado");
    divResultado.textContent = textoDescodificado;
    console.log(textoDescodificado);
}


function copiarTexto(){
    let div = document.querySelector("#conteudo__ladoEsquerdo__resultado");
    let texto = div.textContent || div.innerText;
    navigator.clipboard.writeText(texto);
    let textoBotao = document.querySelector("#botao__copiar");
    textoBotao.textContent = "copiado!"
    
    }
    

