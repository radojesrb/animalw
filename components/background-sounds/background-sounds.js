// define the view model
// paths property is being used as a source for <audio> tag...
var SoundsViewModel = can.Map.extend({
	define: {
		paths: {
			value: {
		    ogg: 'sounds/crickets.ogg',
		    mp3: 'sounds/crickets.mp3'
		  }
		}
	}
});

// define the Sounds component
can.Component.extend({
  tag: 'animalw-sounds',
  template: can.view('components/background-sounds/background-sounds.stache'),
  scope: SoundsViewModel
});
