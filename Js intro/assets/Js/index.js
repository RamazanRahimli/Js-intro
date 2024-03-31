let students=[
    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    ]
    // 1) students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını consolda yazdırın;
    // 2) students arrayində adındakı hərflərin sayı 5 və 5dən kiçik olanların sayını consolda yazdırın;
    // 3) students arrayində id-i 8 olan obyektin adını və soyadını consolda yazdırın.
    
// 1-ci sualin cavabi

for(let i = 0;i<students.length;i++){

    if(students[i].grade == 95 || students[i].grade == 100 || students[i].grade == 98){
        console.log('Excellent student name and surname ' + students[i].name + ' '   + students[i].surname +  ": " + '' + students[i].grade);
    }

}

for(let i = 0;i < students.length; i++){

    if(students[i].grade == 54  || students[i].grade == 77){
        console.log('Good student name and surname ' + students[i].name + ' '   + students[i].surname +  ": " + '' + students[i].grade);
    }

}

for(let i = 0;i < students.length; i++){

    if(students[i].grade > 0 && students[i].grade < 60){
        console.log('Weak student name and surname ' + students[i].name + ' '   + students[i].surname +  ": " + '' + students[i].grade);
    }

}

// 2-ci sualin cavabi

let say  = 0
for(let i = 0;i<students.length;i++){

    if(students[i].name.length <= 5){
        say ++   
    }

}
console.log('herflerin sayi 5-den kicik olanlarin sayisi ' + ''+say+ ''+ ' neferdir.');



// 3-cu sualin cavabi

for(let i = 0;i<students.length;i++){
    if(students[i].id == 8){
        console.log('Id-si  8 olan telebenin adi ve soyadi ' + students[i].name, students[i].surname);
    }
}

for(let i = 0;i<students.length;i++){
    if(students[i].id == 7){
        console.log('Id-si  7 olan telebenin adi ve soyadi ' + students[i].name, students[i].surname);
    }
}
for(let i = 0;i<students.length;i++){
    if(students[i].id == 6){
        console.log('Id-si  6 olan telebenin adi ve soyadi ' + students[i].name, students[i].surname);
    }
}

for(let i = 0;i<students.length;i++){
    if(students[i].id == 5){
        console.log('Id-si  5 olan telebenin adi ve soyadi ve yigdigi bal: ' + students[i].name, students[i].surname + ' grade : ' + students[i].grade );
    }
}


for(let i = 0;i<students.length;i++){
    if(students[i].id == 4){
        console.log('Id-si  4 olan telebenin adi ve soyadi ' + students[i].name, students[i].surname);
    }
}

for(let i = 0;i<students.length;i++){
    if(students[i].id == 3){
        console.log('Id-si  3 olan telebenin adi ve soyadi ' + students[i].name, students[i].surname);
    }
}

for(let i = 0;i<students.length;i++){
    if(students[i].id == 2){
        console.log('Id-si  2 olan telebenin adi ve soyadi ' + students[i].name, students[i].surname);
    }
}

for(let i = 0;i<students.length;i++){
    if(students[i].id == 1){
        console.log('Id-si 1  olan telebenin adi ve soyadi ' + students[i].name, students[i].surname);
    }
}

for(let i = 0;i<students.length;i++){
    if(students[i].id == 9){
        console.log('Id-si 9  olan telebenin adi ve soyadi ' + students[i].name, students[i].surname);
    }
}


for(let i = 0;i<students.length;i++){
    if(students[i].id == 9){
        console.log('Id-si 9  olan telebenin adi ve soyadi ve yasi  ' + students[i].name, students[i].surname + ' ' + students[i].age  + ' yasi var.' );
    }
}


