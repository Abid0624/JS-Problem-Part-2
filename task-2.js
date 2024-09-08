// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(names){
  let small = names[0];
  for(const name of names){
    if(name.length < small.length){
      small = name
    }
  }
  return small;
}


const smallName = getSmallestName(heights2);
console.log(smallName);