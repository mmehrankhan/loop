// Initialize the first two terms of the Fibonacci series
let a = 0;
let b = 1;

// Print the first two terms
document.write('<h1>',"Fibonacci Series:", "</br>");

// Print the first term
document.write(a, "</br>");

// Print the second term
document.write(b, "</br>");

// Loop to calculate and print the next terms
for (let i = 3; i <= 10; i++) {
    let nextTerm = a + b;
    document.write('<h1>',nextTerm, '</br>');
    a = b;
    b = nextTerm;
}
