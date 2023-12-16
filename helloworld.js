function hisname() {
    let person = prompt("Please enter your name");
    document.getElementById("demo").innerHTML = "Hello " + person;
}

function age(){
    let personAge = prompt("please enter your age");
    let update = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = update + "<br>You are " + personAge;

}
