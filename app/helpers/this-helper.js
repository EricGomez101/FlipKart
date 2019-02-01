import { helper } from '@ember/component/helper';

export function thisHelper(params/*, hash*/) {
  return params + " ya mum";
}

export default helper(thisHelper);
