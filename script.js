document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário ao servidor

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("nome").value.trim(); // Campo Nome
    const email = document.getElementById("email").value.trim(); // Campo E-mail
    const mensagem = document.getElementById("msg").value.trim(); // Campo Mensagem
    const erroMensagem = document.getElementById("erroMensagem"); // Exibição de erros

    // Limpa mensagens de erro anteriores
    erroMensagem.textContent = "";

    // Validação do campo Nome
    if (!nome) {
        erroMensagem.textContent = "Por favor, preencha o campo Nome.";
        return;
    }

    // Validação do campo E-mail usando expressão regular
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erroMensagem.textContent = "Por favor, insira um e-mail válido.";
        return;
    }

    // Validação do campo Mensagem
    if (!mensagem) {
        erroMensagem.textContent = "Por favor, preencha o campo Mensagem.";
        return;
    }

    // Mensagem de sucesso e recarregamento da página
    alert("Formulário enviado com sucesso!"); // Confirmação de envio
    location.reload(); // Recarrega a página após o envio
});

