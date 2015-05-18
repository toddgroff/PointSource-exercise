//uses ajax to import user profile data
app.userProfile = function () {
    var user = $('#profile').html();
    var userTemplate = _.template(user, {variable: 'm'});
    console.log(user);

    $.getJSON('http://applicant.pointsource.us/api/v1/7c026bb0-f1e5-4265-af4b-900e832ddfa5')
    .done(function (data) {
      var firstName = data.person['first-name'];
      var lastName = data.person['family-name'];
      // $('.user-profile').html('<span>' + firstName + ' ' + lastName + '</span>');
      $('.user-profile').html(userTemplate(data));
    })
    .fail(function (request, status, err) {
        console.log(err);
        var errMessage = 'Failed to connect to the PointSource API... try refreshing.';
        $('.user-profile').html(errMessage);
    });
    console.log('far');
};
