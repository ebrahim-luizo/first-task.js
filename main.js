// problem 1............................................................................................................. 

function array() {
    var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return ((1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10) / 2);

}
console.log(array());

// problem 2..............................................................................................................
function area(a, b) {
    return a * b * .5;

}
console.log(area(10, 20));

// problem 3..............................................................................................................

function years(years) {
    return (years * 365);
    
}
console.log(years(10));

// problem 4...............................................................................................................

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

// problem 5................................................................................................................

function namess() {
    var names = ["ahmed", "abdo", "osama", "ebrahim", "noor", "aml", "jaqoop", "mohamed", "nasr", "kamel"];
    return names[0];
}
console.log(namess());

//problem 6..................................................................................................................

function fullname() {
    return document.getElementById("name").innerHTML = "ebrahim ali ahmed luizo";
}
fullname();

//problem 7..................................................................................................................

function hour(hour) {
    return hour * 3600;
}
console.log(hour(1));

//problem 8..................................................................................................................

function fnum(a, b, c, d) {
    var sum=(a + b + c + d)
    
    if (sum > 350) {
        return("true");
    } else {
        return("false");
    }     
}
document.write(fnum(10, 20, 30, 40));

//problem 9..................................................................................................................

function zero(z) {
    if (z === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(zero(0));

// problem 10...............................................................................................................

function div(i, j) {
    return (i % j);
}
console.log(div(5, 2));

// problem 11................................................................................................................

function two(n, m) {
    if (n > m) {
        return n;
    } else if (m > n) {
        return m;
    } else {
        return ("two num are the same");
    }
}
console.log(two(1, 1));
console.log(two(1, 2));
console.log(two(3, 1));

// problem 12..............................................................................................................

function checkNumber(input) {
    return typeof input === 'number' ;
}
var userInput = 123;
console.log(checkNumber(userInput)); // Output: true

var userInput = "abc";
console.log(checkNumber(userInput)); // Output: false

// problem 13...............................................................................................................

function getCurrentDate() {
    var currentDate = new Date();
    return currentDate.toDateString();
}
console.log(getCurrentDate());

// finish..................................................................................................................