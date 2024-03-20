
var num= prompt('enter a number ti find factorial')

var factorial=1
for(var i=1; i<=num; i++){
    factorial *= i;
}
document.write("Factorial of ", num, " is : ", factorial)