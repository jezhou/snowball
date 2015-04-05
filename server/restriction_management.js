Meteor.startup(function(){
  Meteor.setInterval(function(){

    RestrictionCollection.update({}, {$inc:{timeLeft: -1}}, {multi: true});
    RestrictionCollection.remove({timeLeft: {$lte: 0}});

  }, 1000);
});
