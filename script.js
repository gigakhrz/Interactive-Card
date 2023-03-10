//ბუთთონი რომელიც გამოაგზავნის საბოლოო ინფორმაციას რაც უნდა აისახოს ბარათზე
const confirmbutton = document.querySelector(".confirm");
//მფლობელის ინფუთი და ბარათზე აღსაწერი პ თეგი
const cardHolder = document.getElementById("cardholder");
const holderName = document.querySelector(".holdername");
//card number input and p tag
const cardNumberInput = document.getElementById("cardnumber");
const cardNumber = document.querySelector(".card-number");
//Card expiration date
const carddate = document.getElementById("date");
const cardyear = document.getElementById("year");
const expiration = document.querySelector(".expiration");
//card cvc
const cvc = document.getElementById("cvc")
const cardcvc = document.querySelector(".cvc");



confirmbutton.addEventListener('click', () => {
    //holder name on the card
    holderName.innerHTML = cardHolder.value;
    //
    addSkip();
    // date
    expiration.innerHTML = carddate.value + "/" + cardyear.value;
    //cvc
    cardcvc.innerHTML = cvc.value;
})

//The function splits the input value into parts and adds a skip after every 4 digits

function addSkip(){
    let cardnumbervalue = cardNumberInput.value;
    //ყოფს 16 ციფრს ნაწილებად .
    let chunks = cardnumbervalue.match(/.{1,4}/g);
    // ამატებს სიცარიელეს.
    let joinskip = chunks.join(" ");
    cardNumber.innerHTML= joinskip;

}
