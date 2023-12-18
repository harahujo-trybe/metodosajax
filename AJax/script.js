const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Buscador de Constantes em Repositorio GIThub'
document.body.appendChild(titulo);


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
                const posicao2 = data.indexOf(caractereFinal, posicao1 + 2);
                if (posicao1 != -1 && posicao2 != -1) {
                    // Extrai os caracteres entre as duas ocorrências
                    const textoEntre = data.substring(posicao1 + 0, posicao2);
                    alert('Os caracteres entre "' + caractereInicial + '" e "' + caractereFinal + '" são: "' + textoEntre + '"' + caractereFinal);
                } else {
                    alert('Não foi possível encontrar os caracteres especificados na resposta do Ajax');
                }
            }
        });
    });
});
