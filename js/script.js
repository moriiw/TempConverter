let $ = document;
let cantigerd = $.querySelector(".C");
let farenhait = $.querySelector(".F");
let convertInput = $.querySelector("#converter");
let resultBox = $.querySelector(".result");
let convertBtn = $.querySelector(".convertButton");
let resetBtn = $.querySelector(".resetButton");
let changeBtn = $.querySelector(".changeButton");
let falgConvert = false;
let userValue, convert = null;

function swap() {
  if (falgConvert) {
    convertInput.setAttribute("placeholder", "°C");
    $.title = "Conver °C To °F";
    cantigerd.innerHTML = "°C";
    farenhait.innerHTML = "°F";
    falgConvert = false;
  } else {
    convertInput.setAttribute("placeholder", "°F");
    $.title = "Conver °F To °C";
    cantigerd.innerHTML = "°F";
    farenhait.innerHTML = "°C";
    falgConvert = true;
  }
}

function Reset() {
  convertInput.value = "";
  resultBox.innerHTML = "";
}

function CovertEvent() {
  if (convertInput === "" || isNaN(convertInput.value)) {
    resultBox.innerHTML = "Please enter the correct value";
    resultBox.style.color = "#EF4444";
    setTimeout(function () {
      resultBox.innerHTML = "";
      resultBox.style.color = "rgb(255, 255, 102)";
    }, 5000);
  } else {
    if (falgConvert) {
      // F TO C
      userValue = convertInput.value;
      convert = (userValue - 32) * (5 / 9);
      resultBox.innerHTML = userValue + " °F to " + convert + " °C";
    } else {
      // C To F
      userValue = convertInput.value;
      convert = userValue * (9 / 5) + 32;
      resultBox.innerHTML = userValue + " °C to " + convert + " °F";
    }
  }
}

convertBtn.addEventListener("click", CovertEvent);
resetBtn.addEventListener("click", Reset);
changeBtn.addEventListener("click", swap);


// Formul
// C TO F => (C * 9/5) + 32
// F TO C => (F - 32) * 5/9
