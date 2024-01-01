const submit = document.querySelector(".submit");

submit.addEventListener(
  "click", () => {

    const operator = document.getElementById("operators").value;
    const result = document.querySelector(".para");
    const input1 = document.querySelector(".input1").value;
    const input2 = document.querySelector(".input2").value;
    
    switch(operator){
      case "addition":
      result.innerHTML = (Number)(input1) + (Number)(input2);
      break;
    case "subtraction":
      result.innerHTML = +input1 - +input2;
      break;
    case "Division":
      result.innerHTML = +input1 / +input2;
      break;
    case "multiplication":
      result.innerHTML = +input1 * +input2;

      }
    
  }
);






