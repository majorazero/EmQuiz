import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params){
    return this.get('store').findPoll(params.poll_id); //a unique poll page will set model to the poll based on poll_id
    //console.log(this.get('store').troubleshoot());
  }
});
