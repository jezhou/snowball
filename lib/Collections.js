SnowballCollection = new Meteor.Collection('snowballs');

Snowball = function(topic, geolocation){
  this.velocity = 300;                // Velocity start at 300
  this.topic = topic;
  this.score = 0; 
  this.geolocation = geolocation;
}

// This collection keeps track of the snowballs a user is not allowed to roll
RestrictionCollection = new Meteor.Collection('restricted');

Restriction = function(user, snowball){
  this.user = user;
  this.snowball = snowball;
  this.timeLeft = 1800;
}
