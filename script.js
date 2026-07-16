// ページ読み込み時のアニメーション

window.addEventListener("load", () => {

    const hero = document.querySelector(".profile");

    hero.style.opacity = "0";

    hero.style.transform = "translateY(30px)";


    setTimeout(() => {

        hero.style.transition = "1s";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0)";


    }, 300);

});




// スクロールでカード表示

const cards = document.querySelectorAll(".card");


window.addEventListener("scroll", () => {


    cards.forEach(card => {


        const position = card.getBoundingClientRect().top;


        const screenHeight = window.innerHeight;



        if(position < screenHeight - 100){


            card.style.opacity = "1";

            card.style.transform = "translateY(0)";


        }


    });


});




// 初期状態

cards.forEach(card => {


    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.8s";


});





// ボタン動作

const button = document.querySelector("button");


button.addEventListener("click", () => {


    alert("見てくれてありがとうございます🌸");


});