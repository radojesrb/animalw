// define the view model
// animals property is being used to get and output the list of animals from API into the view
// sortClass property is being used for styling purposes. Once user interacts with the Trivia buttons this is being used as a flag for styling and displaying the resorted data.
// focusedAnimal property is being used for updatind the content of Trivia buttons.
// triviaQuestionOne and triviaQuestionTwo properties are there to cut the code repetition in view since both of them can be found in 2 different places.
var AnimalsViewModel = can.Map.extend({
	define: {
		animals: {
			value: null,
			set: function() {
				return Animal.findAll({});
			}
		},
		sortClass: {
			value: null
		},
		focusedAnimal: {
			value: null
		},
		triviaQuestionOne: {
			value: 'Who sleeps the most?'
		},
		triviaQuestionTwo: {
			value: 'Who sleeps the least?'
		}
	},
	// function that initiate sorting, it accepts type (by what property will sorting occur) and direction ASC/DESC
	sort: function(type, dir) {
		var me = this;
		this.attr('sortClass', type);
		var ani = this.attr('animals').done(function(data) {
			// start sorting once data is received
			chartPosition(data, type, dir, function(animal) {
				me.attr('focusedAnimal', animal.name);
				window.scrollTo(0, 0);
			});
		});
	}
});

// sorting pass trough function, implemented mostly since there was a need to pass on property identifier dinamicaly.
function chartPosition(data, type, dir, callback) {
	data.sort(propComparator(type, dir));
	callback(data[0]);
}

// actual sorting logic
function propComparator(prop, dir) {
    return function(a, b) {
			var sortValue = 0;
			if (a[prop] < b[prop]) {
				dir == 'desc' ? sortValue = 1 : sortValue = -1;
			}
			else if (a[prop] > b[prop]) {
				dir == 'desc' ? sortValue = -1 : sortValue = 1;
			}

			return sortValue;
		}
}

// define the Dashboard component
can.Component.extend({
  tag: 'animalw-dashboard',
  template: can.view('components/dashboard/dashboard.stache'),
  scope: AnimalsViewModel
});
