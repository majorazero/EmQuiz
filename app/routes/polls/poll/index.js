import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(){
    const poll = this.modelFor('polls.poll'); //retrieve a specfic model for this particular poll
    //console.log(this.get('store').troubleshoot()); This returned a value, store is properly hooked on.
    return this.get('store').createVote(poll); //creates votes base on this poll.
  },
  actions:{
    toggleOption(vote,option){ //lets you access the model in the index route.
      vote.toggleOption(option);
    }
  }
});
