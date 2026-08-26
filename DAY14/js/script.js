// ==========================================
// Part 1 - Choose
// ==========================================

// 1) إيه اللي بيرجعه map() ؟
// Answer: Array جديدة بنفس الطول

// 2) مين فيهم بيرجع أول عنصر يحقق الشرط؟
// Answer: find()

// 3) filter() بيرجع...
// Answer: Array جديدة بالعناصر اللي حققت الشرط

// 4) forEach() بيرجع...
// Answer: undefined

// 5) for...of بنستخدمها غالباً مع...
// Answer: Arrays


// ==========================================
// Part 2 - True or False
// ==========================================

// 1. map() بيغير الـ Array الأصلية. → False
// 2. filter() ممكن يرجع Array فاضية. → True
// 3. find() ممكن يرجع undefined. → True
// 4. for...in بيلف على الـ Index بتاع الـ Array. → True
// 5. forEach() ينفع أعمل بيها break. → False


// ==========================================
// Part 3 - Compelete the following
// ==========================================

// Q1
// خلي الكود يطبع: 2 4 6 8

const numbers = [1,2,3,4];
numbers.forEach((num)=>{ console.log(num * 2);
});


// Q2
// طلع Array فيها الأرقام الأكبر من 20.
const nums = [10,25,5,30,15,40];
const result = nums.filter((num)=>{return num > 20;
});
console.log(result);


// Q3
// هات أول شخص عمره أكبر من 25.
const users = [
    {name: `Ali`, age:20},
    {name:`Sara`, age:28},
    {name:`Omar`, age:30}
];
const user = users.find((item)=>{return item.age > 25;
});
console.log(user);


// Q4
// حوّل كل الأسماء لـ Uppercase.
const names = [`ali`,`mona`,`ahmed`];

const result2 = names.map((name)=>{
    return name.toUpperCase();
});

console.log(result2);


// ==========================================
// Part 4 - To Do
// ==========================================
const fruits = [`Apple`,`Banana`,`Orange`];

// 1) اطبع كل عنصر باستخدام for...of
for (const fruit of fruits) {
    console.log(fruit);
}

// 2) اطبع الـ Index باستخدام for...in
for (const index in fruits) {
    console.log(index);
}

// 3) اطبع بالشكل ده باستخدام forEach
fruits.forEach((fruit,index)=>{
    console.log(index + " -> " + fruit);
});
// ==========================================
// Part 5 - To Do
// ==========================================
// Q1
// حوّل الكود لـ Arrow Function
const sum = (a,b) => {
    return a + b;
};

// Q2
// استخدم Destructuring
const user2 = {
    name:"Mostafa",
    age:25
};
const {name, age} = user2;

// Q3
// استخدم Template Literal
console.log(`Hello ${name}`);

// Q4
// استخدم Spread Operator
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const all = [...arr1, ...arr2];
// ==========================================
// Part 6 - Many Q
// ==========================================
const students = [
    {name:`Ali`, degree:70},
    {name:`Sara`, degree:95},
    {name:`Ahmed`, degree:40},
    {name:`Mona`, degree:85},
    {name:`omar`, degree:55}
];

// 1) اعمل Array فيها أسماء الطلبة بس.
const studentNames = students.map((student)=>{
    return student.name;
});

// 2) اعمل Array فيها الطلبة اللي درجاتهم أكبر من أو تساوي 60.
const passedStudents = students.filter((student)=>{
    return student.degree >= 60;
});

// 3) هات أول طالب درجته أكبر من 90.
const topStudent = students.find((student)=>{
    return student.degree > 90;
});

// 4) اطبع أسماء كل الطلبة باستخدام forEach().
students.forEach((student)=>{
    console.log(student.name);
});

// بدون استخدام Loop عادية (for أو while)
// احسب مجموع الأرقام دي باستخدام reduce()

const numbers2 = [5,10,15,20];
const total = numbers2.reduce((sum,num)=>{
    return sum + num;
},0);
console.log(total);