// define the view model
// conserve property is being used to get and output the species conservation status data
var ConversationViewModel = can.Map.extend({
  define: {
    conserve: {
      value: null,
      get: function() {
        var me = this;
        var cId = me.attr('conservationId');

        return Conservation.findOne({'id': cId});
      }
    }
  }
});

// define the Conservation component
can.Component.extend({
  tag: 'animalw-conservation',
  leakScope: false, // leakScope was needed to be set to false since this is a nested component (placed inside of Details component)
  template: can.view('components/conservation/conservation.stache'),
  scope: ConversationViewModel
});
