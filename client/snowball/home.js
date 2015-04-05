Template.home.helpers({
  snowballs: function(){
    return SnowballCollection.find({}, {sort: {velocity: -1}});
  },
  countTime: function(referenceTime){
    return Chronos.liveMoment().unix() - referenceTime;
  },
  thawing: function(velocity){
    return velocity < 180 && velocity >= 30;
  },
  melting: function(velocity){
    return velocity < 30;
  },
});

Template.home.events({
  'click .btn-roll': function(event, template){

    var desiredSnowball = event.currentTarget.value;

    if(RestrictionCollection.find({ $and:[{user: Meteor.user()._id},{snowball: desiredSnowball}] }).count() > 0){
      swal("Sorry!", "You've already rolled this Snowball. Please wait " +
      RestrictionCollection.findOne({ $and:[{user: Meteor.user()._id},{snowball: desiredSnowball}] }).timeLeft + " more seconds before you roll it again.", "error");

      return false;
    }

    var currentVelocity = SnowballCollection.findOne({_id: desiredSnowball}).velocity;
    var increase = calculateVelocity(currentVelocity);

    SnowballCollection.update({_id: desiredSnowball}, {$inc: {velocity: increase}});

    swal("Roll on!", "This Snowball will now exist for " + increase + " seconds longer. Please wait 30 minutes before you push this Snowball again.", "success");

    RestrictionCollection.insert(new Restriction(Meteor.user()._id, desiredSnowball));

    return true;

  },
});

function calculateVelocity(currentVelocity){
  if(currentVelocity <= 300){
    return 300;
  }

  else if (currentVelocity < 180000){
    return Math.floor(180000 / currentVelocity);
  }

  return 1;
}
