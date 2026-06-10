
// Simulador
let sustentabilidade = 0;

function atualizarResultado() {
    document.getElementById("resultado").innerHTML = `<p>Sustentabilidade: ${sustentabilidade}%</p>`;
}

function adicionarSolar() {
    sustentabilidade += 25;
    atualizarResultado();
}

function adicionarIrrigacao() {
    sustentabilidade += 20;
    atualizarResultado();
}

function plantarArvores() {
    sustentabilidade += 30;
    atualizarResultado();
}

// Quiz
function responderQuiz(acertou) {
    const resposta = document.getElementById("resposta-quiz");
    if(acertou){
        resposta.textContent = "✅ Correto! A irrigação inteligente economiza água.";
    } else {
        resposta.textContent = "❌ Errado! Essa tecnologia não economiza água diretamente.";
    }
}
