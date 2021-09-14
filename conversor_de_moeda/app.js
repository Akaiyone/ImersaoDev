function Converter(){

    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5.24;
    console.log(parseFloat(valorEmReal));

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é R$ " + valorEmReal;

    elementoValorConvertido.innerHTML = valorConvertido;
}
