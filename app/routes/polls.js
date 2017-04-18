import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(), //so this model can use the store. 
  model(){
    return this.get('store').findAllPolls(); //sets the 'model' of 'polls' to the polls array in the store
  }
});
