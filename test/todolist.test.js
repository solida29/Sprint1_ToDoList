const { searching } = require('../dist/index');
const { add } = require('../dist/index');
const { list } = require('../dist/index');
const { deleteT } = require('../dist/index');


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

