import Ember from 'ember';

export default Ember.Object.extend({
  voteCount: Ember.computed('poll.votes.[].options',function(){ //[].options, invalidates some values. []-> added/removed will retrigger, .option for if a value is changed it'll retrigger
    return this.get('poll.votes').filterBy('option',this).length; //access the votes array and will compare the votes with the option selected. ejects the toatl amount
  })
});
