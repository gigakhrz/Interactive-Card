//ბათთონი რომელიც გამოაგზავნის საბოლოო ინფორმაციას რაც უნდა აისახოს ბარათზე
const confirmbutton = document.querySelector(".confirm");
//მფლობელის ინფუთი და ბარათზე აღსაწერი პ თეგი
const cardHolder = document.getElementById("cardholder");
const holderName = document.querySelector(".holdername");
const wrongNameP = document.querySelector('.wrong-name');
//card number input and p tag
const cardNumberInput = document.getElementById("cardnumber");
const cardNumber = document.querySelector(".card-number");
const wrongNumber = document.querySelector('.wrong-number');
//Card expiration date
const carddate = document.getElementById("date");
const cardyear = document.getElementById("year");
const expirationMonth = document.querySelector(".expiration");
const expirationYear = document.querySelector(".expiration-2");
const wrongExpiration = document.querySelector('.wrong-expiration');
const wrongYearValue = document.querySelector('.wrong-year');
//card cvc
const cvc = document.getElementById("cvc")
const cardcvc = document.querySelector(".cvc");
const wrongCvc = document.querySelector('.wrong-cvc');
//section inputs and result;
const inputContainer = document.querySelector('.input-container');
const resultContainer = document.querySelector('.result-container');
//continue button
const continueButton = document.querySelector('.continue');


// input regexs
let regName =/^([A-Z][a-z]+)+\s([A-Z][a-z]+)+$/;
let regCvc = /^\d{3,4}$/;
let regMonth = /^(?:[1-9]|1[0-2])$/;
let regYear = /^(?:2[3-9]|[3-4][0-9])$/;
// curd number lentgh
let numberlength= 16;

confirmbutton.addEventListener('click', () => {
    //incorect inputs
    WrongName(cardHolder);
    WrongCardNumber();
    wrongCardCvc(cvc);
    wrongMonth();
    wrongYear();
    
    //when click button chek all inputs
    if(regName.test(cardHolder.value) && regMonth.test(carddate.value) &&
     regYear.test(cardyear.value) && cardNumberInput.value.length === numberlength && 
     regCvc.test(cvc.value)){
        inputContainer.style.display = 'none'
        resultContainer.style.display = 'flex'
     }
    
})

//The function splits the input value into parts and adds a skip after every 4 digits
function copycardnumber(x,y){
    x.addEventListener("input" , () => {
        let cardnumbervalue = x.value;
        //ყოფს 16 ციფრს ნაწილებად .
        let chunks = cardnumbervalue.match(/.{1,4}/g);
        // ამატებს სიცარიელეს.
        let joinskip = chunks.join(" ");
        y.innerHTML= joinskip;
    })
}

copycardnumber(cardNumberInput,cardNumber);


//incorect inputs result
function WrongName(x){
    if(!regName.test(x.value)){
        x.style.border = '1px solid red';
        wrongNameP.style.display = 'block';
    }else{
        x.style.border = ' 1px solid #DFDEE0';
        wrongNameP.style.display = 'none';
    }
}



function WrongCardNumber(){
    if(cardNumberInput.value.length < numberlength){
        cardNumberInput.style.border = '1px solid red';
        wrongNumber.style.display = 'block';
    } else{
        cardNumberInput.style.border = ' 1px solid #DFDEE0';
        wrongNumber.style.display = 'none';
    }
}

function wrongCardCvc(x){
    if(!regCvc.test(x.value)){
        x.style.border = '1px solid red';
        wrongCvc.style.display = 'block';
    }else{
        x.style.border = ' 1px solid #DFDEE0';
        wrongCvc.style.display = 'none';
    }
}

function wrongMonth(){
    if(!regMonth.test(carddate.value)){
        carddate.style.border = '1px solid red';
        wrongExpiration.style.display = 'block';
    }else{
        carddate.style.border = '1px solid #DFDEE0';
        wrongExpiration.style.display = 'none';
    }
}

function wrongYear(){
    if(!regYear.test(cardyear.value)){
        cardyear.style.border = '1px solid red';
        wrongYearValue.style.display = 'block';
    }else{
        cardyear.style.border = '1px solid #DFDEE0';
        wrongYearValue.style.display = 'none';
    }
}



//To instantly reflect the value of an input. x-is input y - is output
function copyinput(x,y){
    x.addEventListener("input", () => {
        y.innerHTML= x.value;
    } );
}
//for only year
function copyYear(){
    cardyear.addEventListener("input", () => {
        expirationYear.innerHTML= "/" + cardyear.value;
    } );
}


copyinput(cardHolder,holderName);
copyinput(cvc , cardcvc);
copyinput(carddate,expirationMonth);
copyYear();


// continiu button will make all value at the starting position
function continue1(){
    cardHolder.value = "";
    cardNumberInput.value = "";
    cvc.value = "";
    carddate.value = "";
    cardyear.value = "";
    holderName.textContent = "Jane Appleseed";
    cardNumber.textContent = "0000 0000 0000 0000";
    expirationMonth.textContent = '00';
    expirationYear.textContent = "/00";
    cardcvc.textContent = "000";
    resultContainer.style.display = 'none';
    inputContainer.style.display = 'flex';
}

continueButton.addEventListener("click", () => {
    continue1();
})




