let mass = [31, 10, 'chicken', 9, 'fish', 10]; 
let str_mass = [];

// Как отфильтровать исходный массив так, чтобы получить массив, где будут только строки?
for (let i of mass) {
    if (typeof(i) === 'string') str_mass.push(i);
}
console.log(str_mass);
// or
let str = mass.filter(item => typeof(item) === 'string');
console.log(str);


// Как отфильтровать исходный массив так, чтобы получить массив, где будут только элементы со значением 10?
let ten = mass.filter(item => item === 10);
console.log(ten);

