var html = "<p>1 - 1</p><p>2 - 1</p>";
var f1 = 1;
var f2 = 1;
var f3;
fibUserNumber = 100;

for (var i = 3; i <= fibUserNumber; i += 1) {
    f3 = f1 + f2;
    html += "<p>" + i + " - " + f3 + "</p>";
    f1 = f2;
    f2 = f3;
}

outputLocation = document.getElementById("app-container");
button = document.getElementById("go-button")

button.onclick = function(){
  outputLocation.innerHTML = html;
};
