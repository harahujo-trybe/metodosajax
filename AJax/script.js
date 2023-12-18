document.addEventListener('DOMContentLoaded', (event) => {
    const titulo = document.createElement('h1');
    titulo.id = 'titulo';
    titulo.innerText = 'Feito com JavaScript';
    document.body.appendChild(titulo);

    document.getElementById('botao').addEventListener('click', function(){
        // Obtém o caractere do campo de formulário
        var caractere = document.getElementById('caractere').value;
        fetch('https://raw.githubusercontent.com/harahujo-trybe/40pontos/criando_pixel_board/script.js')
            .then(response => response.text())
            .then(data => {
                // Encontra a primeira ocorrência do caractere
                var posicao1 = data.indexOf(caractere);
                if (posicao1 != -1) {
                    // Encontra a próxima ocorrência do caractere
                    var posicao2 = data.indexOf(caractere, posicao1 + 1);
                    if (posicao2 != -1) {
                        // Extrai os caracteres entre as duas ocorrências do caractere
                        var textoEntre = data.substring(posicao1 + 1, posicao2);
                        alert('Os caracteres entre as duas ocorrências de "' + caractere + '" são: "' + textoEntre + '"');
                    } else {
                        alert('Não há uma segunda ocorrência de "' + caractere + '".');
                    }
                } else {
                    alert('O caractere "' + caractere + '" não foi encontrado na resposta do Ajax');
                }
            });
    });



});





