import { helper } from '@ember/component/helper';

export function quantityOfItems(items) {
  return items[0].length;
}

export default helper(quantityOfItems);
