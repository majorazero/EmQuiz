import Ember from 'ember';
import Option from 'em-quiz/models/option';
import Poll from 'em-quiz/models/poll';
import Vote from 'em-quiz/models/vote';


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

export default Ember.Service.extend({ //please remember these are properties in some kind of object... -_-
  findAllPolls(){ //allows access to the generated data
    return polls;
  },
  findPoll(id){
    return this.findAllPolls().findBy('id',id); //access the poll array and return a specific poll by id
  },
  createVote(poll){
    return Vote.create({poll: poll});
  },
  saveVote(vote){
    const poll = vote.get('poll'); //access the poll through the vote model, refer to createVote(vote)
    poll.get('votes').pushObject(vote); //pushes it into the poll votes array
  },
  createPoll(){ //creates a Poll
    const poll = Poll.create({ //we use a const so the orignal poll made can't be modified to something else (best practice)
      options: [],
      votes: []
    });
    poll.get('options').pushObjects([ //push an array of 3 empty options into this blank poll.
      Option.create({poll:poll}),
      Option.create({poll:poll}),
      Option.create({poll:poll})
    ]);
    return poll; //basically we create an empty poll template we can save stuff to.
  },
  savePoll(poll){ //pretty straightforward
    polls.pushObject(poll); //adds poll to the collection
    poll.set('id',polls.length);
  },
  troubleshoot(){ //using this to test if store is properly hooked up
    return 3;
  }
});
