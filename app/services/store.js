import Ember from 'ember';
import Poll from 'EmQuiz/models/poll';
import Option from 'EmQuiz/models/option';

const polls = []; //This stores an array of poll Objects, with a poll being defined by a Survey with Options you can pick from

let poll = Poll.create({
  id: '1',
  options: [], //options are technically not limited so you can put as many choices as you want
  prompt: 'Which of the following is NOT part of the Woodland Wanderer Way?',
  votes: [] //stores what the user decided to vote for
});
//creates the options users get to pick from from the poll we JUST created.
poll.get('options').pushObjects([ //retrieves the 'options property array' of the property we just made
  Option.create({id: '1', label: 'Honesty', poll: poll}),
  Option.create({id: '2', label: 'Integrity', poll: poll}),
  Option.create({id: '3', label: 'Impatience', poll: poll})
]);
polls.pushObject(poll); //insert created poll into the array.

//we'll repeat the above step for a second poll.

poll = Poll.create({ //let no longer neccesary.
  id: '2',
  options: [], //options are technically not limited so you can put as many choices as you want
  prompt: 'Which poisonous plant are you?',
  votes: [] //stores what the user decided to vote for
});
//creates the options users get to pick from from the poll we JUST created.
poll.get('options').pushObjects([ //retrieves the 'options property array' of the property we just made
  Option.create({id: '4', label: 'Nightshade', poll: poll}),
  Option.create({id: '5', label: 'Hemlock', poll: poll}),
  Option.create({id: '6', label: 'Rhubarb', poll: poll})
]);
polls.pushObject(poll); //insert created poll into the array.

export default Ember.Service.extend({
  findAllPolls(){ //allows access to the generated data
    return polls;
  }
});
