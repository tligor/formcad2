
    
    $(document).ready(function() {
    $('#tel').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    
    
    let botaoDoCaralho = document.getElementById('vaicaralho');

    botaoDoCaralho.addEventListener('click', function(e){
        e.preventDefault();
        
        let nome = document.getElementById('name').value;
        let email = document.getElementById('mail').value;
        let telefone = document.getElementById('tel').value;
        let cpf = document.getElementById('cpf').value;
        let cep = document.getElementById('cep').value;
        let endereco = document.getElementById('address').value;
    
        let dados = {nome,email,telefone,cpf,cep,endereco};
        console.log(dados);
});
})