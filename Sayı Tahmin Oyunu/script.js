"use strict";


let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    console.log(secretnumber, typeof secretnumber);


    //iput eğer boş girilirse

    if (!guess) {
        displayMessage("Bir sayı giriniz.");
    }

    //sayılar birbiriyle eşleşirse
    else if (guess === secretnumber) {
        displayMessage("Doğru tahmin!");
        document.querySelector(".number").textContent = secretnumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;

            document.querySelector(".highscore").textContent = highscore;
        }
    }

    //sayılar birbiriyle eşleşmiyor ise
    else if (guess !== secretnumber) {
        if (score > 1) {
            displayMessage(guess > secretnumber ? "Çok yüksek" : "çok düşük");
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("oyunu kaybettin");
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Tahmin ediliyor...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.background = "#222";
    document.querySelector(".number").style.width = "15rem";
});