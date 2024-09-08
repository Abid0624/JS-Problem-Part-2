function multiply(num1,num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Please provide a number'
  }
  const mult = num1 + num2;
  return mult;
}

const result = multiply(6,'seven');
// console.log(result);

function fullName(first,second){
  if(typeof first !== 'string' || typeof second !== 'string'){
    return 'Name should be a string'
  }
  const full = first + ' ' + second;
  return full;
}

const full = fullName(5,7)
// console.log(full);

function getPrice(product){
  if(typeof product !== 'object'){
    return 'Please provide an object'
  }
  const price = product.price;
  return price;
}

// const price = getPrice({name: 'chulkani dandi', price: 35, color: 'blue'})
const price = getPrice(5)
// console.log(price);

function getSecond(number){
  if(Array.isArray(number) === false){
    return 'Please provide an array'
  }
  const second = number[1];
  return second;
}

// const second = getSecond([45, 62, 3])
const second = getSecond(8)
console.log(second);