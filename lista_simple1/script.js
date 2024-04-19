function agregarTarea() {
    const nuevaTarea = document.getElementById('nuevaTarea').value;

    if (nuevaTarea) {
        const tarea = document.createElement('li');
        tarea.innerHTML = `
            <input type="checkbox" onchange="marcarTarea(this)">
            <span>${nuevaTarea}</span>
            <button onclick="eliminarTarea(this)">Eliminar</button>
        `;
        document.getElementById('tareas').appendChild(tarea);
        document.getElementById('nuevaTarea').value = '';
    }
}

function marcarTarea(tareaMarcada) {
    const tarea = tareaMarcada.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(botonEliminar) {
    const tarea = botonEliminar.parentNode;
    tarea.parentNode.removeChild(tarea);
}
