var btn = document.getElementById("button-addon2");
var input = document.getElementById("input-number");
var babyImg = document.getElementById("show-number-2");
var adultImg = document.getElementById("show-number-1");
var msgText = document.getElementById("msg-text");
var closeBtn_1 = document.getElementById("close-btn-1");
var closeBtn_2 = document.getElementById("close-btn-2");



btn.addEventListener("click",function(){
    var inputNumber=input.value;
    if(inputNumber>=18){
        console.log(adultImg);
        adultImg.style.display="block";
        babyImg.style.display="none";
        msgText.innerText="Are you a Child or Adult ?";
        msgText.style.display="none";
    }
    else if(inputNumber>0 && inputNumber<18)
    {
    adultImg.style.display="none";
    babyImg.style.display="block";
    msgText.innerText="Are you a Child or Adult ?";
    msgText.style.display="none";
    }
    else{
        msgText.innerText="Invalid Age";
        adultImg.style.display="none";
        babyImg.style.display="none";
        msgText.style.display="block";
        input.value="";
    }
})
closeBtn_1.addEventListener("click",function(){
    msgText.style.display="block";
    adultImg.style.display="none";
    input.value="";
})
closeBtn_2.addEventListener("click",function(){
    msgText.style.display="block";
    babyImg.style.display="none";
    input.value="";
})


