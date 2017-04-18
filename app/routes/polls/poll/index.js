import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(){
    const poll = this.modelFor('polls.poll'); //retrieve a specfic model for this particular poll
    //const poll = {id: 1};
    //console.log(poll);
    //console.log(this.get('store').troubleshoot()); This returned a value, store is properly hooked on.
    return this.get('store').createVote(poll); //creates votes base on this poll.
  }
});
