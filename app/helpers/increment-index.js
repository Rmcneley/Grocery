import {
  helper
} from '@ember/component/helper';

export function incrementIndex(index /*, hash*/ ) {
  let idx = Number(index);
  return idx + 1;
}

export default helper(incrementIndex);
