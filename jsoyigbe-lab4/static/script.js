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
    
    if (window.location.href.includes("index.html")) {
        document.getElementById("dynamic").innerHTML = (greeting+', I am Joseph');
    } else {
        console.log(window.location.href)
    }
}
greetingFunc()

function addYear() {
    var d = new Date()
    var currentYear = d.getFullYear()
    console.log(currentYear)
    document.getElementById("copyYear").innerHTML += currentYear
}

function showList() {
    funList = document.getElementById("funList");
    funList.style.display="block"
    const button1 = document.getElementById("showButton");
    if (button1) {
        button1.style.display = "none";
    }
}

$(document).ready(function() {
    $("#readMoreBtn").click(function() {
        var hidden = $("#hiddenIntro");

        hidden.slideToggle(200,function() {
            if (hidden.is(":visible")) {
                $("#readMoreBtn").text("Read less");
            } else {
                $("#readMoreBtn").text("Read more");
            }
        });
    });
});

function checkForm() {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const comment = document.getElementById("comment")
    if (!name.checkValidity()) {
        document.getElementById(name).innerHTMl = name.validationMessage;
    }
    if (!email.checkValidity()) {
        document.getElementById(email).innerHTMl = email.validationMessage;
    }
    if (!comment.checkValidity()) {
        document.getElementById(comment).innerHTMl = comment.validationMessage;
    }
}
