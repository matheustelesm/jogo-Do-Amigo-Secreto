let listaAmigos = [];


function adicionarAmigo(){ 
    let nomesAmigos = document.getElementById('amigo').value;
    if(nomesAmigos != ''){
        listaAmigos.push(nomesAmigos);
        console.log(listaAmigos);
        
    } else{
        alert("Por favor, insira um nome."); 
    }
    atualizarLista();
    limparInput()
    
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    let elemento = ''; 
    for (let i = 0; i < listaAmigos.length; i++) {
        elemento += `<li>${listaAmigos[i]}</li>`;
    }
    lista.innerHTML = elemento; 
}

function sortearAmigo(){
        if (listaAmigos.length < 2) {
        alert('Digite pelo menos dois amigos para sortear!');   
        } else {
            let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
            nomeAmigo = listaAmigos[indiceSorteado];
            resultado.innerHTML= `O seu amigo secreto é: ${nomeAmigo}`;
        }
    }


function limparInput(){
    nomeAmigos = document.querySelector('input');
    nomeAmigos.value = '';
}