const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacter = "~!@#$%^&*()[]{}\|,.<>?";

// Fetching Selectors

const displayBox = document.getElementById('pass-box');
const characterCount = document.getElementById('total-char');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');
const sliderValue = document.getElementById("sliderValue");


const getRandomData = (dataset) => {

    return dataset[Math.floor(Math.random() * dataset.length)]
}

const passwordGenerator = (password = "" ) => {
    if(upperInput.checked) {
        password += getRandomData(upperCase);
    }
    if(lowerInput.checked) {
        password += getRandomData(lowerCase);
    }
    if(numberInput.checked) {
        password += getRandomData(numbers);
    }
    if(symbolInput.checked) {
        password += getRandomData(specialCharacter);
    }

    // is mae mane recursive function ko use kia hai ku k yae or loop dono same kam kar rahe hai ishe liye mane truncate string ko use kia hai warna yahe chezz loop say bhe ho sakti hai recursive bohat important role play karta hai like code less do more thats why i use it loop code ko lamba lay jata

    if (password.length < characterCount.value) {
        return passwordGenerator(password)
    }

    displayBox.innerText = truncateString(password,characterCount.value)
    
} 

document.getElementById("btn-1").addEventListener(
    "click",
    function() {
        passwordGenerator();
    }

)

// yae function isliye use kiya hai ku k mane uper loop ka istemal nhi kia hai jitna kam code hoga outna acha hai.
// yae function karta kya hai isko use isleya kiya tha ku k jab user password generate kar raha tha to like 10 words ka 
// password chaye tha ousko to password 12 words generate ho kar araha hai 4 lower uppercase symbol or number is waja say isko use 
// kiya hai to yae extra string ko hata dyga or desire layout lay aie ga


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

// yae jab referesh hoga tab aie ga or agar isko remove bhe kardiya gye to koi farak ni paray ga bas refresh pae value nhi aie ge 
sliderValue.textContent = characterCount.value; 

// yae code tab chaly ga jab slider ko move kiya gye ga 
characterCount.addEventListener('input', ()=>{
    sliderValue.textContent = characterCount.value;
});


// Auto Generate Code 
function autoPassword() {
    const length = 8;
    const pwdgen = upperCase + lowerCase + numbers + specialCharacter;
    let password = "";
  
    for (let i = 0; i < length; i++) {
      password += pwdgen[Math.floor(Math.random() * pwdgen.length)];
    }
  
    displayBox.innerHTML = password;
  }
  
  autoPassword();

function copyPassword() {
  const displayBox = document.getElementById('pass-box');
  const range = document.createRange();
  range.selectNode(displayBox);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  }
  copyPassword();
