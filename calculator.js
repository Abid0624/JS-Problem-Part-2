function add(num1,num2){
  return num1 + num2;
}

function subtract(num1,num2){
  return num1 - num2;
}

function multiply(num1,num2){
  return num1 * num2;
}

function divide(num1,num2){
  return num1 / num2;
}

function calculator(a,b,operation){
  if(operation === 'add'){
    const result = add(a,b);
    return result;
  }
  else if(operation === 'subtract'){
    const result = subtract(a,b);
    return result;
  }
  else if(operation === 'multiply'){
    // const result = multiply(a,b); ===> both are same
    // return result;
    return multiply(a,b)
  }
  else if(operation === 'divide'){
    return divide(a,b);
  }
  else{
    return "Only 'add','subtract','multiply','divide' is allowed"
  }
}

const result = calculator(7,5, 'add');
console.log(result);