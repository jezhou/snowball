Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){

  this.route('home', {
    path: '/'
  });

  this.route('leaderboard');

  this.route('/snowball/:_id', function(){
    var snowballId = this.params._id;

    this.render('snowball', {
      data: function() {
        return SnowballCollection.findOne({_id: snowballId});
      },
    });
  });

});
