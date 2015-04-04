Template.layout.events({
  'click .createSB': function(event, template){

    swal({
      title: "Throw a snowball",
      text: "Write something and compete for the biggest snowball!",
      type: 'input',
      showCancelButton: true,
      closeOnConfirm: false,
    }, function(input){
      if(input == false || input == ""){
        swal("You need to write something!");
        return false;
      }

      SnowballCollection.insert(new Snowball(input, Geolocation.latLng()));
      swal("Success!", "Share your new snowball here.", 'success');

    }

    );

  },

});
