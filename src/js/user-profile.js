//uses ajax to import user profile data
app.userProfile = function () {
  //   var user = $('#profile').html();
  //   var userTemplate = _.template(user, {variable: 'm'});
  // console.log(user);
  //   console.log('near');
  //   console.log(userTemplate);

    $.getJSON('http://applicant.pointsource.us/api/v1/7c026bb0-f1e5-4265-af4b-900e832ddfa5')
    .done(function (response) {
      var name = response.person['first-name'];
      $('.user-profile').html('<span>' + name + '</span>');
      console.log(response);
    })
    .fail(function (request, status, err) {
        console.log(err);
        var errMessage = 'Failed to connect to the PointSource API... try refreshing.';
        $('.user-profile').html(errMessage);
    });
    console.log('far');
};
