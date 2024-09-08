// Your task is to calculate the total budget required to buy electronics:

function getTotalCost(laptops,tablets,mobiles){
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const laptopCost = laptop * laptops;
  const tabletCost = tablet * tablets;
  const mobileCost = mobile * mobiles;

  const total = laptopCost + tabletCost + mobileCost;
  return total;
}

const totalBudget = getTotalCost(3,2,4);
console.log(totalBudget)