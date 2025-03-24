var x = 5, y = 7
var z = x+y
console.log(z)

var A = "Hello ", B = "world!"
var C = A+B
console.log(C)

function sumNPrint(x1,x2) {
    var x3 = x1+x2
    console.log(x3)
    return x3
    
}

sumNPrint(x,y)
sumNPrint(A,B)

if (C.length > z.length) {
    console.log(C)
} else if (C.length < z.length) {
    console.log(z)
} else {
    console.log("good job!")
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
const L2 = ["Apple", "Banana", "Kiwi", "Orange"]

//L1.forEach(findTheBanana);
//L2.forEach(findTheBanana);

function findTheBanana(element,i) {
    if (element == 'Banana') {
        alert('We found a banana in index ' + i)
    }
}

function greetingFunc() {
    var d = new Date()
    var h = d.getHours()
    var greeting = ""
    if (h<12) {
        var greeting = "Good morning"
    } else if (12<h && h<18) {
        var greeting = "Good afternoon"
    } else if (18<h && h<20) {
        var greeting = "Good evening"
    } else if (20<h<24 || 0<h<5) {
        var greeting = "Good night"
    }
    //var siteName =  String(window.location.href)
    console.log(window.location.href)
    if (window.location.href.includes("index.html")) {
        document.getElementById("dynamic").innerHTML = (greeting+', I am Joseph');
    } else {
        console.log(window.location.href)
    }
}
greetingFunc()