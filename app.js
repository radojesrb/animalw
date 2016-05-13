// init the app
$(function () {
    var AppState = can.Map.extend({});
    var appState = new AppState();

    // bind the application state to the root of the application
    $('#animalw-main').html(can.view('main.stache', appState));

    // set up the routes
    can.route(':page', { page: 'intro' });
    can.route(':page/:slug', { slug: null });
    can.route(':page/:slug/:action', { slug: null, action: null });

    // override the click event
    $('body').on('click', 'a[href="javascript://"]', function(ev) {
      ev.preventDefault();
    });

    // bind the application state to the can.route
    can.route.map(appState);
    can.route.ready();
});
