/*Необходимо изучить следующие методы работы с массивами:

/slice
/splice
/map
/for
/forEach
/filter
/reduce
/sort
/some
/every
Для каждого метода написать пример с его использованием*/

function multi(item){
    return item*2
}

let arr = [1, 2, 3, 4, 5]
console.log(arr)

arr.slice("slice: ", 2, 4)//возвращает 2 и 3й элемент 
arr.splice("splice: ", 1, 1)// удаляет элемент с индексом 2


console.log("some: ", arr.some(n => n === 4)) //some

console.log("multi: ", arr.map(multi));//map 

new_array = [];
for (let i = 0; i < arr.length; i++) { //for
    new_array.push(i)
}
console.log("for", new_array);

console.log("foreach: ", arr.forEach(item => item * 4));// применяет функцию для каждого элемента но ничего не возвращает

console.log("filter: ", arr.filter(item => item < 3))// пропускает элементы через функция и возвращает те, которые true

console.log('reduce: ', arr.reduce((total, value) => total * value)); //используется для вычисления какого-нибудь единого значения на основе всего массива.

arr = ['table', 'chair', 'computer', 'earphones']
let s = arr.sort(); // sort
console.log('sort: ', s)

sortnum = function(a, b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

arr = [2,6,9,4,6,1,0];
s = arr.sort(sortnum)
console.log('sort: ', s)

let eve = arr.every(test => test = Number);
console.log("every: ", eve);
