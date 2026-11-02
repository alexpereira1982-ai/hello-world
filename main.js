let nome_usuario = prompt("Qual é o seu nome?");
let id_usuario = document.getElementById("nome-usuario");

while (nome_usuario == "") {
    nome_usuario = prompt("Por favor, digite seu nome:");
}

if (nome_usuario == null) {
    nome_usuario = "Visitante";
}else{
    nome_usuario = nome_usuario.trim();
}

id_usuario.textContent = nome_usuario;


