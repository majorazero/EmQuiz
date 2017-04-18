import Ember from 'ember';

export default Ember.Object.extend({
    toggleOption(option){ //enables the toggle option on the object Vote
      if (this.get('option') === option){ //enables a deselect
        option = null;
      }
      this.set('option',option); //generates a characterstic call option and sets that to the one you clicked
    }
});
