function colorirDia() {
  let days = document.getElementById('day').value;
  let color = document.getElementById('color').value;
  let calendar = document.getElementById('calendar');

  if ((days < 1) || (days > 31)) {
    alert("Não tem esse numero no calendario");
  } else {
    let td = calendar.getElementsByTagName('td')[(parseInt(days) + 2)];
    td.style.backgroundColor = color;
  }
}

function mostrarEsconder() {
var elemento = document.getElementById("fotos-e-texto");
var botao = document.getElementById("botao-mostrar-esconder");
 
if (elemento.style.display === "none") {
  elemento.style.display = "block";
  botao.innerHTML = "Esconder Fotos e Texto";
} else {
  elemento.style.display = "none";
  botao.innerHTML = "Mostrar Fotos e Texto";
}
}
