
//Дан массив элементов ['cat', 'dog', 'parrot', 'horse'] Как узнать индекс элемента 'parrot'?
let mass = ['cat', 'dog', 'parrot', 'horse'];
console.log(mass.indexOf('parrot')); // 2


//Как удалить элемент 'fish'? Как удалить элемент 'cat'?

mass = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion']
out_mass = mass;

let index = out_mass.indexOf('fish');
out_mass.splice(index, 1);
index = out_mass.indexOf('cat');
out_mass.splice(index, 1);
console.log(out_mass);
//или 
out_mass = mass;
console.log(out_mass);
for (let i of out_mass) {
    if (i =='fish' || i =='cat') {
        index = out_mass.indexOf(i); 
        out_mass.splice(index, 1);
        console.log(out_mass);
    } 
 console.log(out_mass)
}

//Как удалить последние 2 элемента?
mass = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
out_mass = mass;
out_mass.pop();
out_mass.pop();
console.log(out_mass);