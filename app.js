
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor ingresa un nombre válido');
    return;
  }

  amigos.push(nombre);
  input.value = ''; // limpiar input
  mostrarLista();
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // limpiar lista anterior

  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // limpiar resultado anterior

  if (amigos.length === 0) {
    alert('No hay amigos para sortear');
    return;
  }

  const randomIndex = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[randomIndex];

  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
