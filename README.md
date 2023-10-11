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

### Nivel 1
El <em>To Do List</em> es un programa que permite almacenar tareas.
Se ha implementado con TDD con Jest.
El archivo de test se llama todolist.test.js (en la carpeta test).

El programa está en la carpeta ./src/index.ts y el archivo transpilado en la carpeta ./dist/index.js. El TDD se ejecuta sobre index.js transpilado.

Las tareas de la <em>To Do List</em> están guardadas en un array de objeto llamado <em>taskList</em>.
Cada objeto contiene los atributos siguientes:
- <em>task</em> (desgloce de la tarea, es un string)
- <em>completed</em> (si la tarea está completada o no, es boolean)
El tipo del array está definido por un <em>interface ITask</em> (linea 4 de index.ts).
El primer nivel viene por defecto con 3 tareas definidas.

Para poder usar la <em>To Do List</em>, hay 4 funciones:
- La primera, <em>searchingTask</em> (linea 27) sirve para buscar el índice de las tareas y para saber si existen o no. El índice (index) devuelve la posición del objeto en el array (es un number), pero si el objeto no existe, devuelve -1. <br>
TDD: El primer y segundo test del todolist.test.js (respectivament linea 9 y 13).

- La segunda función <em>addTask</em> permite añadir tareas nuevas si no existen.
    - Primero llama a <em>searchingTask</em> para saber si la tarea para agregar exite o no.
    - Si no existe (index === -1), sube la tarea en <em>taskList[]</em>, con completed en false por defecto. También devuelve <em>"Task added successfully".</em> <br>
    TDD: test linea 17 (miramos si el último objeto del array coincide con la nueva tarea añadida) y test linea 22 (comprobamos hay una tarea más midiendo el tamaño del array)
    - Si existe (es decir con index >=0), devuelve <em>"Sorry but this task exists"</em>.

- La tercera función <em>completedTask</em> permite completar tareas, pasando el estado de completed a <em>true</em> y añadiendo <em>": done"</em> al final de la tarea.<br>
Antes de completar la tarea, se comprueba que la tarea que queremos completar existe o no, con la función <em>searchingTask().</em> <br>
TDD: linea 40 (completamos una tarea existente), 44 (intentamos completar un tarea que no existe, el programa nos devuelve <em>"Sorry, this task doesn't exists or is completed"</em>) y 48 (intentamos completar una tarea ya completada, el porgrama nos devuelve <em>"Sorry, this task doesn't exists or is completed"</em>).

- La cuarta función printTask nos permite 



