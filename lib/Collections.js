SnowballCollection = new Meteor.Collection('snowballs');

Snowball = function(topic, geolocation){
  this.votes = 0;                // Votes start at 0
  this.topic = topic;
  this.timer = 0;
  this.geolocation = geolocation;

}
