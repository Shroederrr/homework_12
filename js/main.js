let a = prompt("Please, enter your text here:");
let b = prompt("Please, enter your text here:");
let c = prompt("Please, enter your text here:");

console.log(c + " " + a + " " + b);


let numb = +prompt("Enter five-digit number");
while (numb < 10000 || numb > 99999) {
    numb = +prompt("Enter five-digit number");
}
console.log(numb);

let summary = numb.toString().split("");
console.log(summary);
console.log(summary.join(" "));