const { searching } = require('../dist/index');
const { add } = require('../dist/index');
const { list } = require('../dist/index')

test('buscar posicion en el array', () => {
    expect(searching('poner la lavadora')).toBe(0);
  });

test('agregar tarea', () => {
    add('sacar al perro');
    expect(list[list.length - 1].task).toBe('sacar al perro');
  });


