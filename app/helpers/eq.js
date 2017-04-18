import Ember from 'ember';

export function eq(params) { //this takes in an array
  return params[0] === params[1]; //this is basically a comparison statement that we'll be using since handlebars can't handle logic.
}

export default Ember.Helper.helper(eq);
