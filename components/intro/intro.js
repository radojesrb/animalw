// define view model
// title and subtitle properties are being used for the populating the view.
// mode property is used for styling the intros second state.
// redirect is being used to redirects user to dashboard with delay so that second state of intro can be visible.
var IntroViewModel = can.Map.extend({
	define: {
		title: {
			value: {
		    primary: 'animal',
		    suffix: 'world'
			}
		},
		subtitle: {
			value: 'it is their world as much as it is ours'
		},
		mode: {
			value: 'intro'
		},
  },
	setMode: function(val) {
		this.attr('mode', val);
	},
	redirect: function(path, delay) {
		setTimeout(function(){
			can.route.attr('page', path);
		}, delay);
	}
});

// define the Intro component
can.Component.extend({
  tag: 'animalw-intro',
  template: can.view('components/intro/intro.stache'),
  scope: IntroViewModel
});
