//uses ajax to import user profile data
app.userProfile = function () {

    // grabbing template in #profile script
    var user = $('#profile').html();
    // caching lodash template function with the template
    var userTemplate = _.template(user, {variable: 'm'});

    $.getJSON('http://applicant.pointsource.us/api/v1/7c026bb0-f1e5-4265-af4b-900e832ddfa5')
    .done(function (data) {
      // call the lodash template function passing it the json data
      $('.user-profile').html(userTemplate(data));
    })
    .fail(function (request, status, err) {
        console.log(err);
        var errMessage = 'Failed to connect to the PointSource API... try refreshing.';
        $('.user-profile').html(errMessage);
    });

};
