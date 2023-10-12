# Sprint1_ToDoList
Sprint 1-1: To Do List

## Descripció
Construïm una ToDo List!!!
L'objectiu d'aquest exercici és crear una aplicació de llista de tasques utilitzant TypeScript i TDD. 
L'aplicació ha de tenir les següents característiques:
- Permetre afegir una tasca a la lista.
- Permetre marcar una tasca com a completada.
- Permetre eliminar una tasca de la lista.
- Mostrar la lista de tasques.

### Nivell 1
Fes servir tests per comprovar la funcionalitat de l'aplicació.
### Nivell 2
Crea una CLI per comprovar la funcionalitat de l'aplicació.
### Nivell 3
Crea un front-end per comprovar la funcionalitat de l'aplicació

### Entrega
- Crea un sol repositori per l'exercici, i envia l'URL perqué siguin revisats.
- Fes servir com a suport el README.md per escriure les indicacions per executar els scripts.
- Fes ús de CI (Integració Continua)amb GitHub actions.

## Explicación del ejercicio
Para la realización del programa, el ecosistema es:
- Node v20.5.1 
- NPM
- Test: Jest para JS

<hr>

### Nivel 1
La <b><em>To Do List</em></b> es un programa que permite almacenar tareas.
Se ha implementado con TDD con Jest.
El archivo de test se llama todolist.test.js (en la carpeta test).

El programa está en la carpeta ./src/index.ts y el archivo transpilado en la carpeta ./dist/index.js. El TDD se ejecuta sobre index.js transpilado.

Las tareas de la <em>To Do List</em> están guardadas en un array de objeto llamado <em>taskList</em>.
Cada objeto contiene los atributos siguientes:
- <em>task</em> (desgloce de la tarea, es un string)
- <em>completed</em> (si la tarea está completada o no, es boolean)
El tipo del array está definido por un <em>interface ITask</em> (linea 4 de index.ts).
El primer nivel viene por defecto con 3 tareas definidas.

Para poder usar la <em>To Do List</em>, hay 5 funciones:
- La primera,<b> <em>searchingTask</em></b> (linea 27) sirve para buscar el índice de las tareas y para saber si existen o no. El índice (index) devuelve la posición del objeto en el array (es un number), pero si el objeto no existe, devuelve -1. <br>
TDD: El primer y segundo test del todolist.test.js (respectivament linea 9 y 13).

- La segunda función <b><em>addTask</em></b> permite añadir tareas nuevas si no existen.
    - Primero llama a <em>searchingTask</em> para saber si la tarea para agregar exite o no.
    - Si no existe (index === -1), sube la tarea en <em>taskList[]</em>, con completed en false por defecto. También devuelve <em>"Task added successfully".</em> <br>
    TDD: test linea 17 (miramos si el último objeto del array coincide con la nueva tarea añadida) y test linea 22 (comprobamos hay una tarea más midiendo el tamaño del array)
    - Si existe (es decir con index >=0), devuelve <em>"Sorry but this task exists"</em>.

- La tercera función <b><em>deleteTask</em></b> permite borrar tareas si son existente.
    - Primero llama a <em>searchingTask</em> para saber si la tarea para agregar exite o no.
    - Si existe (es decir con index >=0), borra la tarea con <em>splice</em> e indice:
        if (taskIndex >= 0) {
            taskList.splice(taskIndex, 1);
            return "Task deleted";
        }
    - Si no existe (index === -1), devuelve: <em>"Sorry, this task doesn't exists".</em>

- La cuarta función <b><em>completedTask</em></b> permite completar tareas, pasando el estado de completed a <em>true</em> y añadiendo <em>": done"</em> al final de la tarea.<br>
Antes de completar la tarea, se comprueba que la tarea que queremos completar existe o no, con la función <em>searchingTask().</em> <br>
TDD: linea 40 (completamos una tarea existente), 44 (intentamos completar un tarea que no existe, el programa nos devuelve <em>"Sorry, this task doesn't exists or is completed"</em>) y 48 (intentamos completar una tarea ya completada, el porgrama nos devuelve <em>"Sorry, this task doesn't exists or is completed"</em>).

- La quinta función <b><em>printTask</em></b> nos permite imprimir las tareas con un bucle for.<br>
TDD: linea 103

- <b>GitHub Actions:</b> ./.github/workflows/main.yml <br>
    - las acciones están en la rama <em>main</em>
    - la versión de Node usada es la "20.5"
    - los jobs son el <em>Checkout</em>, instalar el entorno de Node, instalar las dependencias con <em>npm install</em> y poner en marcha los tests de Jest con <em>npm run test</em>.

### Nivel 2
...

### Nivel 3
El nivel 3 es el programa con un front-end sin CSS.
Los archivos son:
- index.html (hay qua abrirlo en el navegador para que funcione el programa)
- index_nivel3.ts (./src/index_nivel3.ts)
- index_nivel3.js (./dist/index_nivel3.js). Es el archivo transplilado de index_nivel3.ts y que está vinculado al html

El front-end viene con 4 botones para las diferentes funciones <b><em>Add task (function addTask()), Delete task (function deleteTask()), Completed task (completedTask())</em></b> y <b><em>Read task (function printTask()).</em></b>

La estructura del programa viene también con un array de objeto ya existente con 3 tareas por defecto.

Existe también la función <b><em>searchingTask</em></b> para saber el indice de la tarea en dicho array o si la tarea no exite.

Para recoger los inputs del usuario, el programa usa un <em>prompt</em>.
Todo funciona como en el nivel 1, pero con una interfaz básica en un navegador.

Gracias por la lectura
