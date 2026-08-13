
let menu_hamburguer = document.getElementById("menu-hamburguer");
let overlay = document.getElementById("overlay");
let botao_fechar = document.getElementById("fechar-menu")

menu_hamburguer.addEventListener("click", MGtoggleMenu);
overlay.addEventListener("click", MGtoggleMenu);
botao_fechar.addEventListener("click", MGtoggleMenu);

function MGtoggleMenu() {
  const menu = document.getElementById('menu-lateral');
  const overlay = document.getElementById('overlay');

  menu.classList.toggle('ativo'); // Ativa a classe "ativo", configurada no css
  overlay.classList.toggle('ativo'); // Também ativa o overlay
}

// Botão voltar ao topo no rodapé
let voltar_topo = document.getElementById("rodape-voltaraotopo");
voltar_topo.addEventListener("click", voltartopo);

function voltartopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* Script pra receber Valores e Dar Alert (Página Contato) */

// Captura o botão do formulário pelo seu id "ER-btn"
let ERbotao = document.getElementById("ER-btn");     

// Adiciona um evento de clique ao botão; quando clicado, chama a função 'ERalerta' (somente quando na página correta)
if (ERbotao) {
    ERbotao.addEventListener("click", ERalerta);

    let ERnome = document.getElementById("ER-nome");
    let ERemail = document.getElementById("ER-email");
    let ERsugestao = document.getElementById("ER-textarea");

    function ERalerta() {
        if (ERnome.value && ERemail.value && ERsugestao.value) {
            alert("Você enviou com sucesso!");
            console.log("nome:", ERnome.value);
            console.log("email:", ERemail.value);
            console.log("sugestão:", ERsugestao.value);

            ERnome.value = "";
            ERemail.value = "";
            ERsugestao.value = "";
        } else {
            alert("Preencha todos os campos!");
        }
    }
}        

// Captura os campos de entrada do formulário pelo id correspondente
let ERnome = document.getElementById("ER-nome");     // Campo de nome
let ERemail = document.getElementById("ER-email");   // Campo de e-mail
let ERsugestao = document.getElementById("ER-textarea");  // Campo de sugestão

// Função que será executada ao clicar no botão
function ERalerta() {                            

  // Verifica se todos os campos estão preenchidos
  if (ERnome.value && ERemail.value && ERsugestao.value) {   

    // Exibe alerta de sucesso para o usuário
    alert("Você enviou com sucesso!");         

    // Imprime os valores digitados no console do navegador (para teste ou registro)
    console.log("nome:", ERnome.value);          
    console.log("email:", ERemail.value);        
    console.log("sugestão:", ERsugestao.value);  

    // Limpa os campos após o envio, preparando o formulário para nova entrada
    ERnome.value = "";                           
    ERemail.value = "";                          
    ERsugestao.value = "";                       

  } else {                                    
    // Caso algum campo esteja vazio, exibe alerta pedindo preenchimento completo
    alert("Preencha todos os campos!");       
  }                                           
}

// Botão de exibir preço na página Produtos
let blocos = document.querySelectorAll(".NF-bloco");

blocos.forEach((bloco) => {
    let botao = bloco.querySelector("button");
    let valor = bloco.querySelector(".NF-valor");

    botao.addEventListener("click", () => {
        document.querySelectorAll(".NF-valor").forEach((v) => (v.style.display = "none"));

        valor.style.display = "block";
    });
});

document.querySelector(".GBform").addEventListener("submit", function(event) {
    event.preventDefault();

    // Verifica Termos e Condições
    const termos = document.getElementById("aceitoTermos");
    if (!termos.checked) {
        alert("Você precisa aceitar os Termos e Condições para continuar.");
        return;
    }

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const descricao = document.getElementById("descricao").value;

    let mensagem =
        "Você confirma os dados inseridos?\n\n" +
        "Nome: " + nome + "\n" +
        "E-mail: " + email + "\n" +
        "Produto: " + produto + "\n" +
        "Quantidade: " + quantidade + "\n" +
        "Descrição: " + descricao + "\n\n" +
        "Confirmar?";

    if (confirm(mensagem)) {
        this.submit();
    }
});