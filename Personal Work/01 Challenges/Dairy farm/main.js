//fetching data from index.html
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


const signInForm = document.getElementById('signInForm');
const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const val3 = document.getElementById('val3');
const val4 = document.getElementById('val4');
const val5 = document.getElementById('val5');

let msG = document.getElementById('msG');


output1 = document.getElementById('A');
output2 = document.getElementById('B');
output3 = document.getElementById('C');
output4 = document.getElementById('D');
output5 = document.getElementById('E');

//functionality

signInForm.addEventListener('submit', onSignIn);


function onSignIn (e) {
  e.preventDefault();

  if(val1.value === '' || val2.value === '' || val3.value === '' || val4.value === '' || val5.value === '') {
		msG.classList.add('error');
		msG.innerHTML = 'Please fill in all the fields.';

    setTimeout(() => msG.remove(), 3000);
    
  }else{
    
//milk totals
output1.innerHTML = val1.value;
output2.innerHTML = val2.value;
output3.innerHTML = val3.value;
output4.innerHTML = val4.value;
output5.innerHTML = val5.value;


let totals = document.getElementById('totals');

let sum;

sum = +val1.value + +val2.value + +val3.value + +val4.value + +val5.value;

totals.innerHTML = sum;

//value for milk produced
var totalAmountDay = document.getElementById('totalAmountDay');

totalAmountDay.innerHTML = `${sum*45} Shillings`;

var totalAmountWeek = document.getElementById('totalAmountWeek');

totalAmountWeek.innerHTML = `${sum*315} Shillings`;

var totalAmountYear = document.getElementById('totalAmountYear');

totalAmountYear.innerHTML = `${sum*16425} Shillings`;

//amount per year

//january
var totalAmountJanuary = document.getElementById('totalAmountJanuary');

totalAmountJanuary.innerHTML = `${sum*1395} Shillings`;

//february
var totalAmountFebruary = document.getElementById('totalAmountFebruary')

totalAmountFebruary.innerHTML = `${sum*1305} Shillings`;

//march
var totalAmountMarch = document.getElementById('totalAmountMarch');

totalAmountMarch.innerHTML = `${sum*1395} Shillings`;


//april
var totalAmountApril = document.getElementById('totalAmountApril');

totalAmountApril.innerHTML = `${sum*1350} Shillings`;

//may
var totalAmountMay = document.getElementById('totalAmountMay');

totalAmountMay.innerHTML = `${sum*1395} Shillings`;

//june
var totalAmountJune = document.getElementById('totalAmountJune');

totalAmountJune.innerHTML = `${sum*1350} Shillings`;

//july
var totalAmountJuly = document.getElementById('totalAmountJuly');

totalAmountJuly.innerHTML = `${sum*1395} Shillings`;

//August
var totalAmountAugust = document.getElementById('totalAmountAugust');

totalAmountAugust.innerHTML = `${sum*1395} Shillings`;

//september
var totalAmountSeptember = document.getElementById('totalAmountSeptember');

totalAmountSeptember.innerHTML = `${sum*1350} Shillings`;

//october
var totalAmountOctober = document.getElementById('totalAmountOctober');

totalAmountOctober.innerHTML = `${sum*1395} Shillings`;

//november
var totalAmountNovember = document.getElementById('totalAmountNovember');

totalAmountNovember.innerHTML = `${sum*1350} Shillings`;

//december
var totalAmountDecember = document.getElementById('totalAmountDecember');

totalAmountDecember.innerHTML = `${sum*1395} Shillings`;

    
    val1.value = '';
    val2.value = '';
    val3.value = '';
    val4.value = '';
    val5.value = '';

  }
}