const student = "Зайротьянц Захар Денисович"; 
document.getElementById("student").innerHTML = student;

const users = [{name: 'Пономарев Андрей Алексеевич', gender: 'male', birthDate: '11.12.1980'},

{name: 'Смирнова София Львовна', gender: 'female', birthDate: '02.01.1987'},
{name: 'Владимиров Артём Григорьевич', gender: 'male', birthDate: '07.12.1990'},
{name: 'Маслова Елизавета Егоровна', gender: 'female', birthDate: '10.10.1997'},
{name: 'Назарова Вера Романовна', gender: 'female', birthDate: '01.05.1983'},
{name: 'Иванов Иван Фёдорович', gender: 'male', birthDate: '05.05.1999'},
{name: 'Рыбакова Алина Семёновна', gender: 'female', birthDate: '01.04.1974'},
{name: 'Молчанов Даниил Ильич', gender: 'male', birthDate: '02.03.1984'},
{name: 'Овчинников Платон Александрович', gender: 'male', birthDate: '03.05.1999'},
{name: 'Дмитриев Алексей Григорьевич', gender: 'male', birthDate: '12.11.1998'},
{name: 'Мартынова Софья Тимуровна', gender: 'female', birthDate: '07.06.1995'},
{name: 'Соколов Михаил Адамович', gender: 'male', birthDate: '11.03.1979'}] 

let names = []; 
let countOfMale = 0; 
let countOfFemale = 0;  
let gender;  
for(let i = 0; i < users.length; i++) {  
let letter = []; 
let b = 0;  
if (users[i].gender == 'male') {  
countOfMale++; 
gender = 'М'; 
} else { 
countOfFemale++;  
gender = 'Ж'; 
};
for (let n = 1; n < users[i].name.length; n++) { 
if (users[i].name[n] == users[i].name[n].toUpperCase()) { 
letter[b++] = users[i].name[n]; 
};
};
names[i] = users[i].name.split(" ").splice(0, 1).join(" ") + 
' '+ letter[1] + '.'+ letter[3] + '.' + ',' 
+ gender + ', '
+ 'Возраст: '+ Math.floor((new Date().getTime() - new Date(users[i].birthDate))/ (24 * 3600 * 365.25 * 1000));
};  
console.log(`Всего гостей: ${users.length}`);
console.log(`Мужчин: ${countOfMale}`);
console.log(`Женщин: ${countOfFemale}`);
console.log('Список гостей:');
for(let j = 0; j < names.length; j++) {
console.log(names[j]);
}; 