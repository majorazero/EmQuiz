import Ember from 'ember';

export default Ember.Object.extend({
  voteCount: Ember.computed.alias('votes.length') //calculates the total amount of votes the array has
});
