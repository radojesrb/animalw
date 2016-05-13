// define view model
// animal property is being used to get and output all the info regarding some specific animal.
var DetailsViewModel = can.Map.extend({
  define: {
    animal: {
      value: null,
      get: function() {
        var slug = can.route.attr('slug');
        return Animal.findOne({'id': slug});
      }
    }
  }
});

// define Details component
can.Component.extend({
  tag: 'animalw-details',
  template: can.view('components/details/details.stache'),
  scope: DetailsViewModel
});
