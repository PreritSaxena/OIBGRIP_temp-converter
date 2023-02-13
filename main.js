var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var option_from, option_to;

// now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
option_from = inputType.value;
option_to = resultType.value;

function myResult() {
  
  option_from = inputType.value;
  option_to = resultType.value;

  //adding formula
  if (option_from === "celsius" && option_to === "fahreheit") {
    //this is celsius to fahreheit formula
    result.value = (Number(input.value) * 9/5) + 32 ;
  } else if (option_from === "celsius" && option_to === "kelvin") {
    //this is celsius to kelvin formula
    result.value = Number(input.value) + 273.15;
  } else if (option_from === "celsius" && option_to === "celsius") {
    //this is celsius to celsius formula
    result.value = input.value;
  }
   


  if (option_from === "fahreheit" && option_to === "celsius") {
    //this is fahreheit to celsius formula
    result.value = (Number(input.value) - 32) * 5/9 ;
  } else if (option_from === "fahreheit" && option_to === "kelvin") {
    //this is fahreheit to kelvin formula
    result.value = (Number(input.value) -32) * 5/9 + 273.15;
  } else if (option_from === "fahreheit" && option_to === "fahreheit") {
    //this is fahreheit to fahreheit formula
    result.value = input.value;
  }


  if (option_from === "kelvin" && option_to === "celsius") {
    //this is celsius to fahreheit formula
    result.value = (Number(input.value) - 273.15)  ;
  } else if (option_from === "kelvin" && option_to === "fahreheit") {
    //this is celsius to kelvin formula
    result.value = (Number(input.value) -273.15) * 9/5 + 32;
  } else if (option_from === "kelvin" && option_to === "kelvin") {
    //this is celsius to celsius formula
    result.value = input.value;
  }
}

 