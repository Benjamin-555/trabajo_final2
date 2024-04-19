<?php
session_start();

// Inicializa la lista de tareas si no existe en la sesión
if (!isset($_SESSION['tasks'])) {
    $_SESSION['tasks'] = [];
}

// Añadir una tarea
if (isset($_POST['new_task']) && !empty(trim($_POST['new_task']))) {
    $_SESSION['tasks'][] = ['id' => count($_SESSION['tasks']), 'text' => trim($_POST['new_task']), 'done' => false];
}

// Eliminar una tarea
if (isset($_POST['delete_task'])) {
    $new_tasks = array_filter($_SESSION['tasks'], function ($task) {
        return $task['id'] != $_POST['delete_task'];
    });
    $_SESSION['tasks'] = array_values($new_tasks);
}

// Editar una tarea
if (isset($_POST['edit_task']) && isset($_POST['new_text'])) {
    $task_id = $_POST['edit_task'];
    foreach ($_SESSION['tasks'] as $key => $value) {
        if ($value['id'] == $task_id) {
            $_SESSION['tasks'][$key]['text'] = trim($_POST['new_text']);
            break;
        }
    }
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Lista de Tareas</title>
</head>
<body>
    <!--Geovanny Benjamin Beato Nivar-->
    <!--20231079-->
    <h1>Lista de Tareas</h1>
    <form method="post">
        <input type="text" name="new_task" placeholder="Añadir nueva tarea">
        <button type="submit">Añadir Tarea</button>
    </form>

    <ul>
        <?php foreach ($_SESSION['tasks'] as $task): ?>
            <li>
                <?= htmlspecialchars($task['text']) ?>
                <form method="post" style="display:inline;">
                    <input type="hidden" name="delete_task" value="<?= $task['id'] ?>">
                    <button type="submit">Eliminar</button>
                </form>
                <form method="post" style="display:inline;">
                    <input type="hidden" name="edit_task" value="<?= $task['id'] ?>">
                    <input type="text" name="new_text" placeholder="Editar texto">
                    <button type="submit">Guardar</button>
                </form>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
