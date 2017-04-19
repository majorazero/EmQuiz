import Ember from 'ember';

export default Ember.Component.extend({
  percentage: Ember.computed('option.voteCount','poll.voteCount',function(){
    const pollVoteCount = this.get('poll.voteCount');
    if (pollVoteCount <= 0){
      return 0;
    } else{
      return this.get('option.voteCount') / pollVoteCount;
    } // this will return 0-1, but we'll format it to percentage on a helper isntead of here so we don't confuse DISPLAY with calculation
  })
});
