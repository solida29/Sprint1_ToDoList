const { searching } = require('../dist/index');
const { add } = require('../dist/index');
const { list } = require('../dist/index');
const { deleteT } = require('../dist/index');
const { completedT } = require('../dist/index');


test('buscar posicion en el array', () => {
  expect(searching('poner la lavadora')).toBe(0);
});

test('buscar posicion en el array', () => {
  expect(searching('jugar a tenis')).toBe(-1);
});

test('agregar tarea', () => {
  add('sacar al perro');
  expect(list[list.length - 1].task).toBe('sacar al perro');
});

test('eliminar tarea', () => {
  expect(deleteT('poner la lavadora')).toBe('Task deleted');
});

test('eliminar tarea', () => {
  expect(deleteT('saltar en paracaidas')).toBe("Sorry, this task doesn't exists");
});

test('completar tarea', () => {
  expect(completedT('preparar la cena')).toBe("Task completed");
});

test('completar tarea', () => {
  expect(completedT('escuchar musica')).toBe("Sorry, this task doesn't exists or is completed");
});

test('completar tarea', () => {
  expect(completedT('preparar la cena')).toBe("Sorry, this task doesn't exists or is completed");
});