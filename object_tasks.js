const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }

/*1) Необходимо вывести в консоль браузера все свойства и значения объекта person в следующем виде:

<property>: <value>*/

let keys = Object.keys(person);
for (let key of keys) {
    console.log(`${key}: ${person[key]}`);
}

/*
2) Необходимо вывести в консоль браузера все свойства и значения объекта `person` таким образом, чтобы вывод выглядел следующим образом:

```
First name: Jack
Last name: Sparrow
Age: 25 ages
Where to find: Caribbean sea
``` */

keys = Object.keys(person);
for (let key of keys) {
    let arr = ['First name', 'Last name', 'Age', 'Where to find'];
    if (key == 'age'){
        person[key] = `${person[key]} ages`;
    }
    console.log(`${arr[keys.indexOf(key)]}: ${person[key]}`);
}
