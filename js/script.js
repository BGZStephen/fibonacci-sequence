var html = "";
var f1 = 1;
var f2 = 1;
var f3;
var fibUserNumber = prompt("Enter a Fibonacci Sequence number to see all results");
fibUserNumber -= 2;


for (var i = 1; i <= fibUserNumber; i += 1) {
    f3 = f1 + f2;
    html += "| " + f3 + " ";
    f1 = f2;
    f2 = f3;
}

document.write("1 | 1 ")
document.write(html);
