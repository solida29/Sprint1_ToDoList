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
El To Do List es un programa que permite almacenar tareas.
Se ha implementado con TDD con Jest.
El archivo de test se llama todolist.test.js (en la carpeta test).

El programa está en la carpeta ./src/index.ts y el archivo transpilado en la carpeta ./dist/index.js. El TDD se ejecuta sobre index.js transpilado.

Las tareas de la To Do List están guardadas en un array de objeto llamado taskList.
Cada objeto contiene los atributos siguientes:
- task (desgloce de la tarea, es un string)
- completed (si la tarea está cpmpletada o no, es boolean)
El tipo del array está definido por un interface ITask (linea 4 de index.ts).
El primer nivel viene por defecto con 3 tareas definidas.

Para poder usar la To Do List, hay 5 funciones:
- La primera, searchingTask (linea 27) sirve para buscar el índice de las tareas y para saber si existen o no. El índice (index) devuelve la posición del objeto en el array (es un number), pero si el objeto no existe, devuelve -1.
TDD: El primer y segundo test del todolist.test.js (respectivament linea 9 y 13).

- La segunda función addTask permite añadir tareas nuevas si no existen.
    - Primero llama a searchingTask para saber si la tarea para agregar exite o no.
    - Si no existe (index === -1), sube la tarea en taskList[], con completed en false por defecto. También devuelve "Task added successfully".
    TDD: test linea 17 (miramos si el último objeto del array coincide con la nueva tarea añadida) y test linea 22 (comprobamos hay una tarea más midiendo el tamaño del array)
    - Si existe (es decir con index >=0), devuelve "Sorry but this task exists".

- La 3ª función 



