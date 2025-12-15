const arr = [10, 15, 22, 34, 45, 60];
const processado = arr.filter(n => n % 3 === 0)
                    .map(n => ({ original: n, metade: n / 2 }))
                    .reduce((acc, obj) => acc + obj.metade, 0);
console.log(processado);
