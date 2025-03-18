let amigos = [];

// Función para agregar un 
// nombre a la lista
function agregarAmigo() {
    // Obtener el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el nombre 
    // no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre 
    // al array
    amigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista de nombres 
    // en la interfaz
    actualizarListaAmigos();
}

// Función para actualizar la lista 
// de nombres en la interfaz
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    // Limpiar la lista 
    // antes de actualizar
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos 
    // y agregar cada nombre a la lista
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Función para sortear 
// un amigo secreto
function sortearAmigo() {
    // Verificar que haya al menos 
    // un nombre en la lista
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un nombre antes de sortear.");
        return;
    }

    // Seleccionar un nombre 
    // aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}