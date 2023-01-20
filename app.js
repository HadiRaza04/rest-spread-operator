function sum() {
    let sum = 0;
    for (let i in arguments) {
        sum += arguments[i];
    }
    return sum;
}
document.getElementById("demo").innerHTML = sum(1, 2, 3);
document.getElementById("demo1").innerHTML = sum(1, 2, 9);
document.getElementById("demo2").innerHTML = sum(1, 2, 11);
document.getElementById("demo3").innerHTML = sum("Hadi Raza", 1, 2, 4);