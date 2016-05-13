// Temporary quick implementation of API simulation, ToDo: implement the NodeJS/ExpressJS API

// animals end points
can.fixture('GET /api/animals', 'models/animals.json');
can.fixture('GET /api/animals/{_id}', function(request, response) {
	can.ajax({
		url: 'models/animals.json',
		success: function(data) {
      var slug = parseInt(request.data.id);
      var animal = $.grep(data, function(e){ return e.id == slug; });

			response(animal[0]);
		}
	});
});

// continents end points
can.fixture('GET /api/continents', 'models/continents.json');
can.fixture('GET /api/continents/{_id}', function(request, response) {
	can.ajax({
		url: 'models/continents.json',
		success: function(data) {
      var slug = parseInt(request.data.id);
      var continent = $.grep(data, function(e){ return e.id == slug; });

			response(continent[0]);
		}
	});
});

// extinction end points
can.fixture('GET /api/conservation', 'models/conservation.json');
can.fixture('GET /api/conservation/{_id}', function(request, response) {
	can.ajax({
		url: 'models/conservation.json',
		success: function(data) {
      var id = parseInt(request.data.id);
      var status = $.grep(data.categories, function(e){ return e.id == id; });

			response(status[0]);
		}
	});
});
