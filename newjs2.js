/*Можем ли мы заменить в строке:
"Я изучаю JavaScipt"
символ ю на другой? Если да, то как?
Можем ли заменить слово JavaScript на 'Frontend`?

Приветствуется решение несколькими способами

Решение должно быть залито в ваш репозиторий на github*/

let str = "Я изучаю JavaScript"

//заменить в строке:"Я изучаю JavaScipt" символ ю на другой?
mass = []
for(char of str) {
    mass.push(char)
}

index = mass.indexOf("ю")
mass[index] = 'Ю'

let finish_str;
finish_str = mass.join('')

console.log(finish_str)

//заменить слово JavaScript на 'Frontend`
let old_string = 'JavaScript'
let new_string = 'Frontend'
mass = str.split(' ')
mass[2] = new_string
mass = mass.join(' ')
console.log(mass)