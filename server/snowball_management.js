Meteor.startup(function(){
  Meteor.setInterval(function(){

    SnowballCollection.update({}, {$inc:{velocity: -1}}, {multi: true});
    SnowballCollection.remove({velocity: {$lte: 0}});

  }, 1000);
});
