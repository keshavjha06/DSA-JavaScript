function profitLossWithSeparateIfs(cp, sp) {
  if (sp > cp) {
    console.log('Profit is ' + (sp - cp));
  }
  if (cp > sp) {
    console.log('Loss is ' + (cp - sp));
  }
  if (sp === cp) {
    console.log('No Profit No Loss');
  }
}

function profitLoss(cp, sp) {
  if (sp > cp) {
    console.log('Profit is ' + (sp - cp));
  } else if (cp > sp) {
    console.log('Loss is ' + (cp - sp));
  } else {
    console.log('No Profit No Loss');
  }
}

const costPrice = 500;
const sellingPrice = 650;
profitLossWithSeparateIfs(costPrice, sellingPrice);
profitLoss(costPrice, sellingPrice);
