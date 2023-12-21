const texto = document.createElement('h1');
texto.id = 'titulo';
texto.innerText = 'Buscador de Constantes em Repositorio GIThub';
document.body.appendChild(texto);

const dados = document.createElement('h2');
dados.id = 'dados';
dados.innerText = 'Insira dos Dados aqui';
document.body.appendChild(dados);


// Cria um novo botão para copiar o texto
const botaoCopiar = document.createElement('button');
botaoCopiar.id = 'botaoCopiar';
botaoCopiar.innerText = 'Copiar texto';
document.body.appendChild(botaoCopiar);

$(document).ready(function(){
    $('#botao').click(function(){
        // Obtém os caracteres dos campos de formulário
        const caractereInicial = $('#caractereInicial').val();
        const caractereFinal = $('#caractereFinal').val();
        $.ajax({
            url: "https://raw.githubusercontent.com/harahujo-trybe/40pontos/criando_pixel_board/script.js",
            dataType: "text",
            success: function(data) {
                // Encontra a primeira ocorrência do caractere inicial
                const posicao1 = data.indexOf(caractereInicial);
                // Encontra a primeira ocorrência do caractere final após o caractere inicial
                const posicao2 = data.indexOf(caractereFinal, posicao1 );
                if (posicao1 != -1 && posicao2 != -1) {
                    // Extrai os caracteres entre as duas ocorrências
                    const textoEntre = data.substring(posicao1 + 0, posicao2);
                    const mensagem = 'Os caracteres entre ' + caractereInicial + ' e ' + caractereFinal + ' são: ' + textoEntre + '' + caractereFinal;
                    alert(mensagem);

                    // Armazena a mensagem para ser copiada posteriormente
                    botaoCopiar.dataset.clipboardText = mensagem;
                } else {
                    alert('Não foi possível encontrar os caracteres especificados na resposta do Ajax');
                }
            }
        });
    });

    // Adiciona um evento de clique ao botão de cópia
    $('#botaoCopiar').click(function() {
        // Copia o texto para a área de transferência
        navigator.clipboard.writeText(this.dataset.clipboardText)
            .then(() => alert('Texto copiado para a área de transferência!'))
            .catch(err => alert('Falha ao copiar texto: ', err));
    });
});

const titulo2 = document.createElement('h2');
titulo2.id = 'titulo2';
titulo2.innerText = 'Aqui você pode buscar suas constantes criadas em seu reṕostório';
document.body.appendChild(titulo2);

const titulo3 = document.createElement('h3');
titulo3.id = 'titulo3';
titulo3.innerText = 'Como você deve buscar: ';
document.body.appendChild(titulo3);