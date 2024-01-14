    const form = document.getElementById('form-atividade');
    const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
    const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />';
    const atividades = [];
    const notas = [];
    const SpanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
    const SpanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
    const NotaMinima = parseFloat(prompt("digite a media minima :"));

    let linhas = '' ;

    form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
    AtualizarTabela();
    atualizaMediaFinal();

    

    });

    function adicionarLinha(){
        const inputNomeAtividade = document.getElementById('nome-atividade');
        const inputNotaAtividade = document.getElementById('nota-atividade');

        if (atividades.includes(inputNomeAtividade.value)){
            alert(`A atividade: ${inputNomeAtividade.value} ja foi colocada`);
        }else{
            atividades.push(inputNomeAtividade.value);
            notas.push(parseFloat(inputNotaAtividade.value));

            let linha = '<tr>';
            linha += `<td>${inputNomeAtividade.value}</td>`;
            linha += `<td>${inputNotaAtividade.value}</td>`;
            linha += `<td>${inputNotaAtividade.value >= NotaMinima ? imgAprovado : imgReprovado}</td>`;
            linha += '</tr>';

            linhas += linha;
        }
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }

    function AtualizarTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML += linhas;

    }

    function atualizaMediaFinal(){
        const mediaFinal = CalculaMediaFinal();

        document.getElementById("media-final-valor").innerHTML=mediaFinal;
        document.getElementById("media-final-resultado").innerHTML=mediaFinal>= NotaMinima ? SpanAprovado : SpanReprovado;

        
    }

    function CalculaMediaFinal(){
        let somaDasNotas = 0;

        for (let i = 0; i < notas.length; i++){
            somaDasNotas += notas[i];
        }

        return somaDasNotas / notas.length;
    }


