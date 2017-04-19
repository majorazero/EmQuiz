import Ember from 'ember';

export default Ember.Object.extend({
  voteCount: Ember.computed.alias('votes.length'), //calculates the total amount of votes the array has
  optionsSorting: ['voteCount:desc'], //dictates how it'll be sorted
  sortedOptions: Ember.computed.sort('options','optionsSorting') //the actual sorting code
});
