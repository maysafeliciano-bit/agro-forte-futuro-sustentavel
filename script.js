function calcularEconomia(){

    let racao =
        parseFloat(
            document.getElementById("racao").value
        );

    if(isNaN(racao) || racao <= 0){

        document.getElementById("resultado")
        .innerHTML =
        "Digite um valor válido.";

        return;
    }

    let economia = racao * 0.15;

    document.getElementById("resultado")
    .innerHTML =
    "Economia estimada: " +
    economia.toFixed(2) +
    " kg de ração por dia.";
}

function mostrarMensagem(){

    alert(
        "A tecnologia pode tornar o campo mais produtivo e sustentável!"
    );

}
