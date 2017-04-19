import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(){
    return this.get('store').createPoll();
  },
  actions: {
    createPoll(poll){
      this.get('store').savePoll(poll);
      this.transitionTo('polls.poll',poll);
    }
  }
});
