const jim = 65;
const tim = 89;
const kim = 169;

if (jim > tim && jim > kim){
  console.log('jim is the ultimate boss')
}
else if(tim > jim && tim > kim){
  console.log('Tim is the boss')
}
else{
  console.log('Kim is the boss')
}

function maxOfThree (num1,num2,num3){
  if (num1 > num2 && num1 > num3){
    return num1;
  }
  else if (num2 > num1 && num2 > num3){
    return num2;
  }
  else{
    return num3;
  }
}

const max3 = maxOfThree(90,99,120);
console.log('The highest number is: ', max3);

const max = Math.max(12,34,64,676,88,456,756,90);
console.log(max)

