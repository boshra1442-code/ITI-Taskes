 let students = [
    {
        id: 1,
        name: "Mostafa Mohamed",
        age: 28,
        city: "Cairo",
        grade: 95,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS"]
    },
    {
        id: 2,
        name: "Ali Hassan",
        age: 17,
        city: "Alex",
        grade: 60,
        isGraduated: false,
        skills: ["HTML"]
    },
    {
        id: 3,
        name: "Sara Ali",
        age: 24,
        city: "Mansoura",
        grade: 88,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS", "React"]
    }
];

console.log(students.length);
console.log(students[0].name);
console.log(students[students.length - 1].name);
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

for (let i = 0; i < students.length; i++) {
    console.log("Name : " + students[i].name);
    console.log("Age : " + students[i].age);
    console.log("City : " + students[i].city);
    console.log("Grade : " + students[i].grade);
}

for (let i = 0; i < students.length; i++) {
    if (students[i].age > 18) {
        console.log(students[i].name);
    }
}

for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 90) {
        console.log(students[i].name);
    }
}

for (let i = 0; i < students.length; i++) {
    if (students[i].isGraduated === true) {
        console.log(students[i].name);
    }
}

for (let i = 0; i < students.length; i++) {
    if (students[i].isGraduated === false) {
        console.log(students[i].name);
    }
}

let totalGrades = 0;
for (let i = 0; i < students.length; i++) {
    totalGrades = totalGrades + students[i].grade;
}
console.log(totalGrades);


let averageGrades = totalGrades / students.length;
console.log(averageGrades);


let highestGrade = students[0].grade;
for (let i = 1; i < students.length; i++) {
    if (students[i].grade > highestGrade) {
        highestGrade = students[i].grade;
    }
}
console.log(highestGrade);


let lowestGrade = students[0].grade;
for (let i = 1; i < students.length; i++) {
    if (students[i].grade < lowestGrade) {
        lowestGrade = students[i].grade;
    }
}
console.log(lowestGrade);


let alphabeticalNames = [];
for (let i = 0; i < students.length; i++) {
    alphabeticalNames.push(students[i].name);
}
alphabeticalNames.sort();
console.log(alphabeticalNames);


let reverseNames = [];
for (let i = 0; i < students.length; i++) {
    reverseNames.push(students[i].name);
}
reverseNames.reverse();
console.log(reverseNames);


for (let i = 0; i < students.length; i++) {
    let name = students[i].name;
    console.log(name.length);
    console.log(name[0]);
    console.log(name[name.length - 1]);
}


for (let i = 0; i < students.length; i++) {
    console.log(students[i].name.toUpperCase());
}


for (let i = 0; i < students.length; i++) {
    console.log(students[i].name.toLowerCase());
}


for (let i = 0; i < students.length; i++) {
    if (students[i].name.includes("Ali")) {
        console.log(students[i].name);
    }
}


for (let i = 0; i < students.length; i++) {
    console.log(students[i].name.split(" "));
}


for (let i = 0; i < students.length; i++) {
    let words = students[i].name.split(" ");
    console.log(words.join(" "));
}


for (let i = 0; i < students.length; i++) {
    let name = "   " + students[i].name + "   ";
    console.log(name.trim());
}


for (let i = 0; i < students.length; i++) {
    console.log(students[i].skills.length);
}

for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].skills.length; j++) {
        console.log(students[i].skills[j]);
    }
}


students[0].skills.push("Bootstrap");
console.log(students[0].skills);


students[0].skills.pop();
console.log(students[0].skills);


for (let i = 0; i < students.length; i++) {
    if (students[i].skills.includes("JS")) {
        console.log(students[i].name + " knows JavaScript");
    } else {
        console.log(students[i].name + " does not know JavaScript");
    }
}


 for (let i = 0; i < students.length; i++) {
    console.log([students[i].skills].reverse());
}


for (let i = 0; i < students.length; i++) {
    console.log([students[i].skills].sort());
}


for (let i = 0; i < students.length; i++) {
    console.log(students[i].skills.toString());
}


for (let i = 0; i < students.length; i++) {
    console.log(Object.keys(students[i]));
}


for (let i = 0; i < students.length; i++) {
    console.log(Object.values(students[i]));
}


for (let i = 0; i < students.length; i++) {
    let keys = Object.keys(students[i]);
    for (let j = 0; j < keys.length; j++) {
        let key = keys[j];
        console.log(key + " : " + students[i][key]);
    }
}


for (let i = 0; i < students.length; i++) {
    students[i].country = "Egypt";
}


students[0].city = "Alex";
for (let i = 0; i < students.length; i++) {
    delete students[i].country;
}


for (let i = 0; i < students.length; i++) {
    if ("grade" in students[i]) {
        console.log(students[i].name + " has grade property");
    }
}


for (let i = 0; i < students.length; i++) {
    let grade = students[i].grade;
    if (grade >= 90) {
        console.log("Excellent");
    } else if (grade >= 80) {
        console.log("Very Good");
    } else if (grade >= 70) {
        console.log("Good");
    } else if (grade >= 60) {
        console.log("Pass");
    } else {
        console.log("Failed");
    }
}


for (let i = 0; i < students.length; i++) {
    if (students[i].age < 18) {
        console.log("Minor");
    } else {
        console.log("Adult");
    }
}


function getStudentName(student) {
    return student.name;
}
console.log(getStudentName(students[0]));


function getStudentAge(student) {
    return student.age;
}
console.log(getStudentAge(students[0]));


function isStudentPassed(student) {
    if (student.grade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(isStudentPassed(students[0]));


function getSkillsCount(student) {
    return student.skills.length;
}
console.log(getSkillsCount(students[0]));


function getAverageGrades(students) {
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total = total + students[i].grade;
    }
    return total / students.length;
}
console.log(getAverageGrades(students));


console.log(Math.random()); //بتطلع رقم عشوائي من0 لحد 1
console.log(Math.round(4.7)); //بتقرب لاقرب عدد صحيح
console.log(Math.floor(4.7)); //بتجيب العدد الصحيح الاصغر
console.log(Math.ceil(4.2)); 
console.log(Math.max(10, 20, 30, 40));
console.log(Math.min(10, 20, 30, 40));
console.log(Math.pow(2, 3));
 