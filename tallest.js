const height = [65,66,68,73,78,60,100]

function getMax(numbers){
  let max = '';  // let max = numbers[0]; ==> It also can be used
  for (const num of numbers){
    if(num > max){
      max = num;
    }
  }
  return max;
}

const max = getMax(height);
console.log('max value is ',max);

// min number

const height1 = [65,66,68,73,78,60,100,56]

function getMin(numbers){
  let min = numbers[0];  
  for (const num of numbers){
    if(num < min){
      min = num;
    }
  }
  return min;
}

const min = getMin(height1);
console.log('min value is ',min);