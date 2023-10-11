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
– Node v20.5.1 
– NPM
– Test: Jest para JS

### Nivel 1
El To Do List es un programa que permite almacenar tareas.
Se ha implementado con TDD con Jest.

Las tareas están guardadas en un array de objeto llamado taskList.
Cada objeto contiene los atributos siguientes:
– task (desgloce de la tarea, es un string)
– completed (si la tarea está cpmpletada o no, es boolean)

El primer nivel viene por defecto con un array con 3 tareas definidas.

Para poder usar la To Do List, hay 5 funciones:
– una para buscar el indice de las tareas y para saber si existen o no. El índice devuelve la posición del objeto en el array, pero si el objeto no existe, devuelve -1.

– una función addTask que permite añadir tareas nuevas. 
Primero llama a la busca si la tarea para agregar exite o no vía el índice


