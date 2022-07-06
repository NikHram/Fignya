let goodButton = document.querySelector("#btn-patriot");
let shitButton = document.querySelector("#btn-faggot");
let comment = document.querySelector("p");
let i = 0;
let k = 0;
shitButton.addEventListener("mouseover", () => {
    i++;
    switch (shitButton.style.order) {
        case "1":
            shitButton.style.order = "2";
            goodButton.style.order = "1";
            break;
        case "2":
            shitButton.style.order = "1";
            goodButton.style.order = "2";
            break;
    }
    if (i>10) {
        shitButton.innerHTML = "Залишити солов'їну";
    }
    if (i>10 && comment.innerHTML === "Молодець! Гарний вибір)") {
        goodButton.innerHTML = "А що ти ще хочеш вибрати?";
        shitButton.innerHTML = "А що ти ще хочеш вибрати?";
    }
});

function rightChoice() {
    comment.innerHTML = "Молодець! Гарний вибір)";
    k++;
    if (k>5) {
        comment.innerHTML = "Та все, годі тикати, ти зробив правильний вибір.";
    }
}