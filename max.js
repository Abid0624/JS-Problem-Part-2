const disha = 56;
const salman = 67;

if(disha > salman){
  console.log('disha will get the strawberry')
}
else{
  console.log('salman will get the strawberry')
}

// inside a function

function getMax(num1,num2){
  if(num1 > num2){
    return num1;
  }
  else{
    return num2;
  }
}

const max1 = getMax(56,87);
const max2 = getMax(97,77);
const ultimateMax = getMax(max1,max2);

console.log('max of two is: ', ultimateMax)