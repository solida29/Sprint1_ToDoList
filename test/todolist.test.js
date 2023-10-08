const { searching } = require('../dist/index');
const { add } = require('../dist/index');

test('buscar posicion en el array', () => {
    expect(searching('poner la lavadora')).toBe(0);
  });

test('agregar tarea', () => {
    expect(add('sacar al perro')).toBe('Task added successfully');
  });

