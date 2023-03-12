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
const expiration = document.querySelector(".expiration");
//card cvc
const cvc = document.getElementById("cvc")
const cardcvc = document.querySelector(".cvc");


let regNumMAx = /^[0-9]{2}$/;
let regName =/^([A-Z][a-z]+)+\s([A-Z][a-z]+)+$/;
let numberlength= 16;


confirmbutton.addEventListener('click', () => {
    //holder name on the card
    if(regName.test(cardHolder.value)){
        holderName.innerHTML = cardHolder.value;
    }
    //incorect name inputs
    WrongName(cardHolder);
    WrongCardNumber();
    //cvc
    cardcvc.innerHTML = cvc.value;
    // date
    if(regNumMAx.test(carddate.value)){
        if(carddate.value > 0 && cardyear.value > 0){
    expiration.innerHTML = carddate.value + "/" + cardyear.value;
    }
    }
    
})


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
        console.log(wrongNumber);
    } else{
        cardNumberInput.style.border = ' 1px solid #DFDEE0';
        wrongNumber.style.display = 'none';
    }
}


//To instantly reflect the value of an input. x-is input y - is output
function copyinput(x,y){
    x.addEventListener("input", () => {
        y.innerHTML= x.value;
    } );
}
copyinput(cardHolder,holderName);
copyinput(cvc , cardcvc);


// საჭიროა ცალ ცალკე პ და ჩასასწორებელია.
function copyDate(x,y,c){
    let cardcvc=c.innerHTML;
    x.addEventListener('input', () => {
        cardcvc = "/" + x.value;
    })

    y.addEventListener('input', () => {
        cardcvc += y.value;
    })

}

copyDate(carddate,cardyear,expiration);

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



function cardNumberRegex(){
    if(regCardNumber.test(x.value)){
        
    }
}

