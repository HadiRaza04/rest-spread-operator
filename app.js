function sum(name,rollno, ...args) {
    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }
    return `The no of ${name} rolls ${rollno} is ${sum}`;

    
}
document.getElementById("std1").innerHTML = sum("Hadi ","01 ", 11, 42, 19);
document.getElementById("std2").innerHTML = sum("Raza ","02 ", 61, 12, 11);
document.getElementById("std3").innerHTML = sum("khan ","03 ", 1, 92, 4);