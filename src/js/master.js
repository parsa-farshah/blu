///////////////////////////////////// card name
let _name = document.querySelector("#name");
let _nameCard = document.querySelector("#nameCard");
_name.addEventListener("input", (e) => {
  let nameVal = e.target.value;
  _nameCard.innerText = nameVal;
  console.log(nameVal);
});
//////////////////////////////////// card number
let cardNumber1 = document.querySelector("#cardNumber1");
let cardNumber2 = document.querySelector("#cardNumber2");
let cardNumber3 = document.querySelector("#cardNumber3");
let cardNumber4 = document.querySelector("#cardNumber4");
let cardNumberInps = document.querySelectorAll("#cardNumberInps>input");
// console.log(cardNumber1);
cardNumberInps.forEach((val, i) => {
  val.addEventListener("input", () => {
    if (val.value.length >= 4 && val.nextElementSibling) {
      val.nextElementSibling.focus();
      val.value = val.value.slice(0, 4);
    } else if (val.value.length >= 4) {
      val.value = val.value.slice(0, 4);
    } else if (val.value.length == 0) {
      val.previousElementSibling.focus();
    }
    cardNumber1.innerText = cardNumberInps[0].value || "####";
    cardNumber2.innerText = cardNumberInps[1].value || "####";
    cardNumber3.innerText = cardNumberInps[2].value || "####";
    cardNumber4.innerText = cardNumberInps[3].value || "####";
  });
});

//////////////////////////// exp
let expInpt = document.querySelectorAll("#expInpt > input");
console.log(expInpt);
let year = document.querySelector("#year");
let month = document.querySelector("#month");
expInpt.forEach((item) => {
  item.addEventListener("input", () => {
    if (item.nextElementSibling && item.value.length >= 4) {
      item.nextElementSibling.focus();
    }
    expInpt[1].value = expInpt[1].value.slice(0, 2);
    year.innerText = expInpt[0].value || "####";
    month.innerText = expInpt[1].value || "##";
  });
});

////////////////////////////////////// cvv2
let cvvCard = document.querySelector("#cvvCard");
let cvv2Inp = document.querySelector("#cvv2Inp");
cvv2Inp.addEventListener("input", () => {
  if (cvv2Inp.value.length > 3) {
    cvv2Inp.value = cvv2Inp.value.slice(0, 3);
  }
  cvvCard.innerText = cvv2Inp.value || "###";
});

