/**
 * first 100 ---> 100
 * 101 to 200 ---> 90
 * above 200 ---> 70
 **/ 

function multiLayer(quantity){
  const first100 = 100;
  const second100 = 90;
  const above200 = 70;

  if(quantity <= 100){
    const total = quantity * first100;
    return total;
  }
  else if(quantity <= 200){
    const first100Total = 100 * first100;
    const remainingQuantity = quantity - 100;
    const remainingQuantityPrice = remainingQuantity * second100;
    const total = first100Total + remainingQuantityPrice;
    return total;
  }
  else{
    const first100Total = 100 * first100;
    const second100Total = 100 * second100;
    const remainingQuantity = quantity - 200;
    const remainingQuantityPrice = remainingQuantity * above200;
    const total = first100Total + second100Total + remainingQuantityPrice;
    return total;
  }
}

const multiLayerDiscouont = multiLayer(245);
console.log(multiLayerDiscouont);