// const lista = [4, 8, 12, 16];
// const r = lista.splice(1, 2);
// console.log(lista, r);


const lista = [4, 8, 12, 16];
const r = lista.slice(1, 3);
console.log(lista, r);

const outraLista = [4, 8, 12, 16];
const copia = [...outraLista];
const r2 = copia.splice(1, 2);
console.log(outraLista, r2);