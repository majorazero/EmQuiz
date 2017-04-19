import Ember from 'ember';

export function formatPercentage(number) {
  return `${number*100}%`; //this is a es2015 BACKTICK `` neat little trick
}

export default Ember.Helper.helper(formatPercentage);
