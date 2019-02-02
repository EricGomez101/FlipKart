import { helper } from '@ember/component/helper';

export function quantityOfItems(array) {
  const [items] = array
  return items.length;
}

export default helper(quantityOfItems);
