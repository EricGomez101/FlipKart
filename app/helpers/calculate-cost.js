import { helper } from '@ember/component/helper';

export function calculateCost(params/*, hash*/) {
  const [items] = params;
  return items.reduce((accu, curr) => accu + curr.price, 0);
}

export default helper(calculateCost);
