const form = document.getElementById('form-campos');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemSucesso = `Sucesso - Campo B: <b>${campoB.value}</b> é maior que o campo A: <b>${campoA.value}`;
    const mensagemErro = `Erro - Campo B: <b>${campoB.value}</b> é menor que o campo A: <b>${campoA.value}`;

    if (campoB.value > campoA.value){
        
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'none';
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value ='';

    } else {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.style.display = 'none';
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
});

