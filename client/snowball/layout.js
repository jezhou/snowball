Template.layout.events({
  'click .createSB': function(event, template){

    swal({
      title: "Start a snowball",
      text: "Write something and work together to roll the biggest snowball!",
      type: 'input',
      showCancelButton: true,
      closeOnConfirm: false,
    }, function(input){
      if(input == false || input == ""){
        swal("You need to write something!");
        return false;
      }

      var id = SnowballCollection.insert(new Snowball(input,
                                    moment().unix(),
                                    Geolocation.latLng()));
      swal("Success!", "Share it with others using /snowball/" + id, 'success');

    }

    );

  },

});
